import React, { useEffect, useState } from 'react'
import {myphoto1, myphoto2, myphoto3, 
  myphoto4, myphoto5, myphoto6 } from '../../scss/assets/pictureExport';

import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

const items = [
  {
      id: 1,
      img: myphoto1,
  }
  ,{
      id: 2,
      img: myphoto2,
  }
  ,{
      id: 3,
      img: myphoto3,
  }
  ,{
      id: 4,
      img: myphoto4,
  }
  ,{
      id: 5,
      img: myphoto5,
  }
  ,{
      id: 6,
      img: myphoto6,
  }
]

const Card = (props) => {
  return (
    <li className="carousel-card">
      {/* <span>{props.id}</span> */}
      <img src={props.img} alt="photo" className='carousel-card__img' />
    </li>
  )
}

const About = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect( ()=> {
    document.documentElement.style.setProperty('--num', carouselItems.length)
  }, [carouselItems])
  
  const handleAnimationEnd = () => {
    if(moveClass === 'prev'){
      shiftNext([...carouselItems]);
    }else if(moveClass === 'next'){
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }
  
  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }
  
  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }


  return (
    <div className='about'>

        <div className='about__about-me'>
           <h2 className='gold-color'>About Me</h2>
        </div>
        
        <div className="about__section">
          
            <div className="carouselwrapper module-wrapper">
              
              <div>
                <div className="ui">
                    <a onClick={() => setMoveClass('next')} className="prev">
                      <BsFillArrowLeftCircleFill className="ui__icons"/>
                    </a>
                    <a onClick={() => setMoveClass('prev')} className="next">
                      <BsFillArrowRightCircleFill className="ui__icons"/>
                    </a>
                  </div>
                
                  <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                      {carouselItems.map((t, index) => 
                        <Card key={t.copy + index} icon={t.icon} copy={t.copy} img= {t.img} id={t.id} />
                      )}
                  </ul>
              </div>
            
            </div>

            <div className="detail">
                <div className="post">
                    <p className='paragraph'>
                        Hi, I'm Saw Eh Dar Ler but my friends call me Eh Dar. I grew up in Pathein and lived there most of my life. 
                        I speak Kayin, Burma, and English. I got my high school degree in 2012, I continued my education and went 
                        to University and obtained a Beacher of Art (English). After graduating from University I studied 
                        java language at JDC(java developer class) and worked as a java programmer.
                    </p>
                    <span className="date">10-10-2022</span>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default About