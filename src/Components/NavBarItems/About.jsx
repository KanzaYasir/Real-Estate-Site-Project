import React from 'react';
import Footer from '../Footer';

export default function About() {
  return (
  <div  >
    <div style={{  maxWidth: '80vw', margin: '0 auto' }}>
      <h1 style={{ textAlign: "center", marginBottom: '2vh' }}>About Us</h1>
      <div className="aboutContent">
        <p>Welcome to Real Estate Company, where your property dreams come true. Since our establishment in 2012, we have been dedicated to delivering exceptional service and expert guidance in the real estate market.</p>

        <h3>Our Mission</h3>
        <p>We aim to simplify the buying, selling, and investing processes by providing personalized solutions tailored to your unique needs.</p>

        <h3>Our Values</h3>
        <ul>
          <li><b>Integrity:</b> Honest and transparent communication to build lasting trust.</li>
          <li><b>Excellence:</b> A commitment to quality and meticulous attention to detail.</li>
          <li><b>Innovation:</b> Embracing new technologies and trends for optimal results.</li>
        </ul>

        <h3>Our Team</h3>
        <p>Our team comprises seasoned real estate professionals dedicated to providing the highest level of service.</p>

        <h3>Our Achievements</h3>
        <p>With numerous successful projects and accolades, we pride ourselves on innovative designs and outstanding client satisfaction.</p>

        <h3>Get in Touch</h3>
        <p>Whether you’re looking to buy, sell, or invest, we’re here to help you every step of the way.</p>
      </div>
     
    </div>
    <Footer/>
    </div>
  );
}
