import React from "react";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import TopAbout from "./components/About/top";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <>
      <div className="App"  >
        <Header />
        <Contact/>
       
      </div>
    </>
  )
  }

export default App;
