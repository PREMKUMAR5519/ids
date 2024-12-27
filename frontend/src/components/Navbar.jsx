import React from 'react'
import '../styles/Navbar.css'
import logo from '../images/logo.png'
function Navbar() {
  return (
    <div className='navmain'>
      <div className='nav1'>
        <img src={logo} alt="" />

      </div>
      <div className='nav2'>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Pricing</p>
        <p>ContactUs</p>
      </div>
    </div>
  )
}

export default Navbar