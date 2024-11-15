import "./nav.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path ="/contact" element={<Contact />}/>
        <Route path="/shoeCategoryPage" element={<Store/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;