import { useState } from 'react';
import { ethers } from 'ethers';
import './raw/App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import UploadPage from './views/pages/upload/UploadPage'
import HomePage from "./views/pages/HomePage";
import NavigationBar from "./views/components/NavigationBar";


const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {

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

  return (
    <div>
      <NavigationBar></NavigationBar>


      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/upload' element={<UploadPage/>}/>
        <Route path='/video/search' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
