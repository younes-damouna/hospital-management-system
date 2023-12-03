import React, { useState } from "react";
import "./index.css";
import FormGroup from "../../FormGroup";
import Button from "../../Button";
import RegisterImg from "./../../../assets/images/register.svg";
const RegisterDoctorForm = ({ children }) => {
  // const [specialties,setSpecialties]=useState([])
  const specialties = [
    { specialty_id: 1, specialty_name: "Dentist" },
    { specialty_id: 1, specialty_name: "Dentist" },
    { specialty_id: 1, specialty_name: "Dentist" },
    { specialty_id: 1, specialty_name: "Dentist" },
  ];
  return (
    <div className="">
      <h2 className="text-center bold">Doctor Registeration</h2>

      <form action="" method="post">
        <FormGroup
          label="First Name"
          name="first_name"
          placeholder="John"
          type="text"
          required={true}
        />
        <FormGroup
          label="Last Name"
          name="last_name"
          placeholder="Doe"
          type="text"
          required={true}
        />
        <div className="form-group d-flex column w-100">
          <label htmlFor="select">Select You Major</label>
          <select name="specialty_id" id="select">
            {specialties.map((specialty) => {
              return (
                <>
                  <option value={specialty.specialty_id}>
                    {specialty.specialty_name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <FormGroup
          label="Email"
          name="email"
          placeholder="John.Doe@mail.com"
          type="email"
          required={true}
        />
        <FormGroup
          label="Password"
          name="password"
          type="password"
          placeholder={""}
          required={true}
        />
        <div className="form-group d-flex gap wrap">
        
        </div>

        <Button
          text={"Sign Up"}
          className={"primary-btn text-white bg-primary text-center fs-sm"}
        />
      </form>
    </div>
  );
};

export default RegisterDoctorForm;
