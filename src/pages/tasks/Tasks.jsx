import React from 'react'
import { useState, useEffect, useContext, useRef } from 'react'
import MobileBottomNav from '../../components/mobileBottomNav/MobileBottomNav'
import MobileTopNav from '../../components/mobileTopNav/MobileTopNav'
import Input from '../../components/input/Input'
import Task from '../../components/task/Task'
import './tasks.css'
import data from './data'
import { Context } from '../../context'

const Tasks = () => {
    
    const ref = useRef(null)
    const [isTaskAdded, setIsTaskAdded] = useState(false)
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState(data)

    function handleInput (newInput) {
        setInput(newInput)
    }

    function addTask(e) {
        e.preventDefault()
        const newItem = {
            id: Math.random() * 99,
            name: input
        }
        console.log(newItem)
        input && setTasks ([...tasks, newItem])
        setIsTaskAdded(true)
        console.log(isTaskAdded)
    }

    function completeTask() {
        
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(item => item.id != id)
        setTasks(newTasks)
    }

    function removeAllTasks(e) {
        e.preventDefault()
        setTasks([])
    }

  return (
    <Context.Provider value={
        {handleInput, deleteTask, isTaskAdded, setIsTaskAdded}
    }>
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
    </Context.Provider>
  )
}

export default Tasks