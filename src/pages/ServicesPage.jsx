import React from 'react'
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <div className='main'>
      <Navbar />
      <h1 style={{textAlign:"center",fontSize:"55px"}}>Services and Benefits</h1>
      <Services />
      <Footer />
    </div>
  )
}

export default ServicesPage
