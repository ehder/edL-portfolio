import React from 'react'

import portfolio1 from '../../scss/assets/img/pro-img/portfolio-music.jpg';
import portfolio2 from '../../scss/assets/img/pro-img/portfolio-dictionary.jpg';
import portfolio3 from '../../scss/assets/img/pro-img/portfolio-note.jpg';
import portfolio4 from '../../scss/assets/img/pro-img/portfolio-phone.jpg';
import portfolio5 from '../../scss/assets/img/pro-img/portfolio-todo.jpg';
import portfolio6 from '../../scss/assets/img/pro-img/portfolio-angularPortfolio.png';
import portfolio7 from '../../scss/assets/img/pro-img/portfolio-reactPortfolio.png';

const data = [
    {
      id: 1,
      image: portfolio1,
      title: 'simple music app in andorid (java)',
      github: 'https://github.com/ehder/music-player-app',
      demo: ''
    },
    {
      id: 2,
      image: portfolio2,
      title: 'simple dictionary app in andorid (java)',
      github: 'https://github.com/ehder/Dictionary',
      demo: ''
    },
    {
      id: 3,
      image: portfolio3,
      title: 'simple note app in andorid (java)',
      github: 'https://github.com/ehder/MyNote',
      demo: ''
    },
    {
      id: 4,
      image: portfolio4,
      title: 'simple phone app in andorid (java)',
      github: 'https://github.com/ehder/EPhone',
      demo: ''
    },
    {
      id: 5,
      image: portfolio5,
      title: 'simple todo app in andorid (java)',
      github: 'https://github.com/ehder/Todoister',
      demo: ''
    },
  
    {
      id: 6,
      image: portfolio6,
      title: 'simple portfolio website (angular)',
      github: 'https://github.com/ehder/ed-portfolio',
      demo: 'https://simple--portfolio-1.herokuapp.com'
    },
  
    {
      id: 7,
      image: portfolio7,
      title: 'simple portfolio website (React)',
      github: 'https://github.com/ehder/ed-portfolio',
      demo: 'https://react--portfolio--0.herokuapp.com'
    },
  ]

const PortFolio = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio__portfo'>
          <h2 className='gold-color'>portfolio</h2>
       </div> 

      <div className="project">
          
        {
            data.map( ({id, image, title, github, demo}) => {
                return (
                    <div id={id} className="project__card-wrap">
                    <div className="project__card">
                        <div className="project__card--top">
                            <h5>{title}</h5>
                        </div>
                        <div className="project__card--mid">
                            <img src={image} alt="photo" />
                        </div>
                        <div className="project__card--bottom">
                              <div className="project__btn">
                                  <a href={github} className='project__btn--left gold-color' target='_blank'>GitHub</a>
                                  { demo !== '' ?  <a href={demo} className='project__btn--left gold-color' target='_blank'>Demo</a> : ""}
                              </div>
                        </div>
                    </div>
                </div>
                )
            } )
        }

      </div>


    </div>
  )
}

export default PortFolio