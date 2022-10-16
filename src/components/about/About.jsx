import React from 'react'
import photo1 from '../../scss/assets/img/photo1.jpg';
import photo2 from '../../scss/assets/img/photo2.jpg';
import photo3 from '../../scss/assets/img/photo3.jpg';
import photo4 from '../../scss/assets/img/photo4.jpg';

const About = () => {
  return (
    <div className='about'>

        <div className='about__about-me'>
           <h2 className='gold-color'>About Me</h2>
        </div>
        
        <div className="about__section">
          <div className="gallery">
              <figure className="gallery__item">
                <img src={photo1} alt="photo" className='gallery__photo'/>
              </figure>
              <figure className="gallery__item">
                <img src={photo4} alt="photo" className='gallery__photo'/>
              </figure>
              <figure className="gallery__item">
                <img src={photo3} alt="photo" className='gallery__photo'/>
              </figure>
            </div>

            <div className="detail">
                <div className="post">
                    <p className='paragraph'>
                        Hi, I'm <span>Saw Eh Dar Ler</span> but my friends call me <span>Eh Dar</span>. I grew up in Pathein, and lived there most of 
                        my life. I speak Kayin, Burma and English. I got my high school degree in 2012, I continued my education and went to University
                        and obtained Beacher of Art (English). After graduating from University I studied java language at JDC(java developer class) 
                        and worked as a java programmer. 
                    </p>
                    <span className="date">10-10-2022</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About