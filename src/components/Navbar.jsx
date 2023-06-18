import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Container'>
      <h1>CodeCamp</h1>
      <nav>
        <ul>
          <li><Link to ="/" style={{color:"white"}}>Home</Link></li>
          <li><Link to ="/services" style={{color:"white"}}>Services</Link></li>
          <li><Link to ="/about" style={{color:"white"}}>About Us</Link></li>
          <li><Link to ="/compiler" style={{color:"white"}}>IDE</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
