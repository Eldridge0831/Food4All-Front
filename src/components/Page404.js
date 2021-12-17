import React from 'react';
import can from "../assets/404.png";

function Page404 () {
    return (
        <div>
            <br/>
            <h1>Oops!  There seems to be a Problem.</h1>
            <br/>
            <h2>Your Request Did Not Turn Up Any Results</h2>
            <br/>
            <img src={can} alt="404" width="400rem"></img>
            <br/>
            <h2>It Looks Like Mystery Surprise Can For Dinner</h2>
            
        </div>
    )
}


export default Page404;