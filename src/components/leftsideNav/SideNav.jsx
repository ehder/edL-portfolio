import React, { useEffect, useState } from 'react'

import {ImProfile} from 'react-icons/im';
import {RiContactsBookFill} from 'react-icons/ri';
import {RiFolderUserLine} from 'react-icons/ri';
import {TbReportSearch} from 'react-icons/tb';
import {AiOutlineExperiment} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SideNav = () => {

  const[active, setActive] = useState("");


  console.log("Active Nav Bar: ", active)

  return (
    <div className='leftside-nav-section'>
        <div className='sidebar'>
        <ul className="side-nav">
          
          <li  className={ active === "/" ? "side-nav__item side-nav__item--active" : ""}  >
                <Link to="/" className="side-nav__link" onClick={()=> setActive("/")}>
                  <ImProfile className='side-nav__icon'/>
                  <span>profile</span>
                </Link>
          </li>

          <li className={ active === "contact" ? "side-nav__item side-nav__item--active" : ""} >
              <Link to="/contact" className="side-nav__link " onClick={()=> setActive('contact')}>
              <RiContactsBookFill className='side-nav__icon'/>
              <span>contact</span>
              </Link>
          </li>

          <li className={ active === "about" ? "side-nav__item side-nav__item--active" : ""} >
            <Link to="/about" className="side-nav__link" onClick={()=> setActive('about')}>
              <RiFolderUserLine className='side-nav__icon'/>
              <span>about</span>
            </Link>
          </li>

          <li className={ active === "portfolio" ? "side-nav__item side-nav__item--active" : ""} >
            <Link to="/portfolio" className="side-nav__link" onClick={()=> setActive('portfolio')}>
              <RiFolderUserLine className='side-nav__icon'/>
              <span>Portfolio</span>
            </Link>
          </li>

          <li className={ active === "exprience" ? "side-nav__item side-nav__item--active" : ""} >
            <Link to="/exprience" className="side-nav__link" onClick={()=> setActive('exprience')}>
              <RiFolderUserLine className='side-nav__icon'/>
              <span>Exprience</span>
            </Link>
          </li>

        </ul>
    </div>
    </div>
  )
}

export default SideNav