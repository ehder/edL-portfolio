import React from 'react'
import {FaJava} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {IoLogoAngular} from 'react-icons/io'
import {SiSpringboot} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {AiFillAndroid} from 'react-icons/ai'

const Exprience = () => {

  const frontData = [
    {
      id: 1,
      name: "HTML",
      icon: <AiOutlineHtml5/>,
      level: "Intermediate",
    },
    {
      id: 2,
      name: "CSS",
      icon: <DiCss3/>,
      level: "Intermediate",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <IoLogoJavascript/>,
      level: "beginner",
    },
    {
      id: 4,
      name: "Bootstrap",
      icon: <SiBootstrap/>,
      level: "Intermediate",
    },
    {
      id: 5,
      name: "React",
      icon: <DiReact/>,
      level: "Intermediate",
    },
    {
      id: 6,
      name: "Angular",
      icon: <IoLogoAngular/>,
      level: "beginner",
    },
  ]

  const backData = [
    {
      id: 1,
      name: "Java",
      icon: <FaJava/>,
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Spring",
      icon: <SiSpring/>,
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Springboot",
      icon: <SiSpringboot/>,
      level: "Intermediate",
    },
    {
      id: 4,
      name: "javaEE",
      icon: <FaJava/>,
      level: "Intermediate",
    },
    {
      id: 5,
      name: "MySQL",
      icon: <SiMysql/>,
      level: "beginner",
    },
    {
      id: 6,
      name: "Postgresql",
      icon: <SiPostgresql/>,
      level: "beginner",
    },
  ]

  return (
    <div className='exprience'>

      <div className='exprience__exp'>
          <h2 className='gold-color'>Exprience</h2>
      </div>  

      <div className="exp">
          <div className='exp__title'><h3 className='gold-color'>Front End</h3></div>
          <div className="exp__contact">
            {
              frontData.map( ({id, name, icon, level})=> {
                return (
                  <article id={id} className="exp__details">
                    <div className='exp__icon'>{icon}</div>
                    <div className="exp__detail">
                      <h4 className='gold-color'>{name}</h4>
                      <small>{level}</small>
                    </div>
                 </article>
                )
              })
            }
          </div>
      </div>

      <div className="exp">
          <div className='exp__title'><h3 className='gold-color'>Back End</h3></div>
          <div className="exp__contact">

          {
              backData.map( ({id, name, icon, level})=> {
                return (
                  <article id={id} className="exp__details">
                    <div className='exp__icon'>{icon}</div>
                    <div className="exp__detail">
                      <h4 className='gold-color'>{name}</h4>
                      <small>{level}</small>
                    </div>
                 </article>
                )
              })
            }

          </div>
      </div>
    </div>
  )
}

export default Exprience