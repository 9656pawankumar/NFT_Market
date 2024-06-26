import logo from '../logo.png';
import fullLogo from '../full_logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {

const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

async function getAddress() {
  const ethers = require("ethers");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const addr = await signer.getAddress();
  updateAddress(addr);
}

// function updateButton() {
//   const ethereumButton = document.querySelector('.enableEthereumButton');
//   ethereumButton.textContent = "Connected";
//   ethereumButton.classList.remove("hover:bg-blue-70");
//   ethereumButton.classList.remove("bg-blue-500");
//   ethereumButton.classList.add("hover:bg-green-70");
//   ethereumButton.classList.add("bg-green-500");
// }

// async function connectWebsite() {

//     const chainId = await window.ethereum.request({ method: 'eth_chainId' });
//     if(chainId !== '11155111')
//     {
//       //alert('Incorrect network! Switch your metamask network to Rinkeby');
//       await window.ethereum.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{ chainId: '11155111' }],
//      })
//     }  
//     await window.ethereum.request({ method: 'eth_requestAccounts' })
//       .then(() => {
//         updateButton();
//         getAddress();
//         window.location.replace(location.pathname)
//       });
// }

  useEffect(() => {
    if(window.ethereum == undefined)
      return;
    let val = window.ethereum.isConnected();
    if(val)
    {
      console.log("here");
      getAddress();
      toggleConnect(val);
    }

    window.ethereum.on('accountsChanged', function(accounts){
      window.location.replace(location.pathname)
    })
  });

    return (
      <div className="">
      <nav className="w-screen" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5))' }}>
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
              <li className='w-3/10 flex items-end'>
                  <ul className='lg:flex justify-start font-bold mr-10 ml-10 text-lg'>
                      {location.pathname === "/profile" ? 
                          <li className='border-b-2 ml-2 hover:pb-0 p-2'>
                              <Link className="text-black" to="/profile">Profile</Link>
                          </li>
                          :
                          <li className='hover:border-b-2'>
                              <Link className="text-black" to="/profile">Profile</Link>
                          </li>              
                      }  
                  </ul>
              </li>
              <li className='w-3/10 text-center font-bold text-xl'>
                  <img src={logo} alt="" width={40} height={40} className="inline-block -mt-2"/>
                  NFT Marketplace
              </li>
              <li className='w-3/10 flex justify-end items-end'>
                  <ul className='lg:flex justify-end font-bold mr-10 text-lg'>
                      {location.pathname === "/sellNFT" ? 
                          <li className='border-b-2 hover:pb-0 p-2'>
                              <Link to="/sellNFT">List My NFT</Link>
                          </li>
                          :
                          <li className='hover:border-b-2'>
                              <Link to="/sellNFT">List My NFT</Link>
                          </li>              
                      } 
                  </ul>
              </li>
          </ul>
      </nav>
  </div>
  

    );
  }

  export default Navbar;