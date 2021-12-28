import React, {useState} from 'react'

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
	};

    return (
        <div class='videoUpload'>
            <input type="file" name="file" onChange={changeHandler} />
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

