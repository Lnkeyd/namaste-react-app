import React from 'react'
import { useState } from 'react'
import './singleQuestion.css'

const SingleQuestion = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="singleQuestion" onClick={() => setShowInfo(!showInfo)}>
        <div className="singleQuestion__wrap">
            <h3 className="singleQuestion__wrap__header">
               {title}
            </h3>
            <div className="singleQuestion__wrap__icon">
                {showInfo ? <i className="fa-solid fa-angle-up fa-lg"></i> : <i className="fa-solid fa-angle-down fa-lg"></i>}
            </div>
        </div>
            {showInfo && <p className="singleQuestion__text">{info}</p>}
    </div>
  )
}

export default SingleQuestion