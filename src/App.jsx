import React from 'react'
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>    
  )    
}

export default App
