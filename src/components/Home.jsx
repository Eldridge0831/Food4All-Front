import React from 'react';
import logo from "../assets/logo.jpg"

function Home (props) {
    return (
        <div className = "homePage">
        <img src={logo} alt="Logo" width = "600rem" />
    </div>
    )
}

export default Home;