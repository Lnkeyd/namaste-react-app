import React from 'react'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import './contact.css'
import data from './data.js'
import Input from '../../components/input/Input'

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
                <Input 
                    type='email' 
                    placeholder='Your email'
                    showSmiles={false}
                    className="contact__for-messages__form__email"
                />
                <Input 
                    type='text' 
                    placeholder='Subject'
                    showSmiles={false}
                    className="contact__for-messages__form__subject"
                />
                <textarea 
                    name="" 
                    className="contact__for-messages__form__message"
                    placeholder='Message'></textarea>
                <div className="contact__for-messages__form__descr">
                    *We do not share your data with 3rd persons
                </div>
                <button type='button' className="contact__for-messages__form__button">
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