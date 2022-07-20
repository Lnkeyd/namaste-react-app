import React from 'react'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import Input from '../../components/input/Input'
import './tasks.css'

const Tasks = () => {
  return (
    <>
        <MobileTopNav/>

        <div className="tasks">
                <div className="tasks__header">
                    Contact us
                </div>
                <div className="tasks__bg"></div>
                <form action="" className="tasks__form">
                    <div className="tasks__form__header">Add Task</div>
                    <Input 
                        type='email' 
                        placeholder='Enter your awesome task!'
                        showSmiles={true}
                        className="tasks__form__input"
                    />
                    <div className="tasks__form__wrapper">
                        <button className="tasks__form__wrapper__info">
                            <i className="fa-solid fa-info fa-lg"></i>
                        </button>
                        <button className="tasks__form__wrapper__add">
                            add item
                        </button>
                    </div>
                </form>
                <div className="tasks__items">
                    {
                        
                    }
                </div>
                <div className="tasks__remove-all">
                    <p className='tasks__remove-all__text'>Click here to remove all tasks:</p>
                    <button className='tasks__remove-all__btn'>remove all</button>
                </div>
        </div>

        <MobileBottomNav/>
    </>
  )
}

export default Tasks