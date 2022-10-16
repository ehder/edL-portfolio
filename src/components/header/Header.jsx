import React, { useEffect, useState } from 'react'
import user from '../../scss/assets/img/p3.jpg';

import {BiChat} from 'react-icons/bi';
import {BsFacebook} from 'react-icons/bs';
import {AiTwotoneSetting} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

    const[date, setDate] = useState();
    const [time, setTime] = useState();

    useEffect( ()=> {
        const timer = setInterval( ()=> {
            setTime(new Date().toLocaleTimeString("en-US"));
            setDate(new Date().toLocaleDateString("en-US"));
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

   const [userName, setUserName] = useState("Saw Eh Dar Ler");

  return (
    <div className='header-section'>
        
        <div className="logo-wrap">
          <div className="logo"> </div>
        </div>

        {/* <form className='search' action="#">
            <input type="text" className="search__input" placeholder='search...'/>
            <button className="search__button">
                <BsSearch className='search__icon'/>
            </button>
        </form> */}

        <div className="animation">
            <AiTwotoneSetting className='animation__icon'/>
        </div>

        <div className="animation">
            <span>{time}</span>
        </div>
        <div className="animation">
            <span>{date}</span>
        </div>

        <nav className='user-nav'>

            <div className="user-nav__icon-box">
                <a href="https://www.facebook.com/ehdarler" target="_blank">
                    <BsFacebook className='user-nav__icon'/>
                </a>
            </div>

            <div className="user-nav__icon-box">
                <Link to="/contact">
                    <BiChat className='user-nav__icon'/>
                </Link>
            </div>

            <div className="user-nav__user">
                <Link to="/" className="user-nav__user-name">
                    <img src={user} alt="user image" className='user-nav__user-photo'/>
                    <span>{userName}</span>
                </Link>
            </div>

        </nav>

    </div>
  )
}

export default Header