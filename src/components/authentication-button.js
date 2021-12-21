import React from "react";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

//Auth0 Hook determines if user is logged in
const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  // Checking to see if user is authenticated. Will see logout. If not will see login
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;