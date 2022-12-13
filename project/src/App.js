import React,{ useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import WebDesign from "./pages/Web_Design/WebDesign";
// import MobileNavMenu from "./components/Header/MobileNavMenu";

const Wrapper = ({children}) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
      <div className="App"  >
        <Wrapper>
          <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="web-design" element={<WebDesign />} />
                <Route path="app-design" element='' />
                <Route path="graphic-design" element='' />
                <Route path="location" element='' />
                <Route path="about" element='' />
                <Route path="contact" element='' />
              </Route>
            </Routes>
        </Wrapper>    
        {/* <Home /> */}
      </div>
  );
  }

export default App;
