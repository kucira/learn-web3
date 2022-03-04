require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const projectIdMumbai = `yzdrIbzgWNtoRlDt_-H5-D2FJX5Sjw4b`;
const projectIdMainnet = `nZbDNwlUdV3LrL-N57mWUKm7-qPJQbyb`;
const pk = fs.readFileSync("./.secret").toString();

const networks = {
  hardhat: {
    chaindId: 1337,
  },
  mumbai: {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${projectIdMumbai}`,
    accounts: [pk],
  },
  mainnet: {
    url: `https://polygon-mainnet.g.alchemy.com/v2/${projectIdMainnet}`,
    accounts: [pk],
  },
};

module.exports = {
  solidity: "0.8.4",
  networks,
};
