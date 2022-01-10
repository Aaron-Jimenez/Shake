import React, {useState} from 'react'
import axios from 'axios';
import {ethers} from "ethers";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";
import MediaCollection from '../../artifacts/contracts/MediaCollection.sol/MediaCollection.json';

function UploadVideoPage() {

    const mediaCollectionAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

    const hostname = "http://localhost:8081";

    const [owners, setOwners] = useState([]);
    const [isOwnerSet, setIsOwnerSet] = useState(false);

    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'})
    }

    const changeHandlerOwner = (event) => {
        setOwners(event.target.value);
    }

    const handleSubmission = async () => {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
            const owners = await contract.getOwnersByCollectionId(0);
            console.log(owners)

            setOwners(owners);
            setIsOwnerSet(true);
        }
    }



    return (
        <div className='videoUpload' >
            <img height="150px" width="250px" src={hostname + "/image/birds"} alt=""/>

            {isOwnerSet ? (
                <div>
                    <ul>
                    {owners.map(function (owner) {
                        return '<li>' + owner + '</li>';
                    })}
                    </ul>
                </div>
            ) : (
                <p>Select a file</p>
            )}

            <div>
                <button type="button" onClick={handleSubmission}>Purchase</button>
            </div>
        </div>
    )
}

export default UploadVideoPage

