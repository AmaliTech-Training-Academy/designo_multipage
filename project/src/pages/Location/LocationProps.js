import React from "react";

const LocationProps = (props) => {
    return(
        <>
          <div className="loc-text-1">
            <div className="loc-holder">
              <h3 className="loc-title">{props.country}</h3>
              <div className="loc-text-row">
                <div className="sub-loc-1" id="loc-right">
                  <h4 className="loc-small-text " id="loc-small-title">{props.heading}</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">{props.address}</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">{props.address1}</h4>
                </div>
                <div className="sub-loc-1">
                      <h4 className="loc-small-text " id="loc-small-title">Contact</h4>
                      <h4 className="loc-small-text" id="loc-normal-text">{props.number}</h4>
                      <h4 className="loc-small-text" id="loc-normal-text">{props.email}</h4>
                      </div>
              </div>
            </div>
          </div> 
        </>

    );

}


export default LocationProps