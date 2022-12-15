import React,{ useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import AppRoutes from "./routes/index";



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
          <AppRoutes/>
        </Wrapper>    
        {/* <Home /> */}
      </div>
  );
  }


export default App;
