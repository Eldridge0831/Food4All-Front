import React from 'react';
import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import Vivek from '../assets/vivek.jpg';

function Aboutus () {
    return(
        <>
    <div class="about-section">
        <h1>Contact Us</h1>
        <p>Food 4 All</p>
      </div>
      
      <h2 styles="text-align:center">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="container" styles="text-align:center">
                <img class="card-img-top w-100 d-block" alt = "Profile" src = {Vivek}></img>
              <h2>Vivek Thakore</h2>
              <p class="title">Web Developer</p>
              <a href = "mailto: vivek.thakore08@gmail.com" target="_blank" rel="noreferrer"> <EnvelopeFill size={40} className="p-1"/> </a>
              <a href = "https://github.com/vivekthak88"><Github size={40} className="p-1"/></a>
              <a href = "https://www.linkedin.com/in/vivekthakore"><Linkedin size={36} className="p-1" /></a>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="container" styles="text-align:center">
                <img src = ""></img>
              <h2>Charles Eldrigde</h2>
              <p class="title">Web Developer</p>
              <a href="mailto: " target="_blank" rel="noreferrer">
                  <EnvelopeFill size={40} class="p-1" /></a>
              <a href = "https://github.com/Eldridge0831" target="_blank" rel="noreferrer">
                  <Github size={40} class="p-1" /></a>
              <a href = "" target="_blank" rel="noreferrer">
                  <Linkedin size={36} class="p-1" /></a>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="container" styles="text-align:center">
              <h2>Tim Johns</h2>
              <p class="title">Web Developer</p>
              {/* <!-- <p>Some text that describes me lorem ipsum ipsum lorem.</p> --> */}
              <p>Tim's email</p>
              <a href = "https://github.com/tjohns823">https://github.com/</a>
              <a href = "">https://linkedIn.com/</a>
              {/* <!-- <p><button class="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Aboutus;