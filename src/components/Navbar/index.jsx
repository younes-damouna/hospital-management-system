import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "./../../assets/images/logo.png";
import Button from "../Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = ({  }) => {
  const navigate=useNavigate()
  const location = useLocation();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("logged_in"))|| [])


  return (
    <div className="d-flex space-between bg-white">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="d-flex gap">
        {user.length !==0 ? (<>
          <div>You Are logged in as {user.first_name}{" "}{user.last_name}</div>
          <Button
              text={"logout"}
              className={"primary-btn text-white danger"}
              onClick={()=>{
                localStorage.removeItem("logged_in")
                // navigate("/",{state:{refresh:true}})
                navigate("/")
                setUser([])

                
              }}
            />
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
