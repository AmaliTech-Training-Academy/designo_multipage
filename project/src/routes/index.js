import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/App_Design/Design'
import LoginPage from '../components/Graphic_Design/Graphic'
import ProductsPage from '../pages/products'
import SignupPage from '../pages/signup'
import Add from  '../pages/add'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/products/:id' element={<ProductsPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/add' element={<Add/>} />
    </Routes>
  )
}

export default AppRoutes