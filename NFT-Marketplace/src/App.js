import './App.css';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './wagmi.config.ts';
import { ConnectWallet } from './ConnectWallet.tsx';
import { WalletOptions } from './wallet-options.tsx' ;
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const   queryClient = new QueryClient();
function App() {
  return (
    <div className='h-screen'>
        <Routes>      
        <Route path="/" element={<SellNFT />}/>  
          <Route path="/sellNFT" element={<SellNFT />}/>   
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>          
        </Routes>

        <div className='row text-center' style={{justifyContent:"center"}}>
          <div>
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}> 
    <ConnectWallet /> 
    </QueryClientProvider> 
    </WagmiProvider>
    </div>
    </div>
    </div>
  );
}

export default App;
