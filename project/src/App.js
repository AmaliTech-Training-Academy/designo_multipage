import React,{ useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
<<<<<<< HEAD
import Home from "./pages/Home/Home";
import WebDesign from "./pages/Web_Design/WebDesign";
import TopAbout from "./pages/About/top";
// import MobileNavMenu from "./components/Header/MobileNavMenu";
=======
import AppRoutes from "./routes/index";

const Wrapper = ({children}) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
>>>>>>> b772e9755c1064523c2fddd9c950bae119d72bd6


function App() {
  return (
      <div className="App"  >
<<<<<<< HEAD
  
        <WebDesign />
       

=======
        <Wrapper>
          <Header />
          <AppRoutes/>
        </Wrapper>    
>>>>>>> b772e9755c1064523c2fddd9c950bae119d72bd6
      </div>
  );
  }


export default App;
