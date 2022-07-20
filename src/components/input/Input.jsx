import React from 'react'
import { useState, useRef, useContext } from 'react'
import { Context } from '../../context';
import Picker from 'emoji-picker-react';
import './input.css'
import { useEffect } from 'react';

function Input({type, placeholder, showSmiles}) {

    const {handleInput, setIsTaskAdded, isTaskAdded} = useContext(Context)
    const searchInput = useRef(null)
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [inputStr, setInputStr] = useState('')
    const [showEmoji, setShowEmoji] = useState(false)

    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji)
        setChosenEmoji(emojiObject)
        handleFocus()
    };

  function handleFocus(){
    searchInput.current.focus()
  }

  useEffect(() => {
    if (isTaskAdded) {
        setInputStr('')
        setIsTaskAdded(false)
    }
    handleInput(inputStr)
    }, [inputStr, isTaskAdded])


  return (
    <div className='wrapper'>
        <input className='input'
            ref={searchInput}
            type={type} 
            placeholder={placeholder}
            value={inputStr}
            onChange={e => setInputStr(e.target.value)}
        /> 
        {
            showEmoji &&
            <Picker onEmojiClick={onEmojiClick} />
        }
        {

            showSmiles &&
            <div className="smile" onClick={() => setShowEmoji(!showEmoji)}>
                <i className="fa-regular fa-face-smile fa-lg"></i>
            </div>
        }
    </div>
  )
}

export default Input