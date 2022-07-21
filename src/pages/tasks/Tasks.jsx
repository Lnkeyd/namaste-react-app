import React from 'react'
import { useState } from 'react'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import Input from '../../components/input/Input'
import Task from '../../components/task/Task'
import './tasks.css'
import data from './data'
import { Context } from '../../Context'
import { useContext } from 'react'

const Tasks = () => {

    const {handleInput, addTask, tasks, removeAllTasks} = useContext(Context)

  return (
    <>
        <MobileTopNav/>

        <div className="tasks">
                <div className="tasks__header">
                    Task List
                </div>
                <div className="tasks__bg"></div>
                <form action="" className="tasks__form">
                    <div className="tasks__form__header">Add Task</div>
                    <Input 
                        type='text' 
                        placeholder='Enter your awesome task!'
                        showSmiles={true}
                        onChange={handleInput}
                        className="tasks__form__input"
                    />
                    <div className="tasks__form__wrapper">
                        <button className="tasks__form__wrapper__info">
                            <i className="fa-solid fa-info fa-lg"></i>
                        </button>
                        <button onClick={(e) => addTask(e)} className="tasks__form__wrapper__add">
                            add item
                        </button>
                    </div>
                </form>
                <div className="tasks__items">
                    {
                        // tasks === [] ? (
                        //     <h3 style={{marginBottom:'30px'}}>No added tasks yet...</h3>
                        // ) :
                        tasks.map(task => (
                         <Task key={task.id} id={task.id} name={task.name}/>
                         ))
                    }
                </div>
                <div className="tasks__remove-all">
                    <p className='tasks__remove-all__text'>Click here to remove all tasks:</p>
                    <button onClick={(e) => removeAllTasks(e)} className='tasks__remove-all__btn'>remove all</button>
                </div>
        </div>

        <MobileBottomNav/>
    </>
  )
}

export default Tasks