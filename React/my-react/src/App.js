/**
 * ROUTER
 * 
 * O Routes, foi substituido por Routers
 * Como resolver o erro Routes is not supported from react-router-dom no REACT.
 * https://youtu.be/ktJSrgrbYcs
 */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;