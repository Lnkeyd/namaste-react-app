import React from 'react'
import './task.css'
import { useContext } from 'react'
import { Context } from '../../context'

const Task = ({id, name}) => {

    const { deleteTask } = useContext(Context)

  return (
    <div className="task">
        <div className="task__title">
            <div className="task__title__marker"></div>
            <div className="task__title__text">{name}</div>
        </div>
        <div className="underline"></div>
        <div className="task__wrapper">
            <button className="task__wrapper__done">
                <i className="fa-solid fa-check fa-lg"></i>
            </button>
            <button onClick={() => deleteTask(id)} className="task__wrapper__delete">
                <i className="fa-solid fa-trash fa-lg"></i>
            </button>
        </div>
    </div>
  )
}

export default Task