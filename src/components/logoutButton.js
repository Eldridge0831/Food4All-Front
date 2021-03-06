import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Button created with onClick handler. Calls logout
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-primary ms-2" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
