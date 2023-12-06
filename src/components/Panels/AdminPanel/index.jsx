import React, { useEffect, useState } from "react";
import Button from "../../Button";
import RegisterDoctorForm from "../../Forms/RegisterDoctorForm";
import { request } from "../../../helpers/apiCalls/getMedications";
import RegisterUserForm from "../../Forms/RegisterUserForm";

const AdminPanel = ({ activeMainTab }) => {
  const [activeTab, setActivetab] = useState("View Doctors");
  useEffect(() => {
    if (activeMainTab === "Manage Doctors") {
      setActivetab("View Doctors");
    } else if (activeMainTab === "Manage Patients") {
      setActivetab("View Patients");
    } else if (activeMainTab === "Manage Rooms") {
      setActivetab("View Rooms");
    }
  }, [activeMainTab]);
  const [doctors, setDoctors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const responseDoctors = await request({
          route: `get/doctors`,
        });
        setDoctors(responseDoctors);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();

    const getRooms = async () => {
      try {
        const responseRooms = await request({
          route: `get/rooms`,
        });
        setRooms(responseRooms);
      } catch (error) {
        console.log(error);
      }
    };
    getRooms();

    const getPatients = async () => {
      try {
        const responseRooms = await request({
          route: `get/patients`,
        });
        setPatients(responseRooms);
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);
  return (
    <div className="panel w-100">
      {activeMainTab}
      {activeMainTab === "Manage Doctors" ? (
        <div className="table-container">
          <div className="sub-nav d-flex gap row " style={{ marginBlock: 10 }}>
            <Button
              text={"View Doctors"}
              className={`menu-item  fs-sm ${
                activeTab === "View Doctors" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("View Doctors");
              }}
            />
            <Button
              text={"Add Doctor"}
              className={`menu-item  fs-sm ${
                activeTab === "Add Doctor" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("Add Doctor");
              }}
            />
          </div>
          {activeTab === "Add Doctor" ? (
            <RegisterDoctorForm />
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th> First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(doctors)
                    ? doctors?.map((doct, index) => {
                        return (
                          <tr key={index}>
                            <td> {doct.first_name}</td>
                            <td> {doct.last_name}</td>
                            <td> {doct.email}</td>
                            <td> {doct.specialty_name}</td>
                            <td>
                              {" "}
                              {doct.isApproved === 1
                                ? "Approved"
                                : "Not Approved"}
                            </td>
                            <td>
                              <div>
                                <div>delete</div>
                              </div>
                              update
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : activeMainTab === "Manage Patients" ? (
        <div className="table-container">
          <div className="sub-nav d-flex gap row " style={{ marginBlock: 10 }}>
            <Button
              text={"View Patients"}
              className={`menu-item  fs-sm ${
                activeTab === "View Patients" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("View Patients");
              }}
            />
            <Button
              text={"Add Patient"}
              className={`menu-item  fs-sm ${
                activeTab === "Add Patient" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("Add Patient");
              }}
            />
          </div>
          {activeTab === "Add Patient" ? (
            <RegisterUserForm />
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th> First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(patients)
                    ? patients?.map((pat, index) => {
                        return (
                          <tr key={index}>
                            <td> {pat.first_name}</td>
                            <td> {pat.last_name}</td>
                            <td> {pat.email}</td>
                            <td> {pat.phone_number}</td>

                            <td>
                              <div>
                                <div>delete</div>
                              </div>
                              update
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="table-container">
          <div className="sub-nav d-flex gap row " style={{ marginBlock: 10 }}>
            <Button
              text={"View Rooms"}
              className={`menu-item  fs-sm ${
                activeTab === "View Rooms" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("View Rooms");
              }}
            />
            <Button
              text={"Add Room"}
              className={`menu-item  fs-sm ${
                activeTab === "Add Room" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("Add Room");
              }}
            />
            <Button
              text={"Assign Room"}
              className={`menu-item  fs-sm ${
                activeTab === "Assign Room" ? "active" : ""
              }`}
              onClick={(e) => {
                setActivetab("Assign Room");
              }}
            />
          </div>
          {activeTab === "View Rooms" ? (
            <table>
              <thead>
                <tr>
                  <th> Room ID </th>

                  <th>Floor</th>
                  <th>Room Number</th>
                  <th> Bed Numbers</th>

                  <th>Used Beds</th>
                  <th>Is Full</th>
                  <th>Is Emergency</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(rooms)
                  ? rooms?.map((room, index) => {
                      return (
                        <tr key={index}>
                          <td> {room.room_id}</td>
                          <td> {room.floor}</td>
                          <td> {room.room_number}</td>
                          <td> {room.beds_number}</td>
                          <td> {room.beds_used}</td>
                          <td> {room.is_full}</td>
                          <td> {room.is_emergency}</td>

                          {/* <td>
                             {" "}
                             {doct.isApproved === 1
                               ? "Approved"
                               : "Not Approved"}
                           </td> */}
                          <td>
                            <div>
                              <div>delete</div>
                              <div>
                              update
                              </div>
                            </div>
                          
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          ) : activeTab==="Add Room"?"add room":"assign room to patient"}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
