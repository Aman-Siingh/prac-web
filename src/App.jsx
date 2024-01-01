import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import HomePages from './pages/Homepage';
import AboutPage from './pages/Aboutpage'; 
import Services from './pages/Servicespage';
import Gallery from './pages/Gallery';
export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          
          <Route index element={<HomePages/>} />
          <Route path="/home" component={<HomePages/>} />
          <Route path="/about" component={<AboutPage/>} />
          <Route path="/services" component={<Services/>} />
          <Route path="/gallery" component={<Gallery/>} />
          {/* Add more Route components for additional pages */}
        </div>
      </Router>
    </BrowserRouter>
  );
}
