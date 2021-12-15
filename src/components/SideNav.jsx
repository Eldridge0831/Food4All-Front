import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function SideNav() {
    const [isOpen, setIsOpen] = useState()
    

    return (
        <>
            <Navbar collapseOnSelect className = "sideNav">
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Link to="/search" style={{ textDecoration: "none" }} className="nav-link">Recipe Search</Link>
                            <Link to="/nutrition" style={{ textDecoration: "none" }} className="nav-link">Nutrition Data</Link>
                            <a href="https://www.webmd.com/diet/a-z/evaluate-latest-diets" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }} className="nav-link">Information on Diets</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        /* <div{isExpanded ? "Sidebar" : "Sidebar collapsed">
        <div className="sidebar-icon" onClick={handleToggler} style={{"display":"flex","justifyContent":"space-evenly"}} >
            <Link to="/search" style={{ textDecoration: "none" }} className="nav-link">Recipe Search</Link>
            <Link to="/nutrition" style={{ textDecoration: "none" }} className="nav-link">Nutrition Data</Link>
            <a href="https://www.webmd.com/diet/a-z/evaluate-latest-diets" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }} className="nav-link">Information on Diets</a>
        </div>
        }
    </div> */
    )
}


export default SideNav;