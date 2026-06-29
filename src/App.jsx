import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import'./header.css'
import './pages/support.css';
import Header from './header'
import About from './pages/about';
import Contact from './pages/contact';
import Career from './pages/career';
import Blog from './pages/blog';
import FAQ from './pages/faq';
import Services from './pages/services';
import Support from './pages/support';
import SupportBox from "./pages/support";
import Home from"./pages/home";

 

function App() {
  
  

  
  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          
        </div>
      </div>
    </>
  )
}

export default App;
