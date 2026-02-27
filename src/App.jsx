import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App