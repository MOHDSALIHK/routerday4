import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Navbar from './components/navbar';
export default function App() {
  return (
    <div>
             <Navbar />
             <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </div>
  )
}
