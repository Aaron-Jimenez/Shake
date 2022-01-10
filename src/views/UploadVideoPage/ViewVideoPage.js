import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Thumbnail from "../components/Thumbnail";

function ViewVideoPage() {

    const [selectedFile, setSelectedFile] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.value);
    };



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

    // const playBigBuck = () => {
    //     setSelectedFile("bigbuck.mp4");
    //     getVideo();
    // }

    return (
        <div className='videoUpload'>
            {isSelected ? (
                <div>
                    <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                        <source src={"http://localhost:8081/video/view-by-name?filename=" + selectedFile} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <p>Search</p>
            )}
            <input type="text" onChange={changeHandler} />
            <div>
                <button type="button" onClick={getVideo}>Submit</button>
            </div>
                {/*<VideoThumbnail*/}
                {/*    videoUrl="http://localhost:8081/video/view-by-name?filename=bigbuck.mp4"*/}
                {/*    width={120}*/}
                {/*    height={80}*/}
                {/*/>*/}
                <Thumbnail></Thumbnail>
            <Link to="/video/upload">Want to create your own collection?</Link>
        </div>
    );
}

export default ViewVideoPage;