import React, { useState } from 'react'
import DoctorPanel from '../../components/Panels/DoctorPanel'
import AdminPanel from '../../components/Panels/AdminPanel'

const AdminDashboard = ({menu}) => {
    const [activeMainTab,setActiveMainTab]=useState("Manage Doctors")
    const menuItems=[
        {
            title:"Manage Doctors"
        },
        {
            title:"Manage Patients"
        },

        {
            title:"Manage Rooms"
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
        <AdminPanel menu={menu}  activeMainTab={activeMainTab}/>
    </div>
  )
}

export default AdminDashboard