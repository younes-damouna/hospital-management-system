import React, { useEffect, useState } from "react";
import { request } from "../../../helpers/apiCalls/getMedications";
import Appointments from "../../shared/Appointments";

const DoctorPanel = ({ activeMainTab }) => {
  const [patients, setPatients] = useState([]);
  const [activeTab, setActivetab] = useState("View Appointments");
  const doctor = JSON.parse(localStorage.getItem("logged_in"));
  const doctor_id = doctor.doctor_id;
  useEffect(() => {
    const getPatients = async () => {
      try {
        const responsePatients = await request({
          route: "get/medicationsByDoctor",
          method: "POST",

          body: {
            doctor_id: doctor_id,
          },
        });
        setPatients(responsePatients);
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);
  console.log(patients);
  return (
    <div className="panel w-100">
      {activeMainTab}
      {activeMainTab === "View Patients" ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => {
                return (
                  <tr key={index}>
                    <td>{patient.patient_name}</td>
                    <td>{patient.phone_number}</td>
                    <td>{patient.email}</td>
                    <td>
                      {patient.is_approved === 1 ? "Approved" : "Not Approved"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : activeMainTab === "Manage Medications" ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Details</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => {
                return (
                  <tr key={index}>
                    <td>{patient.patient_name}</td>
                    <td>{patient.details}</td>
                    <td>{patient.phone_number}</td>
                    <td>{patient.email}</td>
                    <td>
                      {patient.is_approved === 1 ? "Approved" : "Not Approved"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : activeMainTab === "Manage Appointments" ? (
        <div>
          <Appointments doctor={true} body={{doctor_id:doctor_id}}/>
        </div>
      ) : activeMainTab === "Manage Calender" ? (
        <div>cal</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DoctorPanel;
