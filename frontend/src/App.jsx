import React from 'react'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Pricing from './components/Pricing'
import TechSpecs from './components/TechSpecs'
import MarketingSection from './components/MarketingSection'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Pricing/>
      <TechSpecs/>
      <MarketingSection/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default App