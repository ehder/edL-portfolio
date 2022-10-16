import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Exprience from '../experience/Exprience';
import PortFolio from '../portfolio/PortFolio';
import Profile from '../profile/Profile';
import SideNav from '../leftsideNav/SideNav';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const Main = () => {
  return (
    <div className='main-section'>
        <div className="main">
              <Routes>
                  <Route exact path='/' element={<Profile/>}/>  
                  <Route path='/about' element={<About/>}/>  
                  <Route path='/contact' element={<Contact/>}/>  
                  <Route path='/exprience' element={<Exprience/>}/>  
                  <Route path='/portfolio' element={<PortFolio/>}/>  
              </Routes>  
        </div>
    </div>
  )
}

export default Main