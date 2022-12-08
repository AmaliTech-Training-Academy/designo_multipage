import React from "react";
import Middle from "./middle";
import './about.css'


function TopAbout(){
    return (
        <>
        <div className="big-div">
            <div className="sub-div left-curve" id="">
                <h3 className="myText">About Us</h3>
                <p className=" about-text">Founded in 2010, we are a creative agency that produces 
                   lasting results for our clients. We’ve partnered with
                   many startups, corporations, and nonprofits alike to craft designs
                   that make real impact. We’re always looking forward to creating
                   brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div className="sub-div-1">
                 <img className="right-curve" id="sub-img" src="/assets/about/desktop/image-about-hero.jpg"/>
            </div>
        </div>
        <div className="big-div-1">
            <div className="sub-div-1">
             <img  className="left-curve"id="sub-img" src="/assets/about/desktop/image-world-class-talent.jpg"/>
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
            <div className="sub-2 left-curve">
                <div className="holder-2">
                    <h3 className="class-medium">The real deal</h3>
                <p className="body-text-small" id="sub-text">
                As strategic partners in our clients’ businesses, we are ready to take on 
                any challenge as our own. Solving real problems require empathy and collaboration,
                 and we strive to bring a fresh perspective to every opportunity. We make design and
                  technology more accessible and give you tools to measure success.
                  </p>
                  <p className="body-text-small" id="sub-text-1">
                    We are visual storytellers in appealing and captivating ways.
                     By combining business and marketing strategies, we inspire audiences to take 
                     action and drive real results.
                </p>
                </div>
            </div>
            <div className="sub-div-1">
            <img className="right-curve" id="sub-img" src="/assets/about/desktop/image-real-deal.jpg"/>
                
            </div>

        </div>
        </>
    );
}


export default TopAbout