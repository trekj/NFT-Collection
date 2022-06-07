require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/XKLgBOxntp5xHYjTaPYks76ahB4zTF9m',
      accounts: ['454ce5b14977d69d1db915a7aec6d0605ae3808d7d36cadbe073ce527deef657'],
    },
  },
};
