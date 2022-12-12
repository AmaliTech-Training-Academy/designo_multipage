import React from "react";
import "./Graphic.css";
import pattern from "../../assets/app-design/desktop/bg-pattern-intro-app.svg";
import bgimg from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import { Graph } from "../../data";
import arrow from "../../assets/shared/desktop/icon-right-arrow.svg"
import Footer from "../Footer/Footer";

const Graphic = () => {
  return (
    <div className="home">
      <img src={bgimg} className="bg-img" />
      <div className="wrapper" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="wrapper-text">
          <h2> Graphic design</h2>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </div>

      {/*  CARD SECTION  */}
      <div className="cards-container">
        {
        Graph.map((data) => {
          const { img, title, text } = data;
          return (
            <div className="card-container">
              <img src={img} alt="" />
              <div className="card-footer">
                <div className="card-footer-text">
                  <div className="card-text-header">{title}</div>
                  <div className="card-text">{text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="picture-container">
        <div className="first-img">
          <div className="img-background">
            <div className="picture-text">
              <h2> Web Design</h2>
              <p>
                View Projects <span><img src={arrow} alt="" /></span>
              </p>
            </div>
          </div>
        </div>
        <div className="second-img">
          <div className="img-background">
            <div className="picture-text-2">
              <h2> Graphic Design</h2>
              <p>
                View Projects <span><img src={arrow} alt="" /></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Graphic;
