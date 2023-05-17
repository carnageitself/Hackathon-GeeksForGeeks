//a267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};