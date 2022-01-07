import React, {useState} from 'react'
import axios from 'axios';
import {ethers} from "ethers";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";
import MediaCollection from '../../artifacts/contracts/MediaCollection.sol/MediaCollection.json';

function UploadVideoPage() {

	const mediaCollectionAddress = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0"

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

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

	const handleSubmission = async () => {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner()
			const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
			const transaction = await contract.createMedia(selectedFile.name, selectedFile.name, "genre", "level", 0, 1);
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
        <div className='videoUpload'>
			<input type="file" name="file" id="input" onChange={changeHandler} />
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

