import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Calorie from '../Pages/Calorie'
import Diet from '../Pages/Diet'
import Login from '../Pages/Login'
import SinglePage from '../Pages/SinglePage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/calorie' element={<Calorie/>}/>
        <Route path='/diet' element={<Diet/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singlepage/:id' element={<SinglePage/>}/>
    </Routes>
  )
}

export default AllRoutes