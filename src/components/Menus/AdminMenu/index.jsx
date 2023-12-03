import React from 'react'

const AdminMenu = () => {
  return (
    <div className='menu'>
        <div className="menu-item">
            Manage Doctors
        </div>
        <div className="menu-item active">
            Manage Patients
        </div>
        <div className="menu-item ">
            Manage Rooms
        </div>


           {/* admin
       Manage doctors
       Manage patients
      emergency room requests
  Assign patients into rooms*/}
    </div>
  )
}

export default AdminMenu