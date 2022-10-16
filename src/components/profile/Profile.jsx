import React from 'react'
import me from '../../scss/assets/img/me.png';
import p3 from '../../scss/assets/img/p3.jpg';

const Profile = () => {
  return (
    <div className='profile'>
      

      <div className="lefttop">
          <div className="lefttop__clip">
            <div className="lefttop__cardwrap">
                  <div className="lefttop__card">
                      <h2 className='lefttop__text'>
                        Hello, 
                        I am Saw Eh Dar Ler <br />
                        Web Developer
                      </h2>
                  </div>
            </div>
          </div>
        </div>
       
        <div className="bgdesign">
          <div className="bgdesign__clip">
            <div className="bgdesign__cardwrap">
                <div className="bgdesign__card">
                  <img className='bgdesign__img' src={me} alt="" />
                </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Profile