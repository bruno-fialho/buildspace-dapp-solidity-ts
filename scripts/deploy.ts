import { ethers } from "hardhat";

async function main() {
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.001"),
  });

  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
