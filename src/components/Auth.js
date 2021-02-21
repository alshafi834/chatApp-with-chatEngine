import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const Auth = () => {
  const [authstage, setAuthstage] = useState(true);
  return (
    <div>
      <div align="center">
        <span className="auth-tab" onClick={() => setAuthstage(true)}>
          Login
        </span>
        <span className="auth-tab" onClick={() => setAuthstage(false)}>
          SignUp
        </span>
      </div>
      {authstage ? <LoginForm /> : <SignUp />}
    </div>
  );
};

export default Auth;
