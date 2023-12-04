import React, { useState } from "react";
import loginImg from "./../../../assets/images/login.svg";
import "./index.css";
import FormGroup from "../../FormGroup";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { request } from "../../../helpers/apiCalls/getMedications";
const LoginForm = ({switchToRegister}) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    role_id:"",
    email: "",
    password: "",
  });

  const handleForm = (field, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const response = await request({
      body: form,
      route: "login",
      method: "POST",
    });

    console.log(response);
    if (response.status === "logged in") {
      // save the login status in redux
      localStorage.setItem("logged_in", JSON.stringify(response));
      if(response.role_id===1){
        
        navigate("/AdminDashboard");

      }else if(response.role_id===2){

        navigate("/DoctorDashboard");

      }else if(response.role_id===3){
        navigate("/userDashboard",{state:{refresh:true}})
        


      }
      
    }
  };
  console.log(form)

  return (
    <div className=" d-flex space-between">
      <div className="form">
        <h2 className="text-center bold">Login</h2>
        <form action="" method="post">
         <FormGroup  label="Email" name="email" placeholder="John.Doe@mail.com" type="email" required={true} 
        //  value={form.email}
          onChange={handleForm}/>
         <FormGroup  label="Password" name="password" type="password" placeholder={""} required={true} 
          onChange={handleForm}/>
         <div className="form-group d-flex gap wrap">
            <label htmlFor="doctor">Doctor</label>
            <input type="radio" value={2} name="role_id" id="doctor"  onChange={(e)=>handleForm("role_id",e.target.value)}/>
            <label htmlFor="patient">Patient</label>
            <input type="radio" id="patient" name="role_id" value={3}  onChange={(e)=>handleForm("role_id",e.target.value)}/>
            {/* <label htmlFor="doctor">Doctor</label>
            <input type="radio" value={"Doctor"} /> */}
         </div>
         
         <Button text={"Log In"} className={"primary-btn text-white bg-primary text-center fs-sm"}
           onClick={() => handleSubmit()}
         />
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
