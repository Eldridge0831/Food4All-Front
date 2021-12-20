import React from 'react';
import logo from "../assets/logo.jpg"
import "./home.css"

function Home (props) {
 
    return (
        <div className = "homePage">
        <div className="container text-center">
        <img src={logo} alt="Logo" width = "600rem" />
          
         
        </div>
      </div>
    );
  }
export default Home;