import React, { useEffect, useState } from "react";
import { request } from "../../../helpers/apiCalls/getMedications";
import Appointments from "../../shared/Appointments";
import Button from "../../Button";
import FormGroup from "../../FormGroup";

const DoctorPanel = ({ activeMainTab }) => {
  const [patients, setPatients] = useState([]);
  const [activeTab, setActivetab] = useState("View Available Times");
  const doctor = JSON.parse(localStorage.getItem("logged_in"));
  const [doctorTimes, setDoctorTimes] = useState([]);

  const [form, setForm] = useState({
    // doctor_id: JSON.parse(localStorage.getItem("logged_in")).doctor_id,

    date_time: "",
  });

  const [status, setStatus] = useState("");

  const handleForm = (field, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const body = { ...form };
    const response = await request({
      body: body,
      route: "add/doctorTime",
      method: "POST",
    });
    setStatus(response.status);
    if (status === "true") {
      // setMessage("Your Account is created!");
      // navigate("/auth/login");
      // setShowMessage(true);
    } else {
      setForm({
        // doctor_id: JSON.parse(localStorage.getItem("logged_in")).doctor_id,

        date_time: "",
      });
      // setMessage(`${response.error_message}`);
      // setShowMessage("true");
    }
  };
  // const doctor_id = doctor.doctor_id;
  useEffect(() => {
    const getDoctorTime = async () => {
      try {
        const responseDoctorTime = await request({
          route: "get/doctorsByAvailability",
        });
        setDoctorTimes(responseDoctorTime);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctorTime();
    const getPatients = async () => {
      try {
        const responsePatients = await request({
          route: "get/medicationsByDoctor",
          method: "POST",

          body: {
            // doctor_id: doctor_id,
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
              {Array.isArray(patients)?patients.map((patient, index) => {
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
              }):""}
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
              {Array.isArray(patients)?patients.map((patient, index) => {
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
              }):null}
            </tbody>
          </table>
        </div>
      ) : activeMainTab === "Manage Appointments" ? (
        <div>
          <Appointments doctor={true} body={{ doctor_id: 1 }} />
        </div>
      ) : activeMainTab === "Manage Calender" ? (
        <div>
          {/* Available Times */}
          <div className="table-container">
            <div
              className="sub-nav d-flex gap row "
              style={{ marginBlock: 10 }}
            >
              <Button
                text={"View Available Times"}
                className={`menu-item  fs-sm ${
                  activeTab === "View Available Times" ? "active" : ""
                }`}
                onClick={(e) => {
                  setActivetab("View Available Times");
                }}
              />
              <Button
                text={"Add Available Times"}
                className={`menu-item  fs-sm ${
                  activeTab === "Add Available Times" ? "active" : ""
                }`}
                onClick={(e) => {
                  setActivetab("Add Available Times");
                }}
              />
            </div>
            {activeTab === "View Available Times" ? (
              <table>
                <thead>
                  <tr>
                    <th> Date</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(doctorTimes)
                    ? doctorTimes?.map((doct, index) => {
                        return (
                          <tr key={index}>
                            <td> {doct.date_time}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            ) : (
              <div className="table-container">
                <form action="">
                  <FormGroup
                    label="Choose Time slot"
                    name="date_time"
                    type="datetime-local"
                    placeholder={""}
                    required={true}
                    onChange={handleForm}
                  />
                  <Button
                    text={"Add"}
                    className={
                      "primary-btn text-white bg-primary text-center fs-sm"
                    }
                    onClick={() => handleSubmit()}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DoctorPanel;
