import React from "react";
import "./Footer.css";
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import twitter from '../../assets/shared/desktop/icon-instagram.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import footer from '../../assets/shared/desktop/logo-light.png'
import pattern from '../../assets/shared/desktop/bg-pattern-small-circle.svg'

const Footer = () => {
  return (
    <div className="all-footer">
        <div className="above-footer" style={{backgroundImage:`url(${pattern})`}}>
            <div className="above-footer-text">
                <h2> Let's talk about your project</h2>
                <p> Ready to take it to the next level? Contact us today and find out how our expertise can 
  help your business grow.</p>
            </div>
            <div >
                <button className="above-footer-btn"> Get in touch</button>
            </div>
        </div>
    <footer>
      <div className="footer-container">
        <div className="footer-upper-container">
          <div className="footer-text">
            <div >
            <img src={footer} alt="" className="footer-icon"/>
            </div>
          </div>

          <ul className="footer-links">
            <li>Our company</li>
            <li>Locations</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom-container">
            <div className="footer-address">
           <p>Designo Central Office
                 3886 Wellington Street
                 Toronto, Ontario M9C 3J5</p> 
            </div>

            <div className="footer-address">
           <p> Contact Us (Central Office)
  P : +1 253-863-8967
  M : contact@designo.co</p> 
            </div>
            <div className="footer-icons">
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
