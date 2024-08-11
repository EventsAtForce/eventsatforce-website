import React from 'react'
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Societies from './pages/Societies';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='App'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Societies" element={<Societies />} />
        </Routes>
      <Footer />
    </div>    
  )    
}

export default App
