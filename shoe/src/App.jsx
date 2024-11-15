import "./nav.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart'; 
<<<<<<< HEAD
=======
import shoeCategoryPage from "./src/components/ProductList.jsx"
import About from "./ShoeWeb/src/components/ContactPage.jsx"

>>>>>>> refs/remotes/origin/main

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
=======
        <Route path ="/contact" element={<Contact />}/>
        <Route path="/productlist" element={<Store/>} />
        <Route path="/about" element={<About/>}/>
>>>>>>> refs/remotes/origin/main
      </Routes>
    </Router>
  );
}

export default App;