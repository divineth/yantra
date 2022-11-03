// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const SRI = await hre.ethers.getContractFactory("SRI");
  const sri = await SRI.deploy("0x2BC191693e59E48cae8837831a241C5A44341616", "0x05Ed6E11688FA791c0B5Ef164d0323b2E732B5f7", "0xd0834d4b34Aac925e0b041E83bEe6a076a7959aB");

  await sri.deployed();

  console.log(
    `Contract deployed to ${sri.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
