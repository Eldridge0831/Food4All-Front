import React from 'react'

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
              <h2>Vivek Thakore</h2>
              <p class="title">Web Developer</p>
              {/* <!-- <p>Some text that describes me lorem ipsum ipsum lorem.</p> --> */}
              <p>vivek.thakore08@gmail.com</p>
              <a href = "https://github.com/vivekthak88">https://github.com/vivekthak88</a>
              <a href = "https://www.linkedin.com/in/vivekthakore">https://linkedIn.com/</a>
              {/* <!-- <p><button class="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="container" styles="text-align:center">
              <h2>Charles Eldrigde</h2>
              <p class="title">Web Developer</p>
              {/* <!-- <p>Some text that describes me lorem ipsum ipsum lorem.</p> --> */}
              <p>Charles Email</p>
              <a href = "https://github.com/Eldridge0831">https://github.com/</a>
              <a href = "">https://linkedIn.com/</a>
              {/* <!-- <p><button class="button">Contact</button></p> --> */}
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