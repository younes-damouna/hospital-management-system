import React, { useEffect, useState } from 'react'
import { request } from '../../../helpers/apiCalls/getMedications';

const Appointments = ({user_id,doctor,body}) => {

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const responseAppointments = await request({
          route: `${!doctor?"get/appointmentsByPatient":"get/appointmentsByDoctor"}`,
          method: "POST",

          body: {
            ...body,
          },
        });
        setAppointments(responseAppointments);
      } catch (error) {
        console.log(error);
      }
    };
    getAppointments();
  }, []);
  console.log(Appointments);
  return (
    <table>
    <thead>
      <tr>
        <th>{doctor?"Patient":"Doctor"} Name</th>
        <th>Appointment Date</th>
        <th>Appointment Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(appointments)?appointments.map((app,index) => {
        return (
          <>
            <tr key={index}>
              <td>{doctor?  app.patient_name:app.doctor_name}</td>
              <td>{app.date_time}</td>
              <td className="">{app.status_name}</td>
              <td>
               <div>update</div>
               <div>delete</div>
              </td>
            </tr>
          </>
        );
      }):""}
    </tbody>
  </table>
  )
}

export default Appointments