import React from 'react'
import serviceImg from './images/serviceImg.png'
export default function ServicesShowcase() {
  return (
    <div>
      <h1 style={{textAlign:"center",margin:"4vw"}}>Estate Brokerage Services</h1>
      <div className="ServiceContainer">
        <div className="serviceText">
<p>At Real Estate, we specialize in making the transfer of real estate smooth and efficient.Our experienced team is dedicated to providing exceptional service and expert guidance throughout every step of the process.</p>
<h3>Get Started Today!</h3>
<p>Whether you’re buying or selling, we’re here to help.</p>

<button>Book Now</button>
<h4>Our Expertise:</h4>
<p>Residential Properties <br />
Commercial Real Estate <br />
Property Management <br />
Investment Opportunities</p>
        </div>
        <img src= {serviceImg} alt="" />
      </div>
    </div>
  )
}
