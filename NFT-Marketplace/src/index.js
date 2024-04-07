import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SellNFT from './components/SellNFT';
import Profile from './components/Profile';
import NFTPage from './components/NFTpage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/sellNFT" element={<SellNFT />}/>   
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
