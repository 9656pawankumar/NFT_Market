import './App.css';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>      
          <Route path="/sellNFT" element={<SellNFT />}/>   
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>          
        </Routes>
    </div>
  );
}

export default App;
