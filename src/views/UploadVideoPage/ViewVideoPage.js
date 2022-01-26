import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import logo from "../../images/teaching_icon.svg";
import searchImage from "../../images/cool_search_image.svg"

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
        <div class="text-center items-center bg-slate-100">
            <div class=" flex flex-row">
                <img src={searchImage} alt="Img of teacher" className="h-24 w-24 mt-4 mx-auto"/>
            </div>
            {isSelected ? (
                <div>
                    <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                        <source src={"http://localhost:8081/video/view-by-name?filename=" + selectedFile} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <div class="text-slate-500 text-xl mt-4 mb-2">
                    <p>Search</p>
                </div>
            )}
            <div>
                <input class="rounded border-2 border-cyan-600 text-center" placeholder="ex: long division" type="text" onChange={changeHandler} />
            </div>

            <div>
                <button class="rounded ring-1 hover:ring-cyan-400 text-center text-slate-600 bg-slate-100 px-4 my-2" type="button" onClick={getVideo}>Submit</button>
            </div>
                {/*<VideoThumbnail*/}
                {/*    videoUrl="http://localhost:8081/video/view-by-name?filename=bigbuck.mp4"*/}
                {/*    width={120}*/}
                {/*    height={80}*/}
                {/*/>*/}
                {/*<Thumbnail></Thumbnail>*/}
            <div class="my-16">
                <Link class="text-sm text-slate-600 rounded hover:border-2 hover:border-blue-400" to="/video/upload">Want to create your own collection?</Link>
            </div>

        </div>
    );
}

export default ViewVideoPage;