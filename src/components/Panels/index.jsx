import React from 'react'
import AdminPanel from './AdminPanel'
import DoctorPanel from './DoctorPanel'
import PatientPanel from './PatientPanel'
import "./index.css"
const Panel = ({menu}) => {
  return (
    <div className='panel'>

              {menu==="admin"?<AdminPanel/>:menu==="doctor"?<DoctorPanel/>:<PatientPanel/>}

    </div>
  )
}

export default Panel