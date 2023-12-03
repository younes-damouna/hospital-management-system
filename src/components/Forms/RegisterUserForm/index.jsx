import React from "react";
import Button from "../../Button";
import FormGroup from "../../FormGroup";
import RegisterImg from "./../../../assets/images/register.svg";
const RegisterUserForm = () => {
  // const formInputs=[
  //     {first_name:"first_name",
  //     last_name:"last_name",
  //     patient_email: "youda@gmail.com",
  //     room_id: null,
  //     phone_number: 71140916,
  //     role_id: 3,
  //     password: "12345"
  // }
  // ]
  return (
    <div className="">
      <h2 className="text-center bold">User Registeration</h2>

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

export default RegisterUserForm;
