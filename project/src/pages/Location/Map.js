import React, { Component } from 'react';
import { MapContainer, TileLayer, useMap,Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'



function LocationMap(props){
    return(
        <>
        <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>
        <MapContainer center={[43.77681075478822, -79.23103793101617]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[43.77681075478822, -79.23103793101617]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
  </Marker>
</MapContainer>
        </>
    );
}

export default LocationMap;