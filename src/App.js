import {ImCalendar} from 'react-icons/im'
import { useState } from 'react'
import data from './pages/tasks/data';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import { Context } from './Context';

function App() {

  //TODO: build different component for input-task and input-habit,
  //move all of this stuff below to spetial separated Context.Providers

    const [tasks, setTasks] = useState(data)
    const [isTaskAdded, setIsTaskAdded] = useState(false)
    const [input, setInput] = useState('')

    function handleInput(newInput) {
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
      <BrowserRouter>
        <Context.Provider value={
          {handleInput, deleteTask, isTaskAdded, setIsTaskAdded, addTask, tasks, removeAllTasks}}>
          <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route exact path='/faq' element={ <Faq/> } />
            <Route exact path='/contact' element={ <Contact/> } />
            <Route exact path='/tasks' element={ <Tasks/> } />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
  );
}

export default App;
