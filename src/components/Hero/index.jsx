import React from 'react'

import './index.css'
import heroImg from './../../assets/images/hero.svg'
const Hero = () => {
  return (
    <div className='d-flex space-between'>
        <div className='hero-text fs-lg bold'>
            Need an Appointment?
        </div>
        <div className='hero-img-container'>
            <img  src={heroImg} alt="" />
        </div>

    </div>
  )
}

export default Hero