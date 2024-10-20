// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx"
import Signup from "./landing_page/signup/Signup.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import ProductPage from "./landing_page/products/ProductPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"

import Navbar from "./landing_page/Navbar.jsx"
import Footer from "./landing_page/Footer.jsx"
import NotFound from "./landing_page/NotFound.jsx";

function App() {

  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App
