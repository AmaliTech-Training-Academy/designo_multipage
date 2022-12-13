import React from "react";
import './location.css'

const Location = (props) => {
    return(
        <div className="loc-page">
         <div className="loc-big-div">
          <div className="loc-text">
                <h3>{props.title}</h3>
          </div>
          <div className="loc-img">
          <img src={props.src}
               sizes={props.sizes}
              srcSet={props.srcSet}
               alt={props.alt} />

          </div>
         </div>
        </div>

    );
}


export default Location