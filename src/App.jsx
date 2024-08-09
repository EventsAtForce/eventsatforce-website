import React from 'react'
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </>    
  )    
}

export default App
