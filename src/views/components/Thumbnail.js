import React, {useState} from 'react'
import axios from 'axios';
import {ethers} from "ethers";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";
import MediaCollection from '../../artifacts/contracts/MediaCollection.sol/MediaCollection.json';
import {NavLink} from "react-router-dom";

function UploadVideoPage() {

    const hostname = "http://localhost:8081";

    return (
        <div class="thumbnail" className='videoUpload' >
            <NavLink to="/video/upload/add-to-collection/lions">
                <img height="150px" width="250px" src={hostname + "/image/birds"} alt=""/>
            </NavLink>
            <img height="150px" width="250px" src={hostname + "/image/lions"} alt=""/>
        </div>
    )
}

export default UploadVideoPage

