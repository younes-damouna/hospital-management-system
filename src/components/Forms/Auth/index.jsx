import React, { useEffect, useState } from 'react'
import FormWrapper from '../FormWrapper'
import LoginForm from '../LoginForm'

const Auth = ({key}) => {
    const [isLogin, setIsLogin] = useState(false);

    const switchHandler = () => {
      setIsLogin(!isLogin);
    };
   
    
  return (
    <div>
         {isLogin ? (
        <LoginForm switchToRegister={switchHandler} />
      ) : (
        <FormWrapper switchToLogin={switchHandler} />
      )}
    </div>
  )
}

export default Auth