import React, { useState } from "react";
import "./index.css";
import RegisterImg from "./../../../assets/images/register.svg";
import Button from "../../Button";
import FormGroup from "../../FormGroup";
import RegisterUserForm from "../RegisterUserForm";
import RegisterDoctorForm from "../RegisterDoctorForm";
const FormWrapper = () => {
  const [isDoctor, setIsDoctor] = useState(true);
  return (
    <div className=" d-flex space-between">

   
      <div className="form">
      <div className="d-flex gap  center switch-form">
        <Button
          className={`${
            isDoctor ? "primary-outline-btn" : ""
          } pointer text-primary`}
          text={"Doctor"}
          onClick={() => setIsDoctor(true)}
        >
          Doctor
        </Button>
        <Button
          className={`${
            isDoctor ? "" : "primary-outline-btn"
          } pointer text-primary`}
          text={"User"}
          onClick={() => setIsDoctor(false)}
        >
          user
        </Button>
      </div>
      {isDoctor ? (
        <RegisterDoctorForm></RegisterDoctorForm>
      ) : (
        <RegisterUserForm />
      )}
      </div>
     
      <div className="form-img">
        <img src={RegisterImg} alt="" />
      </div>
    </div>
  );
};

export default FormWrapper;
