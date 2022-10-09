require('@nomiclabs/hardhat-waffle')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.10',
  networks: {
    hardhat: {
      chainId: 1337, //matic
      // chainId: 0xf45db2a, //skale
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['YOUR PRIVATE KEY FROM METAMASK'],
    },
    skale: {
      url: 'https://eth-online.skalenodes.com/v1/hackathon-content-live-vega',
      accounts: ['YOUR PRIVATE KEY FROM METAMASK'],
    },
    optimistic: {
      url:
        'https://opt-kovan.g.alchemy.com/v2/cfv68qUqLuZipE8sXJYuG-KQ1eKiuPsl',
      accounts: ['YOUR PRIVATE KEY FROM METAMASK'],
    },
    rinkeby: {
      url:
        'https://eth-rinkeby.gateway.pokt.network/v1/lb/62b8802d123e6f0039866020',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
  },
  paths: {
    artifacts: './src/artifacts',
    cache: './src/cache',
  },
  NODE_OPTIONS: '--openssl-legacy-provider',
}
