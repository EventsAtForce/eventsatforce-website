import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Societies from './pages/Societies';
import Team from './pages/Teams';

function App() {
  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    locomotiveScroll.scrollTo(0, {
      duration: 0,
      disableLerp: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [location]);

  return (
    <div className='App' data-scroll-container>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Societies" element={<Societies />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;