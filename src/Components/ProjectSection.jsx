import React from 'react'
import pro1 from './images/pro1.png'
import pro2 from './images/pro2.png'
import pro3 from './images/pro3.png'
import pro4 from './images/pro4.png'
import pro5 from './images/pro5.png'
import pro6 from './images/pro6.png'
import pro7 from './images/pro7.png'
import pro8 from './images/pro8.png'
export default function ProjectSection() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Our Recent Projects</h1>
   <h3 style={{marginLeft:"5vw",marginTop:"2vw",color:"gray"}}>Best Projects of the Year</h3>
   <div className="projectSection">
    <div className="projectsImgs">
         <img src= {pro1} alt="" id='projectImg' />
    <img src= {pro2} alt="" id='projectImg'/>
    <img src= {pro3} alt="" id='projectImg'/>
    <img src= {pro4} alt="" id='projectImg'/>
    <img src= {pro5} alt=""  id='projectImg'/>
    <img src= {pro6} alt=""  id='projectImg'/>
    <img src= {pro7} alt=""  id='projectImg'/>
    <img src= {pro8} alt=""  id='projectImg'/>
    </div>
   
   </div>
    </div>
  )
}
