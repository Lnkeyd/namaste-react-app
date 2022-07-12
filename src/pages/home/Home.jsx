import React from 'react'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import './home.css'

const Home = () => {
  return (
    <>
      <MobileTopNav/>
      <div className="home">
        <h1 className="home__header">
          Meditation & focus
        </h1>
        <div className="home__img"></div>
        
        <div className="home__descr">
        Keep calm and explore your inner mind-power
        </div>
        <div className="home__form">
          <div className="home__form__text">
          Try our application, which was made to provide  you best tracking and meditation experience
          </div>
          <div className="home__form__btn">
          Try now
          </div>
        </div>
        <div className="home__palette">
          <div className="home__palette__item" id='color_1'></div>
          <div className="home__palette__item" id='color_2'></div>
          <div className="home__palette__item" id='color_3'></div>
          <div className="home__palette__item" id='color_4'></div>
        </div>
      </div>
      <MobileBottomNav/>
    </>
  )
}

export default Home