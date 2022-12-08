import React from "react";
import './location.css'

const Location = (props) => {
    return(
        <div className="loc-page">
         <div className="loc-big-div">
          <div className="loc-text-1">
            <div className="loc-holder">
            <h3 className="loc-title">{props.title}</h3>
                <div className="loc-text-row">
                   <div className="sub-loc-1" id="loc-right">
                    <h4 className="loc-small-text " id="loc-small-title">{props.titleA}</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">{props.subtitle}</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">{props.other}</h4>
                    </div>
                    <div className="sub-loc-1">
                    <h4 className="loc-small-text " id="loc-small-title">Contact</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">{props.phone}</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">{props.mail}</h4>
                    </div>
                </div>

            </div>
              
          </div>
          <div className="loc-img">
          <img id="img-loc-1"src={props.src}
               sizes={props.sizes}
              srcSet={props.srcSet}
               alt={props.alt} />

          </div>
         </div>
        </div>

    );
}


export default Location