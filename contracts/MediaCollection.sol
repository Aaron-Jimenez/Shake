//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MediaCollection {

    address admin;

    uint largestMediaCount;

    mapping(string => uint) mediaIdToCollectionId;

    mapping(string => Media) mediaIdToMedia;

    mapping(uint => Collection) collectionIdToCollection;

    mapping(uint => string[]) collectionIdToMediaId;

    // All existing collections
    Collection[] public collections;

    struct Media {
        address owner;
        string id;
        string name;
        string genre;

        // Skill/Grade level
        string level;
    }

    // enum Genre {
    //     MATH, HISTORY, ENGLISH
    // }

    // enum Level {
    //     KINDERGARTEN, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12
    // }

    struct Collection {
        uint id;
        string genre;
    }

    constructor() {
        admin = msg.sender;

    }



    function createMedia(string memory hashId, 
                         string memory name, 
                         string memory genre,
                         string memory level,
                         uint collectionId,
                         uint newCollection) public {
        require(collectionId <= collections.length);
        Media memory _media = Media({owner: msg.sender, id: hashId, name: name, genre: genre, level: level});
        mediaIdToMedia[hashId] = _media;

        Collection memory _collection;
        if (newCollection > 0) {
            // string[] memory hashIds = new string[](100);
            _collection = Collection(collections.length, genre);
            collections.push(_collection);
            collectionIdToCollection[collections.length] = _collection;
        } else {
            _collection = collections[collectionId];
        }
        mediaIdToCollectionId[hashId] = _collection.id;
        collectionIdToMediaId[_collection.id].push(_media.id);
    }

    /*Returns all media in the form:

    ( [collection.id#0, collection.id#1, ...],
      [collection.genre#0, collection.genre#1, ...],

      [ [coll#0.media#0.owner, coll#0.media#1.owner, ...],

        [coll#1.media#0.owner, coll#1.media#1.owner, ...] ] )

    and continues similarly for hashIds, names, genres, and levels.    
    */
    function getAllCollections() public view returns (uint[2] memory ids, 
                                                      string[2] memory genres,
                                                      address[2][1] memory owners, 
                                                      string[2][1] memory hashIds,
                                                      string[2][1] memory names,
                                                      string[2][1] memory levels) {
        // console.log("Collections: ", collections);
        //TODO: create arrays with proper size. For now just setting 2 two to account for 2 medias
        for (uint i=0; i < collections.length; i++) {
            Collection memory _collection = collections[i];
            ids[i] = _collection.id;
            genres[i] = _collection.genre;
            
            string[] memory _mediaIds = collectionIdToMediaId[_collection.id];
            for (uint j=0; j < _mediaIds.length; j++) {
                Media memory _media = mediaIdToMedia[_mediaIds[j]];
                owners[i][j] = _media.owner;
                hashIds[i][j] = _media.id;
                names[i][j] = _media.name;
                levels[i][j] = _media.level;
            }
        }
    }

    function getCollections() public view returns (Collection[] memory) {
        return collections;
    }

    function getCollection(uint ind) public view returns (Collection memory) {
        return collections[ind];
    }
}