import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import AboutPage from './pages/Aboutpage'; // import your about page component
import Services from './pages/Servicespage';
import Gallery from './pages/Gallery';
export default function App() {
  return (
    <Router>
      <div>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        {/* Add more Route components for additional pages */}
      </div>
    </Router>
  );
}
