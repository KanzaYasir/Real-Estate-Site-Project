import React from 'react'
import modelhouse from "./images/modelhouse.png";
export default function MainSection() {
  return (
    <div>
       <div className="main-Container">
        <div className="containerSection">
          <div className="textSection">
         
            <h1>Welcome to Realstate</h1>
            <h3>Your Dream Property Awaits</h3>
            <h4>Manage Your Property with Ease</h4>
            <p>
              Explore a diverse range of properties designed for your comfort
              and convenience.
            </p>
            <br />
            <h3>Prime Location</h3>
            <p>
              Enjoy proximity to supermarkets, public transport, and the vibrant
              Carmen neighborhood.
            </p>
            <br />
            <h3>Why Choose Realstate?</h3>
            <h4>User-Friendly Management Tools: </h4>
            <p>
              {" "}
              Easily manage your property with intuitive tools.
            </p>

            <h4>Expert Guidance: </h4>
            <p>
              Receive personalized assistance from our experienced team 
            </p>

            <h4>Community Focused:</h4>
            <p>
              {" "}
              We prioritize properties that foster vibrant communities.
              
            </p>
           
          </div>
 <img src={modelhouse} alt="" />
          
        </div>
      </div>
    </div>
  )
}
