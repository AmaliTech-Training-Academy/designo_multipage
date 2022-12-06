import React from "react";
import '../../css/about.css'


function topAbout(){
    return (
        <>
        <div className="big-div">
            <div className="sub-div">
                <h3 className="myText">About Us</h3>
                <p className=" about-text">Founded in 2010, we are a creative agency that produces 
                   lasting results for our clients. We’ve partnered with
                   many startups, corporations, and nonprofits alike to craft designs
                   that make real impact. We’re always looking forward to creating
                   brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div className="sub-div-1">
                 <img id="sub-img" src="/assets/about/desktop/image-about-hero.jpg"/>
            </div>
        </div>
        <div className="big-div-1">
            <div className="sub-div-1">
             <img id="sub-img" src="/assets/about/desktop/image-world-class-talent.jpg"/>
            </div>
            <div className="sub-2">
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
        </>
    );
}


export default topAbout