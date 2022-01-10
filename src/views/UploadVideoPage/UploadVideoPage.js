import React, {useState} from 'react'
import axios from 'axios';
import {ethers} from "ethers";
import MediaCollection from '../../artifacts/contracts/MediaCollection.sol/MediaCollection.json';

function UploadVideoPage() {

	const mediaCollectionAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const [owner, setOwner] = useState('');
	const [isOwner, setIsOwner] = useState(false);

	async function requestAccount() {
		await window.ethereum.request({method: 'eth_requestAccounts'})
	}

	// async function setGreeting() {
	// 	if (typeof window.ethereum !== 'undefined') {
	// 		await requestAccount()
	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const signer = provider.getSigner()
	// 		const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
	// 		const transaction = await contract.createMedia(selectedFile.name, selectedFile.name, "genre", "level", 0, 1);
	// 		// setGreetingValue('')
	// 		await transaction.wait()
	// 		// fetchGreeting()
	// 	}
	// }

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const changeHandlerOwner = (event) => {
		setOwner(event.target.value);
	}

	const handleSubmission = async () => {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner()
			const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
			console.log(selectedFile.name)
			const transaction = await contract.createMedia(selectedFile.name, owner, "genre", "level", 0, 1);
			await transaction.wait()
		}

		console.log(selectedFile);
		const formData = new FormData();
		formData.append("file", selectedFile);
		console.log(formData.entries().next());

		axios.post("http://localhost:8081/video/upload", formData, { // receive two parameter endpoint url ,form data
		}).then(res => { // then print response status
			console.log(res.statusText)
		})
	};

    return (
        <div className='videoUpload' >
			<div>
				<input type="text" name="file" onChange={changeHandlerOwner} />
			</div>
			<input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
				</div>
			) : (
				<p>Select a file</p>
			)}
            <div>
				<button type="button" onClick={handleSubmission}>Submit</button>
			</div>
        </div>
    )
}

export default UploadVideoPage

