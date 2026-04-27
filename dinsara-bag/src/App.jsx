import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
