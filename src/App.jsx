import Navbar from '../shoe/src/Navbar'
import HomePage from '../shoe/src/HomePage'
import './App.css'
import About from './components/About'
import ShoeCategoryPage from './components/ShoeProduct'
import Footer from '../ShoeWeb/src/components/Footer'
import ContactPage from '../ShoeWeb/src/components/ContactPage'

function App() {

  return (
    <>
    <Navbar/>
      <HomePage/>
      <ShoeCategoryPage/>
      <About/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default App
