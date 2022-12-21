import React, { Component } from 'react';
import { MapContainer, TileLayer, useMap,Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'



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

  );
   
  
}

export default mapImage;