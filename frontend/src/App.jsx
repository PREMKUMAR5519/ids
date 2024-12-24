import React from 'react'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Pricing from './components/Pricing'
import TechSpecs from './components/TechSpecs'
import MarketingSection from './components/MarketingSection'
function App() {
  return (
    <div>
      <Home/>
      <Services/>
      <Pricing/>
      <TechSpecs/>
      <MarketingSection/>
    </div>
  )
}

export default App