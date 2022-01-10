import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import UploadVideoPage from './views/UploadVideoPage/UploadVideoPage'
import ViewVideoPage from "./views/UploadVideoPage/ViewVideoPage";
import BigBuckPage from "./views/components/BigBuckPage";
import UploadLions from "./views/components/UploadLions";
import PurchaseBirds from "./views/components/PurchaseBirds";

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {
  const [greeting, setGreetingValue] = useState('')

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
  }

  async function fetchGreeting() {
    if (typeof window.ethereum != 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      setGreetingValue('')
      await transaction.wait()
      fetchGreeting()
    }
  }

  async function getCollections() {
    if (typeof window.ethereum != 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const collections = await contract.getAllCollections()
        console.log('data: ', collections)
      } catch (err) {
        console.log("Error getting collections: ", err)
      }

    }
  }

  // function renderThumbnails(collections) {
  //   collections.map
  //   var names = ['Jake', 'Jon', 'Thruster'];
  //   var namesList = names.map(function(name){
  //     return <li>{name}</li>;
  //   })
  //
  //   return  <ul>{ namesList }</ul>
  // }

  return (
    <div>
      <nav>
        <ul class="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/video/upload">Upload Video</Link>
          </li>
          <li>
            <Link to="/video/view">View Video</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/'/>
        <Route path='/video/upload' element={<UploadVideoPage/>}/>
        <Route path='/video/view' element={<ViewVideoPage/>}/>
        <Route path='/video/upload/add-to-collection' element={<BigBuckPage/>}/>
        <Route path='/video/upload/add-to-collection/lions' element={<UploadLions/>}/>
        <Route path='/purchase/birds' element={<PurchaseBirds/>}/>
      </Routes>
    </div>
  );
}

export default App;
