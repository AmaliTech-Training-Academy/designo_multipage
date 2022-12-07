import React from "react";
import Middle from "./middle";
import './about.css'
import HeroMobile from "../../assets/about/mobile/image-about-hero.jpg"
import HeroTablet from "../../assets/about/tablet/image-about-hero.jpg"
import HeroDesktop from "../../assets/about/desktop/image-about-hero.jpg"
import WorldClassMobile from "../../assets/about/mobile/image-world-class-talent.jpg"
import WorldClassTablet from "../../assets/about/tablet/image-world-class-talent.jpg"
import WorldClassDesktop from "../../assets/about/desktop/image-world-class-talent.jpg"
import RealDealMobile from "../../assets/about/mobile/image-real-deal.jpg"
import RealDealTablet from "../../assets/about/tablet/image-real-deal.jpg"
import RealDealDesktop from "../../assets/about/desktop/image-real-deal.jpg"


function TopAbout(){
    return (
        <>
        <div className="big-div">
            <div className="sub-div left-curve  col-order" id="">
                <h3 className="myText">About Us</h3>
                <p className=" about-text">Founded in 2010, we are a creative agency that produces 
                   lasting results for our clients. We’ve partnered with
                   many startups, corporations, and nonprofits alike to craft designs
                   that make real impact. We’re always looking forward to creating
                   brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div className="sub-div-1 col-order">
                 <img className="right-curve" id="sub-img" src={HeroDesktop}
                     sizes="(min-width: 1090px) 30vw, (min-width: 550px) 100vw,  100vw"
                     srcSet={`${HeroMobile} 375w, ${HeroTablet} 689w,
                            ${HeroDesktop} 476w`}  alt=""/>
            </div>
        </div>
        <div className="big-div-1">
            <div className="sub-div-1">
             <img  className="left-curve"id="sub-img" src={WorldClassDesktop}
                     sizes="(min-width: 1090px) 30vw, (min-width: 550px) 100vw,  100vw"
                     srcSet={`${WorldClassMobile} 375w, ${WorldClassTablet} 689w,
                            ${WorldClassDesktop} 476w`}  alt=""/>
            </div>
            <div className="sub-2 right-curve">
                <div className="holder-2">
                    <h3 className="class-medium">World-class talent</h3>
                    <p className="body-text-small" id="sub-text">
                      We are a crew of strategists, problem-solvers, and technologists.
                      Every design is thoughtfully crafted from concept to launch, 
                      ensuring success in its given market. We are constantly updating
                      our skills in a myriad of platforms.
                      </p>
                      <p className="body-text-small" id="sub-text-1">
                        Our team is multi-disciplinary and we are not merely interested 
                        in form — content and meaning are just as important. We give great
                        importance to craftsmanship, service, and prompt delivery. Clients 
                        have always been impressed with our high-quality outcomes that 
                        encapsulates their brand’s story and mission.
                    </p>

                </div>

            </div>
        </div>
        <Middle/>

        <div className="big-div-1">
            <div className="sub-2 left-curve col-order">
                <div className="holder-2">
                    <h3 className="class-medium">The real deal</h3>
                <p className="body-text-small" id="sub-text">
                As strategic partners in our clients’ businesses, we are ready to take on 
                any challenge as our own. Solving real problems require empathy and collaboration,
                 and we strive to bring a fresh perspective to every opportunity. We make design and
                  technology more accessible and give you tools to measure success.
                  </p>
                  <p className="body-text-small other" id="sub-text-1">
                    We are visual storytellers in appealing and captivating ways.
                     By combining business and marketing strategies, we inspire audiences to take 
                     action and drive real results.
                </p>
                </div>
            </div>
            <div className="sub-div-1 col-order">
            <img className="right-curve" id="sub-img" src={RealDealDesktop}
                     sizes="(min-width: 1090px) 30vw, (min-width: 550px) 100vw,  100vw"
                     srcSet={`${RealDealMobile} 375w, ${RealDealTablet} 689w,
                            ${RealDealMobile} 476w`}  alt=""/>
                
            </div>

        </div>
        </>
    );
}


export default TopAbout