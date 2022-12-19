import React from "react";
import './location.css'
// images
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png"
import UKMap from "../../assets/locations/desktop/image-map-united-kingdom.png"
import CanadaTablet from "../../assets/locations/tablet/image-map-canada.png"
import AustraliaTablet from "../../assets/locations/tablet/image-map-australia.png"
import UKTablet from "../../assets/locations/tablet/image-map-uk.png"
import LocationMap from "./Map";
import { MapContainer, TileLayer,Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Footer from "../../components/Footer/Footer";

function Location () {
    return(
        <>
        <div>
            <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>
 
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
                  </div>
              </div>
            </div>  
            {/* </div> */}
            <div className="loc-img">
              <img id="img-loc-1"src={CanadaMap}
                  sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                  srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
                alt="canada map"/>
            </div>
          {/* </div> */}
          </div>
          <div className="loc-img">
          <MapContainer center={[43.77681075478822, -79.23103793101617]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[43.77681075478822, -79.23103793101617]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
  </Marker>
</MapContainer>
          
          </div>
          <div className="loc-page">
            {/* <div className="loc-big-div"> */}
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
        </div>
        <div className="loc-img img-reverse">
        <MapContainer center={[-33.115525, 151.555563]} zoom={13} scrollWheelZoom={false}>
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={[-33.115525, 151.555563]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
      </Marker>
      </MapContainer>
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
         <MapContainer center={[53.733268, -1.327919]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[53.733268, -1.327919]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
  </Marker>
</MapContainer>
         </div>
        </div>
      <Footer/>
      </div>
      </>
    );
}


export default Location