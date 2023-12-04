import React, { useEffect, useState } from "react";
import "./index.css";
import FormGroup from "../../FormGroup";
import Button from "../../Button";
import RegisterImg from "./../../../assets/images/register.svg";
import { request } from "../../../helpers/apiCalls/getMedications";
import { useNavigate } from "react-router-dom";
const RegisterDoctorForm = ({ children }) => {
  const [specialties,setSpecialties]=useState([])
  const [restos, setRestos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSpecialties = async () => {
      try {
        const responseSpecialties = await request({
          route: "get/Specialties",

         
        });
        setSpecialties(responseSpecialties);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecialties();

    // sendRequest({
    //   route: "/specialties",
    // })
    
  }, []);
  console.log(specialties)
  const [status,setStatus]=useState("")
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role_id:1,
    email: "",
    password: "",
    first_name: "",

    last_name: "",
    specialty_id: "",
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
    const body = { ...form};
    const response = await request({
      body: body,
      route: "/register",
      method: "POST",
    });
    setStatus(response.status)
    if(status==="true"){
      navigate("/auth/login");

    }
    console.log(response.status);
  };
  console.log(form);

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
          onChange={handleForm}
        />
        <FormGroup
          label="Last Name"
          name="last_name"
          placeholder="Doe"
          type="text"
          required={true}
          onChange={handleForm}
        />
        <div className="form-group d-flex column w-100">
          <label htmlFor="select">Select You Major</label>
          <select name="specialty_id" id="select" onChange={(e)=>handleForm("specialty_id",e.target.value)}>
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
          onChange={handleForm}
        />
        <FormGroup
          label="Password"
          name="password"
          type="password"
          placeholder={""}
          required={true}
          onChange={handleForm}
        />
        <div className="form-group d-flex gap wrap">
        
        </div>

        <Button
          text={"Sign Up"}
          className={"primary-btn text-white bg-primary text-center fs-sm"}
          onClick={() => handleSubmit()}
        />
      </form>
    </div>
  );
};

export default RegisterDoctorForm;
