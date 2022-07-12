import React from 'react'
import './mobileBottomNav.css'
import { Link } from 'react-router-dom'

const MobileBottomNav = () => {
  return (
    <div className="mobileBottomNav">
      <div className="mobileBottomNav__wrapper">
        <Link to='/meditations' className="mobileBottomNav__wrapper__item">
        <div className="mobileBottomNav__wrapper__item__icon">
            <i className="fa-solid fa-hands-holding-circle fa-lg"></i>
          </div>
          <div className="mobileBottomNav__wrapper__item__title">Meditations</div>
        </Link>
        <Link to='/habits' className="mobileBottomNav__wrapper__item">
        <div className="mobileBottomNav__wrapper__item__icon">
            <i className="fa-solid fa-calendar-check fa-lg "></i>
          </div>
          <div className="mobileBottomNav__wrapper__item__title">Habits</div>
        </Link>
        <Link to='/habits' className="mobileBottomNav__wrapper__item">
        <div className="mobileBottomNav__wrapper__item__icon">
            <i className="fa-solid fa-list-check fa-lg"></i>
          </div>
          <div className="mobileBottomNav__wrapper__item__title">Tasks</div>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNav