import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpeg";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthNav from '../components/auth-nav';
// import { Container } from 'react-bootstrap';

function NavBar() {

return  (
  <div>
    <Navbar collapseOnSelect expand="sm" className="nav-background"  variant="dark" >
      <Navbar.Brand href="/" className="ms-5">
        <img src={logo} alt="logo" id="navLogo" width="30%" height="30%"  class="d-inline-block align-top"/>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
          <Link to="/search" style={{ textDecoration: "none" }} className="nav-link text-black">
              Recipe Search
            </Link>
            <Link to="/nutrition" style={{ textDecoration: "none" }} className="nav-link text-black">
              Nutrition Data
            </Link>
            <Link to="/favorite" style={{ textDecoration: "none" }} className="nav-link text-black">
              My CookBook
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }} className="nav-link text-black">
              Profile
            </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }} className="nav-link text-black">
              About Us
            </Link>
            <AuthNav />
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
        }


export default NavBar;