import React from 'react'
import '../styles/Services.css'
import data from '../service.js'
const Services = () => {
  return (
    <div className='servicesContainer'>
        {
            data.map((item,idx)=>{
                return(
                    <>
                    <div className="service">
                        <div className="serviceLeft">
                            <h1>{item.Title}</h1>
                            <p>{item.Desc}</p>
                        </div>
                        <div className="serviceRight">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <hr />
                    </>
                    )
            })
        }

    </div>
  )
}

export default Services
