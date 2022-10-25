import React from 'react'

const Quotes = () => {
  return (
    <div className='quotes-section'>
      <div className="card-container">

          <div className="card">
              <div className="card__side card__side--front card__side--front-1">
                  <div className="card__side--front__text">
                      <span>
                        The future depends on what we do in the present.
                      </span>
                  </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                  <span>My life is my message</span>
              </div>
          </div>

          <div className="card">
              <div className="card__side card__side--front card__side--front-2">
                  <div className="card__side--front__text">
                      <span>
                        Push yourself, because no one else is going to do it for you
                      </span>
                  </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                  <div className="card__side--back__text">
                    <span>However difficult life may seem, there is always something you can do and success at</span>
                  </div>
              </div>
          </div>

          <div className="card">
              <div className="card__side card__side--front card__side--front-3">
                  <div className="card__side--back__text">
                      <span>
                        Live as if you were to die tommrrow. Learn as if you were to live forever
                      </span>
                  </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                  <div className="card__side--back__text">
                      <span>
                        if you cannot do great things, do small things in a great way
                      </span>
                  </div>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Quotes