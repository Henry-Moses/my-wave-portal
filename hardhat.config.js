require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "wss://serene-frosty-slug.rinkeby.discover.quiknode.pro/e4a629d3cd44bc1d326bb27c843330a8935483d7/",
      accounts: [
        "c3ce21b86e3893eb8bd51e942a39ca3d98fc3a672bfb07c33920934b219ed791",
      ],
    },
  },
};
