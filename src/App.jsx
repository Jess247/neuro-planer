import './App.css'
import ProgressBar from './components/ProgressBar'
import ToDo from './components/ToDo'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const toDoEl = document.getElementById('to-do-textfield')
  const totalTasks = 10
  const completed = 7
  const progress = completed / totalTasks * 100

  const handleChange = () => {
    setTodo(toDoEl.value)
  }
  const handleEnter = () => {
    setTodoList(prevTodoList => [...prevTodoList, todo])
    toDoEl.value = ""
  }

  return (
    <div className="text-center w-11/12 mx-auto mt-8">
      <h1 className="text-2xl inline align-middle">Task 1</h1>
      <FaPlus className="inline float-end" size={25}/>
      <ProgressBar progress={progress}/>
      <label htmlFor="textfield" className="opacity-0">To-do
      </label>
        <input 
          type="text" 
          id="to-do-textfield"
          placeholder="Drink one bottle of water..."
          onChange={handleChange}
          onKeyDown={e => e.key === 'Enter' && handleEnter()}
          className="p-2 border-b font-thin text-sm w-11/12 flex ml-[4%] mb-8 rounded-full shadow focus-visible:outline-1 focus-visible:outline focus-visible:outline-[#F76C5E]"  
          />
      {todoList.length > 0 && todoList.map((todo,index) => <ToDo key={index} name={todo} />)}
    </div>
  )
}

export default App
