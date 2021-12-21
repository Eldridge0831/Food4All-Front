
import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components';
import { useEffect } from "react";




const Profile = () => {
  const { user } = useAuth0();
  const { email } = user;

  useEffect(() => {
    (async function () {
      const urlString = "https://food4all-back.herokuapp.com/users" + email; //TODO. Get correct url
      await fetch(urlString, {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            console.log("The response is: ", response);
            const Image = document.getElementById("userImage");
            const FirstName = document.getElementById("userFirstName");
            const LastName = document.getElementById("userLastName");
            const Email = document.getElementById("userEmail");
            const UserName = document.getElementById("userUserName");
            

            Image.innerHTML = "<img src={`data:image/png;base64,${Buffer.from(this.state.data).toString('base64')}`} />";
            FirstName.innerHTML = "First Name: <h5>" + response[0].firstName + "</h5>";
            LastName.innerHTML = "Last Name: <h5>" + response[0].lastName + "</h5>";
            Email.innerHTML = "Email: <h5>" + response[0].email + "</h5>";
            UserName.innerHTML = "Username: <h5>" + response[0].userName + "</h5>";
            
          
          } else {
            console.log("Response is empty");
           // document.location.replace("https://localhost:3006/registration");
          }
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-4 text-white">Profile</h1>
      </div>
      <div className="row align-items-center profile-header mt-lg-3">
        <div className=" container col-md-6 text-start text-md-center">
          <img id="userImage" src="" alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
          <p id="userFirstName" className="lead"></p>
          <p id="userLastName" className="lead"></p>
          <p id="userEmail" className="lead"></p>
          <p id="userUserName" className="lead"></p>
          
        </div>
      </div>
      
    </div>
  );
};

export default withAuthenticationRequired(Profile,{
    onRedirecting:() => <Loading/>,});

