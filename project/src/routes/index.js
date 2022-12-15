import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home/Home"
import WebDesign from "../pages/Web_Design/WebDesign"
import AppDesign from "../pages/App-Design/index"
import Graphic from '../pages/Graphic-Design'


const AppRoutes = () => {
  return (
    <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/web-design" element={<WebDesign />} />
                <Route path="/app-design" element={<AppDesign/>} />
                <Route path="/graphic-design" element={<Graphic/>} />
                <Route path="/location" element='' />
                <Route path="/about" element='' />
                <Route path="/contact" element='' />
    </Routes>
    
  )
}

export default AppRoutes