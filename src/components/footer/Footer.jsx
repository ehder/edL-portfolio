import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__heptagon">
          <div className="footer__heptagon--box1">
            <a href="/contact" className='footer__item'>contact</a>
          </div>
          <div className="footer__heptagon--box2">
            <a href="/portfolio" className='footer__item'>portfolio</a>
          </div>
          <div className="footer__heptagon--box3">
            <a href="/about" className='footer__item'>about</a>
          </div>
            <div className="footer__heptagon--box4">
          <a href="/" className='footer__item'>profile</a>
            </div>
          <div className="footer__heptagon--box5">
            <a href="/exprience" className='footer__item'>exp</a>
          </div>
      </div>

      <div className="footer__copy-right">
        <span>  2022 © DER.COM All rights reserved </span>
      </div>
    </div>
  )
}

export default Footer