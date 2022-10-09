// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ByteHasher } from './helpers/ByteHasher.sol';
import { IWorldID } from './interfaces/IWorldID.sol';

contract VirtualStudyGroupApp is ERC721URIStorage {

  using ByteHasher for bytes;
  using Counters for Counters.Counter;
  Counters.Counter public _totalNFTs;
  uint public _totalGroups = 0;
  mapping(uint => GroupBluePrint) public groupsList;


  /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();
    /// @dev The WorldID instance that will be used for verifying proofs
    // IWorldID internal immutable worldId;
    /// @dev The WorldID group ID (1)
    uint256 internal immutable groupId = 1;
    /// @dev Whether a nullifier hash has been used already. Used to prevent double-signaling
    mapping(uint256 => bool) internal nullifierHashes;



  struct GroupBluePrint {
    uint id;
    string cid;
    uint targetAmmount;
    uint totalDonations;
    address organizer;
  }

  event GroupCreated (
    uint id,
    string cid,
    uint targetAmmount,
    address organizer
  );

  constructor() ERC721("VirtualStudyGroupApp", "VSGA") {}
  // calldata is read only, use for funct inputs as params
  // function createGroup(string calldata _cid, uint _targetAmmount) public {
  function createGroup(string calldata _cid, uint _targetAmmount, address input, uint256 root, uint256 nullifierHash, uint256[8] calldata proof) public {
    first, we make sure this person hasn't done this before
    if (nullifierHashes[nullifierHash]) revert InvalidNullifier();
    then, we verify they're registered with WorldID, and the input they've provided is correct
    worldId.verifyProof(
      root,
      groupId,
      abi.encodePacked(input).hashToField(),
      nullifierHash,
      abi.encodePacked(address(this)).hashToField(),
      proof
  );
  finally, we record they've done this, so they can't do it again (proof of uniqueness)
  nullifierHashes[nullifierHash] = true;


  groupsList[_totalGroups] = GroupBluePrint(_totalGroups, _cid, _targetAmmount, 0, msg.sender);
    emit GroupCreated(_totalGroups, _cid, _targetAmmount, msg.sender);
    _totalGroups++;
  }

  function donate(uint _donationId, uint _donationAmmount) public {
    GroupBluePrint storage _currentGroup = groupsList[_donationId];
    _currentGroup.totalDonations += _donationAmmount;
  }

  function getAllGroups() public view returns (GroupBluePrint[] memory) {
      GroupBluePrint[] memory groupsArray = new GroupBluePrint[](_totalGroups);

      for (uint i = 0; i < _totalGroups; i++) {
          GroupBluePrint storage currentItem = groupsList[i];
          groupsArray[i] = currentItem;
      }
      return groupsArray;
  }

}

