const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MediaCollection", function () {
    it("Should return 1 collection with it's media", async function () {
      const MediaCollection = await ethers.getContractFactory("MediaCollection");
      const coll = await MediaCollection.deploy();
      await coll.deployed();

      const createMediaTx = await coll.createMedia("testHash", "testName", "testGenre", "testLevel", 1);

      await createMediaTx.wait();

      const collections = await coll.getAllCollections();
  
      console.log(collections[0])
      expect(collections[0][0]).to.equal(1);
    });
  });