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
                    <i className="fa-solid fa-location-dot fa-lg"></i>
                    <div className="contact__addresses__list__element__text">1257 Lunetta Street, TX 706301</div>
                </li>
                <li className="contact__addresses__list__element">
                    <i className="fa-solid fa-phone fa-lg"></i>
                    <div className="contact__addresses__list__element__text">+1 (401) 576-48-21</div>
                </li>
                <li className="contact__addresses__list__element">
                    <i className="fa-solid fa-envelope fa-lg"></i>
                    <div className="contact__addresses__list__element__text">info@namastefordev.com</div>
                </li>
            </ul>
            <div className="contact__addresses__comment">
                <i className="fa-solid fa-quote-right fa-lg quotermark"></i>
                <div className="contact__addresses__comment__wrap">
                    <div className="contact__addresses__comment__wrap__text">I’ve only used that Contact page to tell devs that they’re awesome!</div>
                    <div className="contact__addresses__comment__wrap__email">mtthew@gmail.com</div>
                </div>
            </div>
        </div>
      </div>

      <MobileBottomNav/>
    </>
  )
}

export default Contact