require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    ropsten:{
      url:process.env.ROPSTEN_INFURA_API,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
