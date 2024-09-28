import React from 'react'
import quote from './images/quote.png'
import QA from './images/QA.png'
import register from './images/register.png'
export default function HomeSection() {
  return (
    <div>
       <h1 style={{textAlign:"center"}}>Community Insights and Support</h1>
      <div className="sub-container1">
        <div className="block">
          <img src= {quote} alt="" />
          <h3>Words to Live By</h3>
          <p>Real estate is not just about property; it's about people.</p>
        </div>
        <div className="block">
            <img src= {QA} alt="" />
            <h3>Questions, Answered</h3>
            <p>"We're here to provide clarity and support—ask us anything about your real estate journey!"</p>
        </div>
        <div className="block">
            <img src= {register} alt="" />
            <h3>How to Register</h3>
            <p>"Joining our community is easy! Simply fill out our registration form to start managing your property and accessing exclusive resources."</p>
        </div>
      </div>
    </div>
  )
}
