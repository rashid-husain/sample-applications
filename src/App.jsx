import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import'./header.css'
import Header from './header'
import About from './pages/about';
import Contact from './pages/contact';
import Careers from './pages/careers';
import Blogs from './pages/blogs';
import FAQ from './pages/faq';
import Services from './pages/services';
import Support from './pages/support';
import Home from './pages/home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          
        </div>
      </div>
    </>
  )
}

export default App
