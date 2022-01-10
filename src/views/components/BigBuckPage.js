import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function ViewVideoPage() {

    const hostname = "http://localhost:8081";

    const [selectedFile, setSelectedFile] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    // const changeHandler = (event) => {
    //     setSelectedFile(event.target.value);
    // };



    const getVideo = () => {
        console.log(selectedFile)
        // const video = axios.get('http://localhost:8081/video/view', {
        //     params: {
        //         file: selectedFile
        //     }
        // }).then(function (response) {
        //         console.log(response);
        // })
        setIsSelected(true);
        // return video;
    }

    return (
        <div className='videoUpload'>
            {isSelected ? (
                <div>
                    <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                        <source src={"http://localhost:8081/video/view-by-name?filename=bigbuck.mp4"} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <img height="150px" width="250px" src={hostname + "/image/birds"} alt=""/>
            )}
            <div>
                <button type="button" onClick={getVideo}>Watch Lesson</button>
            </div>
            <Link to="/video/upload/add-to-collection/lions">Want to add to this collection?</Link>
        </div>
    );
}

export default ViewVideoPage;