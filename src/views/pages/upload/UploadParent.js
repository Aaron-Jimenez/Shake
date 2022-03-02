import React, {useState} from 'react';
import UploadPage from "./UploadPage";
import FinishedUploadPage from "./FinishedUploadPage";
import axios from "axios";

function UploadParent() {

    const [filenameSubmitted, setIsFilenameSubmitted] = useState(false);
    const [filename, setFilename] = useState('');


    const handleSubmission = () => {
        // if (typeof window.ethereum !== 'undefined') {
        // 	await requestAccount()
        // 	const provider = new ethers.providers.Web3Provider(window.ethereum);
        // 	const signer = provider.getSigner()
        // 	const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
        // 	console.log(selectedFile.name)
        // 	const transaction = await contract.createMedia(selectedFile.name, owner, "genre", "level", 0, 1);
        // 	await transaction.wait()
        // }

        console.log(filename);
        const formData = new FormData();
        formData.append("file", filename);
        console.log(formData.entries().next());

        axios.post("http://localhost:8081/video/upload", formData, { // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res.statusText)
        })

        // eslint-disable-next-line no-restricted-globals
        // location.assign('/upload/show');

        setIsFilenameSubmitted(true);
    };

    // function submit(filename) {
    //     setFilename(filename);
    //     setIsFilenameSubmitted(true);
    // }
    function SubmitAction() {
        if (!filenameSubmitted) {
            console.log("rendering Upload Page filenameSubmitted=", filenameSubmitted)
            return <UploadPage handleSubmission={handleSubmission}/>
        } else {
            console.log("rendering FinishedUploadPage")
            return <FinishedUploadPage uploadedFilename={() => filename}/>
        }
    }

    return (
        <div class="text-center items-center bg-slate-100">
            {SubmitAction()}
        </div>
    );
}

export default UploadParent;