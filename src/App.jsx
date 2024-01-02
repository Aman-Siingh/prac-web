import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePages from './pages/Homepage';
import AboutPage from './pages/Aboutpage'; 
import Services from './pages/Servicespage';
import Gallery from './pages/Gallery';
export default function App() {
  return (
    
      <Router>
        
        <Routes>
          <Route index element={<HomePages/>} />
          <Route path="/home"element={<HomePages/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />
          {/* Add more Route components for additional pages */}
        </Routes>
        
      </Router>
  );
}
