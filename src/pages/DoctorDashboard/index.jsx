import React, { useState } from 'react'
import DoctorPanel from '../../components/Panels/DoctorPanel'

const DoctorDashboard = ({menu}) => {
    const [activeMainTab,setActiveMainTab]=useState("")
    const menuItems=[
        {
            title:"View Patients"
        },
        {
            title:"Manage Medications"
        },
        {
            title:"Manage Appointments"
        },
        {
            title:"Manage Calender"
        },
    ]
  return (
    <div className='d-flex gap w-100'>
         <div className="aside">
          <div className="menu">
            {menuItems.map((menuItem,index)=>{return(
            <div key={index} onClick={()=>{ setActiveMainTab(`${menuItem.title}`)}} className={`menu-item ${activeMainTab===menuItem.title?'active':''}`}>{menuItem.title}</div>

            )})}
          
          </div>
        </div>
        <DoctorPanel menu={menu}  activeMainTab={activeMainTab}/>
    </div>
  )
}

export default DoctorDashboard