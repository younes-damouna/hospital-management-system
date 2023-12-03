import React from 'react'
import './index.css'
import logo from "./../../assets/images/logo.png"
import Button from '../Button'
const Navbar = () => {
  return (
    <div className='d-flex space-between bg-white'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='d-flex gap'>
            <Button  text={"Register"} className={"primary-outline-btn text-primary bg-white"}/>
            <Button  text={"Log In"} className={"primary-btn text-white bg-primary"}/>

        </div>
    </div>
  )
}

export default Navbar