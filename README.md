# Virtual study group app for Latinoamerica

Students from Latin America come together to prepare for hackathons and crypto events along with other students that are studying for the same subject matter. The app can provide them with study material, tools, discussion helps, guides and incentives, etc.

Meet new people who share your interests in crypto. Become a crypto developer, supporter, or investor through online events. It’s free to create an account.

## How it works

### Join a group

Meet others who like what you like, find your community.

### Find an event

Crypto is rising in Latin America and events are happening in every city, join events that interest you and get new insights into new topics.

### Start a group

Start a new group and get support from the community around the world. You don’t have to be an expert to gather people together and explore shared interests.

## What it does

- Allows users to create study groups
- Allows users to provide updates about their group’ status, topics, subjects, and events
- Allows users to follow their favorite study groups and received personalized content
- Allows users to donate erc20 tokens
- Allows users to donate NFTs
- Allows users to browse study groups and filter them
- It gives users a more accurate picture of the impact we can do it together
- Users can send or receive tips for their cause
- Users can send or receive tips
- Study Groups are represented as NFTs
- Easily collect accurate information that is available to the public using blockchain technology

## How we built it

Virtual study group app for Latinoamerica makes use of the following software:

- `web3auth` enables our application to authenticate users with familiar login flows such as single sign-on with Google and Twitter, eliminating the need for users to directly interface with vulnerable public-private key pairs.

* `SuperFluid` enables stream payment for donations and rewards for our application

* `World Coin` makes sure users create only one Study Group event per person to avoid any scams.

* `Xmtp` allows donators to chat with organizers and members of the groups.

* `Ethereum Name Service (ENS)` allows donators to look up Ethereum Name Service and convert them to a wallet addresses.

* `Pocket Network end point` we are using the Pocket Network infrastructure to scale our application in a cost-efficient way.
  https://eth-mainnet.gateway.pokt.network/v1/lb/1017995c1f06ecae17962bcd

* `TableLand` made our work easy with the Ethereum network. This allows us to work with a relational database to store Study Groups events, references, and metadata for EVM chains like Ethereum. We will definitely keep using complex TableLand functions in the future.

- `IPFS NFTStorage`facilitated the storage of NFTS, events, and metadata of every Study Group. Every record generates a transaction hash used to create an NFT of a photo.

- `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.
- `Solidity` for the smart contract.
- `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.
- `Hardhat` for local blockchain development.
- `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.

# deployed Address

npx hardhat run scripts/deploy.js --network mumbai

- deployedSkaleContract ='0x15036E33e8E8f706fd77A1aC550d28FD58432c1B'
- deployedSkaleContract ='0x1aae17D2C4B5ea1b6cf4eeFC0D2f54bc5cD464cf'

===============

DEMO

- For the demo use 0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11
- superFluid dashboard
  https://app.superfluid.finance/stream/polygon-mumbai/0x11760db13ae3aa5bca17fc7d62172be2a2ea9c11-0x7214859dd1750d31eda889ba44d432f9805ff3f7-0x5d8b4c2554aeb7e86f387b4d6c00ac33499ed01f-0.0

- Valist https://app.valist.io/main-account/pets-found-me
