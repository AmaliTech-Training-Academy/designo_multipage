import React from 'react'
import './Design.css'
import pattern from "../../assets/app-design/desktop/bg-pattern-intro-app.svg"
import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../../assets/app-design/desktop/image-faceit.jpg"
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg"
import todo from "../../assets/app-design/desktop/image-todo.jpg"
import {App} from '../../data'
const Home = () => {
  return (
   <div className='home'>
    <div className="wrapper" style={{backgroundImage:`url(${pattern})`}}>
      <div className="wrapper-text">
        <h2>App design</h2>
        <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
      </div>
    </div>

      {/*  CARD SECTION  */}
    <div className="cards-container">
      {
        App.map((data)=>{
          const {img,title,text}=data
          return(
            <div className="card-container">
            <img src={img} alt=""/>
            <div className="card-footer">
              <div className="card-footer-text">
              <div className="card-text-header">
              {title}
              </div>
              <div className="card-text">
                  {text}              
              </div>
              </div>
            </div>
          </div>
          )
        })

      }
     
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

export default Home