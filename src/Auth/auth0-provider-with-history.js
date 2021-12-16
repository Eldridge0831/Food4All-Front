/* Uses composition to make react router hooks available to auth0 provider*/

import React from "react";
import { useHistory, navigate} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN; 
  const clientId =process.env.REACT_APP_AUTH0_CLIENT_ID;  //passed as props to provider below
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  //Redirect to Page when user logs in
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  // Give access to auth0 values to any child component in app
  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri="https://localhost:3006" onRedirectCallback={onRedirectCallback} audience={audience}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
