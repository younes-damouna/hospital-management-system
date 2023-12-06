import React, { useEffect, useState } from "react";
import Button from "../../Button";
import RegisterDoctorForm from "../../Forms/RegisterDoctorForm";
import { request } from "../../../helpers/apiCalls/getMedications";
import RegisterUserForm from "../../Forms/RegisterUserForm";
import FormGroup from "../../FormGroup";

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
  const [form, setForm] = useState({
    floor_number: "",
    room_number: "",
    beds_number: "",
  });
  const [status, setStatus] = useState("");

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
  const handleForm = (field, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const deletePatient = async (id) => {
    const response = await request({
      route: "delete/patient",
      method: "POST",
      body: { patient_id: id },
    });
    // setStatus(response.status);
  };
  const handleSubmit = async () => {
    const body = { ...form };
    const response = await request({
      body: body,
      route: "add/room",
      method: "POST",
    });
    if (status === "true") {
    } else {
      setForm({
        floor_number: "",
        room_number: "",
        beds_number: "",
      });
    }
  };

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [patienData, setPatientData] = useState({});
  const [assignARoom, setAssignARoom] = useState(false);
  const [roomData, setAssignRoomData] = useState({});

  const UpatePatient = (patient) => {
    setShowUpdateForm(true);
    setPatientData(patient);
  };
  const giveRoom = (patient) => {
    setAssignARoom(true);
    setPatientData(patient);
  };
  const handleUpdate = async () => {
    let body = { ...patienData };
    if (assignARoom) body = { ...roomData };

    const response = await request({
      body: body,
      route: "update/patient",
      method: "POST",
    });
    if (status === "true") {
      setShowUpdateForm(false);
    } else {
      setShowUpdateForm(false);
    }
    setAssignARoom(false);
  };
  const handleFormUpdate = (field, value) => {
    setPatientData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

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
                              <div className="d-flex gap wrap column">
                                <button
                                  className="pointer"
                                  onClick={() => deletePatient(pat.patient_id)}
                                >
                                  delete
                                </button>
                                <button
                                  className="pointer"
                                  onClick={() => {
                                    UpatePatient(pat);
                                  }}
                                >
                                  {" "}
                                  update
                                </button>
                                <button
                                  className="pointer"
                                  onClick={() => {
                                    giveRoom(pat);
                                  }}
                                >
                                  Assign a room
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
              {showUpdateForm ? (
                <div>
                  <form action="" method="post">
                    <div className="d-flex space-between">
                      {" "}
                      <h2>
                        update user{" "}
                        {`${patienData.first_name} ${patienData.last_name}`}
                      </h2>
                      <div
                        onClick={() => {
                          setShowUpdateForm(false);
                        }}
                        className="pointer"
                      >
                        X
                      </div>
                    </div>
                    <FormGroup
                      label="First Name"
                      name="first_name"
                      placeholder="John"
                      type="text"
                      required={true}
                      value={patienData.first_name}
                      onChange={handleFormUpdate}
                    />
                    <FormGroup
                      label="Last Name"
                      name="last_name"
                      placeholder="Doe"
                      type="text"
                      required={true}
                      value={patienData.last_name}
                      onChange={handleFormUpdate}
                    />

                    <FormGroup
                      label="Email"
                      name="email"
                      placeholder="John.Doe@mail.com"
                      type="email"
                      value={patienData.email}
                      required={true}
                      onChange={handleFormUpdate}
                    />
                    <FormGroup
                      label="Phone Number"
                      name="phone_number"
                      placeholder="John.Doe@mail.com"
                      type="email"
                      value={patienData.phone_number}
                      required={true}
                      onChange={handleFormUpdate}
                    />

                    <div className="form-group d-flex gap wrap"></div>

                    <Button
                      text={"Update "}
                      className={
                        "primary-btn text-white bg-primary text-center fs-sm"
                      }
                      onClick={() => {
                        handleUpdate();
                      }}
                    />
                  </form>
                </div>
              ) : (
                ""
              )}

              {assignARoom ? (
                <div>
                  <form>
                    <div className="d-flex space-between">
                      {" "}
                      <h2>
                        Assign a room to user{" "}
                        {`${patienData.first_name} ${patienData.last_name}`}
                      </h2>
                      <div
                        onClick={() => {
                          setAssignARoom(false);
                        }}
                        className="pointer"
                      >
                        X
                      </div>
                    </div>
                    <div className="form-group d-flex column w-100">
                      <label htmlFor="select">Select You Major</label>
                      <select
                        name="room_id"
                        id="select"
                        onChange={(e) =>
                          setAssignRoomData({
                            room_id: e.target.value,
                            patient_id: patienData.patient_id,
                          })
                        }
                      >
                        {rooms.map((room) => {
                          return (
                            <>
                              <option value={room.room_id}>
                                {room.room_number}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                    <Button
                      text={"Assign room "}
                      className={
                        "primary-btn text-white bg-primary text-center fs-sm"
                      }
                      onClick={() => {
                        handleUpdate();
                      }}
                    />
                  </form>
                </div>
              ) : (
                ""
              )}
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
                              <div>update</div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          ) : activeTab === "Add Room" ? (
            <div className="" style={{ width: "50%" }}>
              <form
                action="
            "
              >
                <FormGroup
                  label="Room Number"
                  name="room_number"
                  placeholder="1"
                  type="number"
                  // value={form.first_name}
                  required={true}
                  onChange={handleForm}
                />
                <FormGroup
                  label="Room Floor"
                  name="floor_number"
                  placeholder="1"
                  type="number"
                  // value={form.first_name}
                  required={true}
                  onChange={handleForm}
                />
                <FormGroup
                  label="Beds Number"
                  name="beds_number"
                  placeholder="1"
                  type="number"
                  // value={form.first_name}
                  required={true}
                  onChange={handleForm}
                />
                <Button
                  text={"Add Room"}
                  className={
                    "primary-btn text-white bg-primary text-center fs-sm"
                  }
                  onClick={() => handleSubmit()}
                />
              </form>
            </div>
          ) : (
            "assign room to patient"
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
