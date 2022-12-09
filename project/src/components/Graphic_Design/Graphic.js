import React from 'react'
import './Graphic.css'
import pattern from "../../assets/app-design/desktop/bg-pattern-intro-app.svg"
import tim from "../../assets/graphic-design/desktop/image-change.jpg"
import water from "../../assets/graphic-design/desktop/image-boxed-water.jpg"
import science from "../../assets/graphic-design/desktop/image-science.jpg"
import bgimg from "../../assets/shared/desktop/bg-pattern-leaf.svg"


const Graphic = () => {
    return (
        <div className='home'>
          <img src={bgimg} className="bg-img"/>
         <div className="wrapper" style={{backgroundImage:`url(${pattern})`}}>
           <div className="wrapper-text">
             <h2> Graphic design</h2>
             <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
           </div>
         </div>
     
           {/*  CARD SECTION  */}
         <div className="cards-container">
           <div className="card-container">
             <img src={tim} alt=""/>
             <div className="card-footer">
               <div className="card-footer-text">
     
               <div className="card-text-header">
               Tim Brown
               </div>
               <div className="card-text">
               A book cover designed for Tim Brown’s new release, ‘Change’
               </div>
               </div>
             </div>
           </div>
     
           <div className="card-container">
             <img src={water} alt=""/>
             <div className="card-footer">
               <div className="card-footer-text">
     
               <div className="card-text-header">
               Boxed water
               </div>
               <div className="card-text">
               A simple packaging concept made for Boxed Water
               </div>
               </div>
             </div>
           </div>
     
           <div className="card-container">
              <img src={science} alt=""/>
             <div className="card-footer">
               <div className="card-footer-text">
     
               <div className="card-text-header">
               Science!

               </div>
               <div className="card-text">
               A poster made in collaboration with the Federal Art Project

               </div>
               </div>
             </div>
           </div>
         </div>
     
         <div className="picture-container">
           <div className="first-img">
           <div className="img-background">
             <div className="picture-text">
               <h2> Web Design</h2>
               <p>View Projects <span>></span></p>
             </div>
           </div>
           </div>
           <div className="second-img">
           <div className="img-background">
           <div className="picture-text-2">
          <h2> Graphic Design</h2> 
           <p>  View Projects <span>></span></p>
           </div>
           </div>
         </div>
         </div>
        </div>
       )
}

export default Graphic