import React from 'react'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import './contact.css'
import data from './data.js'

const Contact = () => {
  return (
    <>
      <MobileTopNav/>

      <div className="contact">
        <div className="contact__for-messages">
            <div className="contact__for-messages__header">
                Contact us
            </div>
            <div className="contact__for-messages__bg"></div>
            <form action="" className="contact__for-messages__form">
                <p>asdfasdfasdf</p>
                <input type="text" className="contact__for-messages__form__email" />
                <input type="text" className="contact__for-messages__form__subject" />
                <textarea name="" id="" cols="30" rows="10" className="contact__form__message"></textarea>
                <div className="contact__for-messages__form__descr"></div>
                <button className="contact__for-messages__form__button">
                    Send
                </button>
            </form>
        </div>

        <div className="contact__addresses">
            <div className="contact__addresses__header">
                Addresses
            </div>
            <ul className="contact__addresses__list">
                <li className="contact__addresses__list__element">
                    <div className="img"></div>
                    <div className="contact__addresses__list__text"></div>
                </li>
                <li className="contact__addresses__list__element">
                    <div className="img"></div>
                    <div className="contact__addresses__list__text"></div>
                </li>
                <li className="contact__addresses__list__element">
                    <div className="img"></div>
                    <div className="contact__addresses__list__text"></div>
                </li>
            </ul>
            <div className="contact__addresses__comment">
                <div className="quotermark">"</div>
                <div className="contact__addresses__comment__text">I’ve only used that Contact page to tell devs that they’re awesome!</div>
                <div className="contact__addresses__comment__email">mtthew@gmail.com</div>
            </div>
        </div>
      </div>

      <MobileBottomNav/>
    </>
  )
}

export default Contact