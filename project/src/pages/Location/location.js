import React from "react";
import './location.css'
// images
import { MapContainer, TileLayer,Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Footer from "../../components/Footer/Footer";
import LocationProps from "./LocationProps";

function Location () {
  const mapImage = (lat, lng) => {
      return(
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
      </Marker>
    </MapContainer>
    )
  }

    return(
        <>
        <div className="body">
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossorigin=""
            />
 
        <div className="loc-page">
          
         <div className="loc-big-div">
         <LocationProps 
               country="Canada"
               heading = "Designo  Central Office"
               address = "3886 Wellington Street"
               address1 = "Toronto, Ontario M9C 3J5"
               number= "P : +1 253-863-8967"
               email=" M : contact@designo.co"
              />
          <div className="loc-img">
            {mapImage(43.77681075478822, -79.23103793101617)}
          </div>
         </div>
        </div>

        <div className="loc-page">
            <div className="loc-big-div reverse">
              <LocationProps 
               country="Australia"
               heading = "Designo AU Office"
               address = "19 Balonne Street"
               address1 = "New South Wales 2443"
               number= "P : (02) 6720 9092 "
               email="M : contact@designo.au"
              />
           
            <div className="loc-img img-reverse">
              {mapImage(-30.329531, 149.788193)}
            </div>
        </div>
       </div>
     

      <div className="loc-page">
        <div className="loc-big-div">
         <LocationProps 
               country="United Kingdom"
               heading = "Designo UK Office"
               address = "13  Colorado Way"
               address1 = "Rhyd-y-fro SA8 9GA"
               number= "P : 078 3115 1400"
               email="M : contact@designo.uk"
              />
         <div className="loc-img">
          {mapImage(53.733268, -1.327919)}
         </div>
        </div>
        </div>
        </div>
     
      <Footer/>
      </>
    );
}


export default Location