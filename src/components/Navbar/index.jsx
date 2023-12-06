import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "./../../assets/images/logo.png";
import Button from "../Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("logged_in")) || []
  );

  return (
    <div className="d-flex space-between bg-white navbar ">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="d-flex gap">
       
        {user.length !== 0 ? (
          <>
          
           <div className="d-flex  center gap">
           <Link className="primary-btn text-white bg-primary" to={user.role_id===0?'/adminDashboard':user.role_id===1?'/doctor/dashboard':'userdashboard'}>
        Dashboard
        
        </Link>
           <div>
              You Are logged in as {`${user.first_name} ${user.last_name}`}
            </div>
            <Button
              text={"logout"}
              className={"primary-btn text-white danger fs-sm"}
              onClick={() => {
                localStorage.removeItem("logged_in");
                // navigate("/",{state:{refresh:true}})
                navigate("/");
                setUser([]);
              }}
            />
           </div>
          </>
        ) : (
          <Link to={`/auth`}>
            <Button
              text={"Get Started"}
              className={"primary-btn text-white bg-primary"}
            />
          </Link>
        )}

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
