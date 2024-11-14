import './App.css'
import About from './components/About'
import ShoeCategoryPage from './components/ShoeProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './sorce/HomePage';
import Cart from './sorce/Cart';



function App() {

  return (
    <>
    <ShoeCategoryPage/>
    <About/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
