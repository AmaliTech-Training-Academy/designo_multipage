import React from "react";
import './location.css'
// images
import CanadaMap from "../../assets/locations/desktop/image-map-canada.png"
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png"
import UKMap from "../../assets/locations/desktop/image-map-united-kingdom.png"
import CanadaTablet from "../../assets/locations/tablet/image-map-canada.png"
import AustraliaTablet from "../../assets/locations/tablet/image-map-australia.png"
import UKTablet from "../../assets/locations/tablet/image-map-uk.png"

const Location = (props) => {
    return(
        <>
        <div className="loc-page">
         <div className="loc-big-div">
          <div className="loc-text-1">
            <div className="loc-holder">
            <h3 className="loc-title">Canada</h3>
                <div className="loc-text-row">
                   <div className="sub-loc-1" id="loc-right">
                    <h4 className="loc-small-text " id="loc-small-title">Designo  Central Office</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">3886 Wellington Street</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">Toronto, Ontario M9C 3J5</h4>
                    </div>
                    <div className="sub-loc-1">
                    <h4 className="loc-small-text " id="loc-small-title">Contact</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">P : +1 253-863-8967</h4>
                    <h4 className="loc-small-text" id="loc-normal-text">M : contact@designo.co</h4>
                    </div>
                </div>
            </div>  
          </div>
          <div className="loc-img">
          <img id="img-loc-1"src={CanadaMap}
              sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
              srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
             alt="canada map"/>
          </div>
         </div>
        </div>
        
       <div className="loc-page">
       <div className="loc-big-div">
        <div className="loc-text-1">
          <div className="loc-holder">
          <h3 className="loc-title">Australia</h3>
              <div className="loc-text-row">
                 <div className="sub-loc-1" id="loc-right">
                  <h4 className="loc-small-text " id="loc-small-title">Designo AU Office</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">19 Balonne Street</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">New South Wales 2443</h4>
                  </div>
                  <div className="sub-loc-1">
                  <h4 className="loc-small-text " id="loc-small-title">Contact</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">P : (02) 6720 9092</h4>
                  <h4 className="loc-small-text" id="loc-normal-text">M : contact@designo.au</h4>
                  </div>
              </div>
          </div>   
        </div>
        <div className="loc-img">
        <img id="img-loc-1"src={AustraliaMap}
             sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
            srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
            alt="australia map"/>
        </div>
       </div>
      </div>

      <div className="loc-page">
        <div className="loc-big-div">
         <div className="loc-text-1">
           <div className="loc-holder">
           <h3 className="loc-title">United Kingdom</h3>
               <div className="loc-text-row">
                  <div className="sub-loc-1" id="loc-right">
                   <h4 className="loc-small-text " id="loc-small-title">Designo UK Office</h4>
                   <h4 className="loc-small-text" id="loc-normal-text">13  Colorado Way</h4>
                   <h4 className="loc-small-text" id="loc-normal-text">Rhyd-y-fro SA8 9GA</h4>
                   </div>
                   <div className="sub-loc-1">
                   <h4 className="loc-small-text " id="loc-small-title">Contact</h4>
                   <h4 className="loc-small-text" id="loc-normal-text">P : 078 3115 1400</h4>
                   <h4 className="loc-small-text" id="loc-normal-text">M : contact@designo.uk</h4>
                   </div>
               </div>
           </div>
             
         </div>
         <div className="loc-img">
         <img id="img-loc-1"src={UKMap}
            sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
             srcSet={`${UKTablet} 689w, ${UKMap} 375w`}
             alt="united kingdom map"/>
          
         </div>
        </div>
       </div>


      </>
    );
}


export default Location