import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__heptagon">
          <div className="footer__heptagon--box1">
              <span><a href="/contact" className='footer__item'>contact</a></span>
          </div>
          <div className="footer__heptagon--box2">
            <span><a href="/portfolio" className='footer__item'>portfolio</a></span>
          </div>
          <div className="footer__heptagon--box3">
            <span><a href="/about" className='footer__item'>about</a></span>
          </div>
          <div className="footer__heptagon--box4">
            <span><a href="/profile" className='footer__item'>profile</a></span>
          </div>
          <div className="footer__heptagon--box5">
            <span><a href="/exprience" className='footer__item'>exp</a></span>
          </div>
      </div>

      <div className="footer__copy-right">
        <span>  2022 © DER.COM All rights reserved </span>
      </div>
    </div>
  )
}

export default Footer