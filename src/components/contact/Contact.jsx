import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const Contact = () => {
const data = [
  {
    id: 1,
    name: "Email",
    contactType: "ehderlel@gmail.com",
    contactAddress: "mailto:ehderlel@gmail.com",
    contactIcon: <MdOutlineMail/>
  },
  {
    id: 2,
    name: "Saw Eh Dar Ler",
    contactType: "WhatsApp",
    contactAddress: "https://web.whatsapp.com/send?phone+959799623994",
    contactIcon: <BsWhatsapp/>
  },
  {
    id: 3,
    name: "Saw Eh Dar Ler",
    contactType: "Messenger",
    contactAddress: "https://m.me/ehdarler",
    contactIcon: <FaFacebookMessenger/>
  },
]

const form = useRef();
const name = React.createRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_6s7a55x', 'template_e1bhq4w', form.current, 'xoDl_9sgvK4QSGM-m') 
  e.target.reset();
};

// for sending email directly from webpage we use EmailJs: https://www.emailjs.com/
//npm install emailjs-com --save

  return (
    <div className='contact' id='contact'>
        
        <div className='contact__contact-me'>
           <h2 className='gold-color'>Contact Me</h2>
        </div>

        <div className="contact__card">
            {
              data.map( ({id, name, contactType, contactAddress, contactIcon})=> {
                return (
                  <article className="contact__option" key={id}>
                    <div className='contact__option-icon'>{contactIcon}</div>
                    <h4><span>{name}</span></h4>
                    <h5><span>{contactType}</span></h5>
                    <a target="_blank" className='contact__item' href={contactAddress}>Send a message</a>
                </article>
                )
              })
            }
        </div>

        <div className="form-card">
          <form className='form' ref={form} onSubmit={sendEmail} >
            <input className='form__name' type="text" name='name' placeholder='Your Name' required/>
            <input className='form__email' type="email" name ='email' placeholder='Your Email' required/>
            <textarea className='form__message' name='message' id='' rows="5" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn'>Send Message</button>
          </form>
        </div>

    </div>
  )
}

export default Contact