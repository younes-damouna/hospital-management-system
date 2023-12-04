import React, { useState } from "react";
import "./index.css";
import RegisterImg from "./../../../assets/images/register.svg";
import Button from "../../Button";
import FormGroup from "../../FormGroup";
import RegisterUserForm from "../RegisterUserForm";
import RegisterDoctorForm from "../RegisterDoctorForm";
const FormWrapper = ({switchToLogin}) => {
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
          <>
            <RegisterDoctorForm />
          </>
        ) : (
          <RegisterUserForm />
        )}
        <p className="form-footer">
          Already have an account?{" "}
          <span
            className="text-primary"
            onClick={() => {
              switchToLogin()
            }}
          >
            Login!
          </span>
        </p>
      </div>

      <div className="form-img">
        <img src={RegisterImg} alt="" />
      </div>
    </div>
  );
};

export default FormWrapper;
