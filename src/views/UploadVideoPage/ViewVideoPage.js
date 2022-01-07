import React, {useState} from 'react';
import axios from 'axios';


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

    return (
        <div>
            <input type="text" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                        <source src={"http://localhost:8081/video/view?filename=" + selectedFile} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <p>Select a file</p>
            )}
            <div>
                <button type="button" onClick={getVideo}>Submit</button>
            </div>
        </div>
    );
}

export default ViewVideoPage;