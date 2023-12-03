import React, { useEffect, useState } from 'react'
import { request } from '../../../helpers/apiCalls/getMedications';

const Appointments = ({user_id}) => {

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const responseAppointments = await request({
          route: "get/appointmentsByPatient",
          method: "POST",

          body: {
            patient_id: user_id,
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
        <th>Doctor Name</th>
        <th>Appointment Date</th>
        <th>Appointment Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {appointments.map((app,index) => {
        return (
          <>
            <tr key={index}>
              <td>{app.doctor_name}</td>
              <td>{app.date_time}</td>
              <td className="">{app.status_name}</td>
              <td>
               <div>update</div>
               <div>delete</div>
              </td>
            </tr>
          </>
        );
      })}
    </tbody>
  </table>
  )
}

export default Appointments