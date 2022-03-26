import React, {useState} from 'react'
import axios from 'axios';
import {ethers} from "ethers";
import MediaCollection from '../../../artifacts/contracts/MediaCollection.sol/MediaCollection.json';
import FileUploadButton from "../../components/buttons/FileUploadButton";
import SubmitButton from "../../components/buttons/SubmitButton";
import CommonInput from "../../components/buttons/CommonInput";
import FinishedUploadPage from "./FinishedUploadPage";

function UploadPage() {

	const mediaCollectionAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const [filename, setFilename] = useState('');

	const [owner, setOwner] = useState('');
	const [isOwner, setIsOwner] = useState(false);

	const handleSubmission = async () => {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner()
			const contract = new ethers.Contract(mediaCollectionAddress, MediaCollection.abi, signer)
			const transaction = await contract.createMedia(selectedFile.name, owner, "genre", "level", 0, 1);
			await transaction.wait()
		}

		console.log(filename);
		const formData = new FormData();
		formData.append("file", selectedFile);
		console.log(formData.entries().next());

		axios.post("http://localhost:8081/video/upload", formData, { // receive two parameter endpoint url ,form data
		}).then(res => { // then print response status
			console.log(res.statusText)
		})
	};

	async function requestAccount() {
		await window.ethereum.request({method: 'eth_requestAccounts'})
	}

    const fileSelectedHandler = (event) => {
		console.log("File chosen: ", event.target.files[0].name)
		setSelectedFile(event.target.files[0]);
		setFilename(event.target.files[0].name);
		setIsSelected(true);
	};

	const changeHandlerOwner = (event) => {
		setOwner(event.target.value);
	}

	function Filename() {
		if (isSelected) {
			return (
				<div className="text-center text-xs my-4 font-mono">
					<p>Filename: {filename}</p>
				</div>
			)
		}
		return <div></div>
	}

	return (
		<div className="text-center border-slate-400 items-center bg-slate-100">
			<div>
				<h1 className="py-10 text-center text-xl font-mono">Upload a lesson!</h1>
			</div>
			<FileUploadButton selectedFileCallback={fileSelectedHandler}/>
			<Filename/>
			<CommonInput inputHandler={changeHandlerOwner} placeHolderText="Owner's Name"/>
			<SubmitButton submitCallback={handleSubmission}/>
		</div>
	)
}

export default UploadPage;

