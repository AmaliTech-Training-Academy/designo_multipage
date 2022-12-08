import React from "react";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import TopAbout from "./components/About/top";
import Location from "./components/Location/location";
import LocationCall from "./components/Location/LocationCall";

function App() {
  return (
    <>
      <div className="App"  >
        <Header />
        <LocationCall/>
       
      </div>
    </>
  )
  }

export default App;
