import React, { useEffect, useState } from "react";
import Auth from "../../components/Forms/Auth";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import FormWrapper from "../../components/Forms/FormWrapper";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const switchHandler = () => {
    setIsLogin(!isLogin);
  };
 
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="container">
        {/* <Auth key={key==="login"?true:false}/> */}

        {isLogin ? (
          <LoginForm switchToRegister={switchHandler} />
        ) : (
          <FormWrapper switchToLogin={switchHandler} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
