import React, { useState } from 'react'
import Panel from '../../components/Panels'
import PatientPanel from '../../components/Panels/PatientPanel'

const PatientDashboard = ({menu}) => {
    const [activeMainTab,setActiveMainTab]=useState("medication")
   
  return (
    <div className='d-flex gap w-100 main '>
        <div className="aside">
          <div className="menu">
            <div onClick={()=>{ setActiveMainTab("medication")}} className={`menu-item ${activeMainTab==="medication"?'active':''}`}>Medication History</div>
            <div onClick={()=>{ setActiveMainTab("appo")}} className={`menu-item ${activeMainTab==="appo"?'active':''}`}>Manage Appointments</div>
          </div>
        </div>
        <PatientPanel menu={menu}  activeMainTab={activeMainTab}/>
    </div>
  )
}

export default PatientDashboard