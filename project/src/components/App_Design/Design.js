import React from 'react'
import './Design.css'
import pattern from "../../assets/app-design/desktop/bg-pattern-intro-app.svg"
import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../../assets/app-design/desktop/image-faceit.jpg"
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg"
import todo from "../../assets/app-design/desktop/image-todo.jpg"

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
      <div className="card-container">
        <img src={airfilter} alt=""/>
        <div className="card-footer">
          <div className="card-footer-text">

          <div className="card-text-header">
          Airfilter
          </div>
          <div className="card-text">
  Solving the problem of poor indoor air quality by filtering the air
          </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <img src={eyecam} alt=""/>
        <div className="card-footer">
          <div className="card-footer-text">

          <div className="card-text-header">
          Eyecam
          </div>
          <div className="card-text">
          Product that lets you edit your favorite photos and videos at any time
          </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <img src={faceit} alt=""/>
        <div className="card-footer">
          <div className="card-footer-text">

          <div className="card-text-header">
          Faceit
          </div>
          <div className="card-text">
          Get to meet your favorite internet superstar with the faceit app
          </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <img src={todo} alt=""/>
        <div className="card-footer">
          <div className="card-footer-text">

          <div className="card-text-header">
          Todo
          </div>
          <div className="card-text">
          A todo app that features cloud sync with light and dark mode
          </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <img src={loopstudios} alt=""/>
        <div className="card-footer">
          <div className="card-footer-text">

          <div className="card-text-header">
          Loopstudios
          </div>
          <div className="card-text">
          A VR experience app made for Loopstudios
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

export default Home