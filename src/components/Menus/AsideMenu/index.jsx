import React, { useState } from 'react'
import "./index.css"
import AdminMenu from '../AdminMenu'
import DoctorMenu from '../DoctorMenu'
import PatientMenu from '../PatientMenu'
const AsideMenu = ({menu}) => {
 
  return (
    <div className='d-flex column aside'>
      Main Menu

      {menu==="admin"?<AdminMenu/>:menu==="doctor"?<DoctorMenu/>:<PatientMenu/>}
      
    </div>
  )
}

export default AsideMenu