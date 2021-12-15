import React from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpg";

import AuthButton from './AuthButton';


function Navbar() {
    return(
        <div className="Navbar" style={{"display":"flex","justifyContent":"space-evenly"}} >
            <img src={logo} alt="logo" width = "40rem" />
            <Link to="/home"style={{ textDecoration: "none" }} className="nav-link" >Home</Link>
            <Link to="/favorite" style={{ textDecoration: "none" }} className="nav-link">Favorites</Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }} className="nav-link">About Us</Link>
            
            
              <AuthButton />
              {/* <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link> */}

              
        </div>
    );
}


export default Navbar;