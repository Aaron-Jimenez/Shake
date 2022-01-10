const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("MediaCollection", function() {
    it("Should return info for 1st media and collection", async function () {
        const MediaCollection = await ethers.getContractFactory("MediaCollection");
        const coll = await MediaCollection.deploy();
        await coll.deployed();

        const createMediaTx = await coll.createMedia("testHash", "testName", "testGenre", "testLevel", 0, 1);
        await createMediaTx.wait();

        const collections = await coll.getAllCollections();

        expect(collections[0][0]).to.equal(0);
        expect(collections[1][0]).to.equal("testGenre");

        assert(collections[2][0][0]);
        assert(collections[2][0][1]);

        expect(collections[3][0][0]).to.equal("testHash");

        expect(collections[4][0][0]).to.equal("testName");

        expect(collections[5][0][0]).to.equal("testLevel");
    })
})

describe("MediaCollection", function () {
    it("Should return 1 collection with it's media", async function () {
      const MediaCollection = await ethers.getContractFactory("MediaCollection");
      const coll = await MediaCollection.deploy();
      await coll.deployed();

      const createMediaTx = await coll.createMedia("testHash", "testName", "testGenre", "testLevel", 0, 1);
      await createMediaTx.wait();

      const createMediaTx2 = await coll.createMedia("testHash2", "testName2", "testGenre2", "testLevel2", 0, 0);
      await createMediaTx2.wait();

      const collections = await coll.getAllCollections();
  
      expect(collections[0][0]).to.equal(0);
      expect(collections[1][0]).to.equal("testGenre");

      assert(collections[2][0][0]);
      assert(collections[2][0][1]);

      expect(collections[3][0][0]).to.equal("testHash");
      expect(collections[3][0][1]).to.equal("testHash2");

      expect(collections[4][0][0]).to.equal("testName");
      expect(collections[4][0][1]).to.equal("testName2");

      expect(collections[5][0][0]).to.equal("testLevel");
      expect(collections[5][0][1]).to.equal("testLevel2");
    });
})

describe("MediaCollection", function() {
    it("Should owners", async function () {
        const MediaCollection = await ethers.getContractFactory("MediaCollection");
        const coll = await MediaCollection.deploy();
        await coll.deployed();

        const createMediaTx = await coll.createMedia("testHash", "testName", "testGenre", "testLevel", 0, 1);
        await createMediaTx.wait();

        const collections = await coll.getOwnersByCollectionId(0);

        expect(collections[0]).to.equal("testHash");
    })
})

