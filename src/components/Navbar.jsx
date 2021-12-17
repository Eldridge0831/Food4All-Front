import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpeg";
import AuthNav from '../components/auth-nav';


function Navbar() {
  return (
    <div className="Navbar" style={{ "display": "flex", "justifyContent": "space-evenly" }} >
      <img src={logo} alt="logo" width="50rem" />
      <Link to="/" style={{ textDecoration: "none" }} className="nav-link" >Home</Link>
      <Link to="/favorite" style={{ textDecoration: "none" }} className="nav-link">My Cookbook</Link>
      <Link to="/aboutus" style={{ textDecoration: "none" }} className="nav-link">About Us</Link>



      <AuthNav />
      {/* <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link> */}


    </div>
  );
}


export default Navbar;