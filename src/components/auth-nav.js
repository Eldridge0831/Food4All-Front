import React from 'react';
import AuthenticationButton from './authentication-button';

//AuthNav shows authentication button that will toggle between login and logout
const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;