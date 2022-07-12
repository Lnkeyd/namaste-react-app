import React from 'react'
import './mobileTopNav.css'
import { Link } from 'react-router-dom'

const mobileTopNav = () => {
  return (
    <div className="mobileTopNav">
      <Link to='/' className="mobileTopNav__logo">
        Namasté
      </Link>
      <div className="mobileTopNav__wrapper">
        <Link to='/faq' className="mobileTopNav__wrapper__faq">FAQ</Link>
        <Link to='/contact' className="mobileTopNav__wrapper__contact">Contact</Link>
      </div>
    </div>
  )
}

export default mobileTopNav