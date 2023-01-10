import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home/Home"
import WebDesign from "../pages/Web_Design/WebDesign"
import AppDesign from "../pages/App-Design/index"
import Graphic from '../pages/Graphic-Design'
import Contacts from '../pages/ContactPage'
import About from "../pages/About/top"
import Location from '../pages/Location/location'


const AppRoutes = () => {
  return (
    <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/web-design" element={<WebDesign />} />
                <Route path="/app-design" element={<AppDesign/>} />
                <Route path="/graphic-design" element={<Graphic/>} />
                <Route path="/location" element={<Location/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/'>
                  <Route path='/contact' element={<Contacts />} />
                  <Route path=':id/contact' element={<Contacts />} />
                </Route>
    </Routes>
    
  )
}

export default AppRoutes