import React from "react";
import './mid.css'


function Middle(){
    return(
        <>
        <div className="mid-div">
            <div className="sub-mid">
            <img className="sub-svg" src="/assets/shared/desktop/illustration-canada.svg"/>
            <h3 className="loc-text">CANADA</h3>
            <button className="loc-button">See Location</button>
            </div>
            <div className="sub-mid">
            <img className="sub-svg" src="/assets/shared/desktop/illustration-australia.svg"/>
            <h3 className="loc-text">AUSTRALIA</h3>
            <button className="loc-button">See Location</button>
            </div>
            <div className="sub-mid">
            <img className="sub-svg" src="/assets/shared/desktop/illustration-united-kingdom.svg"/>
            <h3 className="loc-text">UNITED KINGDOM</h3>
            <button className="loc-button">See Location</button>
            </div>
        </div>
      
        </>
    );
}

export default Middle