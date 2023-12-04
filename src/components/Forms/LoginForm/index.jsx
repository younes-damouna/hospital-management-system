import React from "react";
import loginImg from "./../../../assets/images/login.svg";
import "./index.css";
import FormGroup from "../../FormGroup";
import Button from "../../Button";
const LoginForm = ({switchToRegister}) => {
  return (
    <div className=" d-flex space-between">
      <div className="form">
        <h2 className="text-center bold">Login</h2>
        <form action="" method="post">
         <FormGroup  label="Email"  placeholder="John.Doe@mail.com" type="email" required={true} />
         <FormGroup  label="Password" type="password" placeholder={""} required={true} />
         <div className="form-group d-flex gap wrap">
            <label htmlFor="doctor">Doctor</label>
            <input type="radio" value={"Doctor"} />
            <label htmlFor="patient">Patient</label>
            <input type="radio" value={"Patient"} />
            {/* <label htmlFor="doctor">Doctor</label>
            <input type="radio" value={"Doctor"} /> */}
         </div>
         
         <Button text={"Log In"} className={"primary-btn text-white bg-primary text-center fs-sm"}/>
         <p className="form-footer">
          Don't have an account?{" "}
          <span className="text-primary " onClick={() => {switchToRegister()}}>
            Register!
          </span>
        </p>
        </form>
      </div>
      <div className="form-img">
        <img src={loginImg} alt="" />
      </div>

    </div>
  );
};

export default LoginForm;
