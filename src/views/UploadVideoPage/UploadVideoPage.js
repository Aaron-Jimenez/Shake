import React, {useState} from 'react'
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from "./libs/s3Client.js"; // Helper function that creates Amazon S3 service client module.
// import {path} from "path";
// import {fs} from "fs";

function UploadVideoPage() {

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
        const formData = new FormData();
		formData.append('File', selectedFile);
		const file = document.getElementById('uploadedFile').files[0];
		console.log(file);
		// const file = "OBJECT_PATH_AND_NAME"; // Path to and name of object. For example '../myFiles/index.js'.
		// const fileStream = fs.createReadStream(file);	
	};

    return (
        <div className='videoUpload'>
            <input type="file" id="uploadedFile" onChange={changeHandler} />
            {isSelected ? (
				<div>
                    <p>Your file has been uploaded!</p>
					<p>Filename: {selectedFile.name}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
            <div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
        </div>
    )
}

export default UploadVideoPage

