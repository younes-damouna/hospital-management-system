import React, { useEffect, useState } from "react";
import { request } from "../../../helpers/apiCalls/getMedications";
import Button from "../../Button";
import Appointments from "../../shared/Appointments";
import AppointmentForm from "../../Forms/AppointmentForm";

const PatientPanel = ({ activeMainTab }) => {
  const [medications, setMedications] = useState([]);
  const [activeTab, setActivetab] = useState("View Appointments");
  const patient_id = 1;
  useEffect(() => {
    const getMedications = async () => {
      try {
        const responseMedications = await request({
          route: "get/medicationsByPatient",
          method: "POST",

          body: {
            patient_id: patient_id,
          },
        });
        setMedications(responseMedications);
      } catch (error) {
        console.log(error);
      }
    };
    getMedications();
  }, []);
  console.log(medications);

  return (
    <div className="panel w-100">
    
      {activeMainTab === "medication" ? (
        <div className="table-container">
          Medication History
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Date Issued</th>
                <th>Medication Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med) => {
                return (
                  <>
                    <tr>
                      <td>{med.doctor_name}</td>
                      <td>{med.date_issued}</td>
                      <td className="medication">{med.details}</td>
                      <td>
                        {med.is_approved === 0 ? "Approved" : "Not Approved"}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="table-container">
          Appointments
          <div className={`d-flex gap wrap `}>
            <Button
              text={"View Appointments"}
              onClick={() => {
                setActivetab("View Appointments");
              }}
              className={`menu-item ${
                activeTab === "View Appointments" ? "active" : ""
              }`}
            />
            <Button
              text={"Add Appointment"}
              onClick={(e) => {
                setActivetab("add appointment");
              }}
              className={`menu-item ${
                activeTab === "add appointment" ? "active" : ""
              }`}
            />
          </div>
          {activeTab === "View Appointments" ? (
            <Appointments appointments={[]} user_id={patient_id} />
          ) : (
            <AppointmentForm />
          )}
        </div>
      )}
    </div>
  );
};

export default PatientPanel;
