import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


//Button created with onClick handler. Calls loginWithRedirect
const LoginButton = () => {
  //login function imported from useAuth0 hook
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primary ms-2" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
