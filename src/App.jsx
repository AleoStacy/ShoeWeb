import HomePage from '../shoe/src/HomePage'
import './App.css'
import About from './components/About'
import ShoeCategoryPage from './components/ShoeProduct'
import Footer from '../ShoeWeb/src/components/Footer'
import ContactPage from '../ShoeWeb/src/components/ContactPage'
function App() {

  return (
    <>
      <HomePage/>
      <ShoeCategoryPage/>
      <About/>
      <Footer/>
      <ContactPage/>
    </>
  )
}

export default App
