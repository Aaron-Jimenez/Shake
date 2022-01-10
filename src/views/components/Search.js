import React, {useState} from 'react';
import axios from 'axios';
import {ethers} from "ethers";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";
import {mediaCollectionAddress} from "../UploadVideoPage/UploadVideoPage"


function Search() {

    const [collection, setCollection] = useState();
    const [isCollected, setIsCollected] = useState(false);

    const changeHandler = (event) => {
        setCollection(event.target.value);
    };


    const getCollection = async () => {
        console.log(collection)
        if (typeof window.ethereum != 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(mediaCollectionAddress, Greeter.abi, provider)
            try {
                const data = await contract.getCollectionFromSearch()
                console.log('data: ', data)
            } catch (err) {
                console.log("Error: ", err)
            }
        }
        setIsSelected(true);
        // return video;
    }

    return (
        <div className='videoUpload'>
            <input type="text" onChange={changeHandler} />
            {isCollected ? (
                <div>
                    <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                        <source src={"http://localhost:8081/video/view-by-name?filename=" + selectedFile} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <p>Search</p>
            )}
            <div>
                <button type="button" onClick={getCollection}>Submit</button>
            </div>
        </div>
    );
}

export default ViewVideoPage;