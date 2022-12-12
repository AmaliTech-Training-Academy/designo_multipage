import React from "react";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import WebDesign from "./components/Web_Design/WebDesign";
// import MobileNavMenu from "./components/Header/MobileNavMenu";


function App() {
  return (
    <>
      <div className="App"  >
        {/* <MobileNavMenu /> */}
        <Header />
        <Home />
        {/* <WebDesign /> */}
      </div>
    </>
  )
  }

export default App;
