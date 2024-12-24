import React from 'react'
import background from '../images/background.jpg'
import '../styles/Home.css'
import Movement from './Movement'

function Home() {
  return (
    <div className='home_main' style={{backgroundImage:`url(${background})`}}>
        <div className='home_con1'>
            <h1>Welcome to</h1>
            <h2>Crafting Digital</h2>
            <h3>Experiences</h3>
            <p>Mi in nulla posuere sollicitudin aliquam ultrices sagittis.<br/> Egestas quis ipsum suspendisse ultrices gravida.</p>
        
        </div>
        <div className='home_con1'>
        <Movement/>

        </div>
        </div>
  )
}

export default Home