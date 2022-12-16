import React from "react";
import Middle from "./middle";
import './about.css'
import HeroDesktop from "../../assets/about/desktop/image-about-hero.jpg"
import WorldClassDesktop from "../../assets/about/desktop/image-world-class-talent.jpg"
import RealDealDesktop from "../../assets/about/desktop/image-real-deal.jpg"
import BackgroundSvg from "../../assets/shared/desktop/bg-pattern-leaf.svg"
import Footer from "../../components/Footer/Footer";


function TopAbout(){
    return (
        <>
            <img id="top-bg" src={BackgroundSvg} alt=''/>
            <img id="mid-bg"src={BackgroundSvg} alt=''/>
            <div className="about-us">
                <div className="sub-div left-curve  col-order" id="">
                    <h3 className="myText">About Us</h3>
                    <p className=" about-text">Founded in 2010, we are a creative agency that produces 
                    lasting results for our clients. We’ve partnered with
                    many startups, corporations, and nonprofits alike to craft designs
                    that make real impact. We’re always looking forward to creating
                    brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </div>
                <div className="sub-div-1 col-order-one">
                    <img className="right-curve" id="sub-img" src={HeroDesktop} alt=''/>
                </div>
            </div>
            <div className="world-class-talent">
                <div className="sub-div-1 col-order-two">
                <img  className="left-curve-1"id="sub-img" src={WorldClassDesktop}  alt=""/>
                </div>
                <div className="sub-2 right-curve-1 three-circles">
                    <div className="holder-2">
                        <span>World-class talent</span>
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

            <div className="real-deal">
                <div className="sub-2 left-curve col-order two-circles">
                    <div className="holder-2">
                        <span>The real deal</span>
                        <p className="body-text-small" id="sub-text">
                        As strategic partners in our clients’ businesses, we are ready to take on 
                        any challenge as our own. Solving real problems require empathy and collaboration,
                        and we strive to bring a fresh perspective to every opportunity. We make design and
                        technology more accessible and give you tools to measure success.
                        </p>
                        <p className="body-text-small other" id="sub-text-2">
                            We are visual storytellers in appealing and captivating ways.
                            By combining business and marketing strategies, we inspire audiences to take 
                            action and drive real results.
                        </p>
                    </div>
                </div>
                <div className="sub-div-1 col-order-three">
                <img className="right-curve" id="sub-img" src={RealDealDesktop} alt=""/>
                    
                </div>

            </div>
            <Footer/>
        </>
    );
}


export default TopAbout