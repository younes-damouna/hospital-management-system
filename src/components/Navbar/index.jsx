import React from "react";
import "./index.css";
import logo from "./../../assets/images/logo.png";
import Button from "../Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="d-flex space-between bg-white">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="d-flex gap">
        <Link to={`/auth`}>
          <Button
            text={"Get Started"}
            className={"primary-btn text-white bg-primary"}
          />
        </Link>
        {/* <Link to={"auth/login"}>
          <Button
            text={"Log In"}
            className={"primary-outline-btn text-primary bg-white"}
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
