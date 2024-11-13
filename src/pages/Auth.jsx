import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [authState, setAuthState] =
    useState(true);
  const handleAuthFollow = () => {
    setAuthState((prevState) => !prevState);
  };
  return (
    <div className="h-screen w-screen justify-center items-center flex">
      {authState === true ? (
        <Login
          handleAuthFlow={handleAuthFollow}
        />
      ) : (
        <Register
          handleAuthFlow={handleAuthFollow}
        />
      )}
    </div>
  );
};
export default Auth;
