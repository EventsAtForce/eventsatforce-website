import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Athenova from './pages/Athenova';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  return (
    <div className='App w-full'>
       <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Athenova />} />
        </Routes>
    </div>
  )
}

export default App
