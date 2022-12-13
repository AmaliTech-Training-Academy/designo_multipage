import React from 'react'
import './Design.css'
import arrow from "../../assets/shared/desktop/icon-right-arrow.svg"
import bgimg from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import {App} from '../../data'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <div className='home'>
      <img src={bgimg} className="bg-img" />
    <div className="wrapper" >
      <div className="bg-wrapper"></div>
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
          <p>View Projects <span><img src={arrow} alt="" /></span></p>
        </div>
      </div>
      </div>
      <div className="second-img">
      <div className="img-background">
      <div className="picture-text-2">
     <h2> Graphic Design</h2> 
     <Link to={"/graphic"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <p>  View Projects <span><img src={arrow} alt="" /></span></p>

     </Link>
      </div>
      </div>
    </div>
    </div>
    <Footer/>
   </div>

  )
}

export default Home