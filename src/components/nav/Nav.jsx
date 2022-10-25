import React from 'react'
import {BsArrowUpCircleFill} from 'react-icons/bs';
import {BsArrowDownCircleFill} from 'react-icons/bs';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav__container">
            <div className="nav__text">
                <a href="#main">
                    <BsArrowUpCircleFill/>
                    {/* up */}
                </a>
                <a href="#footer">
                    <BsArrowDownCircleFill/>
                    {/* down */}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Nav