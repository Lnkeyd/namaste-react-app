import React from 'react'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import SingleQuestion from '../../components/singleQuestion/SingleQuestion'
import questions from './Questions'
import './faq.css'

const Faq = () => {
  return (
    <>
      <MobileTopNav/>
      <div className="faq">
        <h1 className="faq__header">Frequently Asked Questions:</h1>
        <div className="faq__questions">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </div>
        <div className="faq__img"></div>
      </div>
      <MobileBottomNav/>
    </>
  )
}

export default Faq