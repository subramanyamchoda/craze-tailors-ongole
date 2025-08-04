import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Shirts from './Shirts';
import Pants from './Pants';

import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/>} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
