import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas