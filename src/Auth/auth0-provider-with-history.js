/* Uses composition to make react router hooks available to auth0 provider*/

import React from "react";
import { useHistory, navigate} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = "dev-oalrznsx.us.auth0.com"; 
  const clientId ="54S0q4qoMvZZP0Eibr6GLG7mEEB0MD8l";  //passed as props to provider below
  const audience = "https://food4all-back.herokuapp.com/";

  //Redirect to Page when user logs in
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  // Give access to auth0 values to any child component in app
  return (

    


    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} onRedirectCallback={onRedirectCallback} audience={audience}>


      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
