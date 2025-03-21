import ProgressBar from './ProgressBar'
import ToDo from './ToDo'
import { FaPlus } from "react-icons/fa"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocation, useParams } from 'react-router'



function Task() {


  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const totalTasks = todoList.length
  const completed = todoList.filter(item => item?.isChecked === true).length
  const progress = completed / totalTasks * 100
  const {id} = useParams()
  const location = useLocation()
  const title = location.state?.title || `${+id + 1}`

  const handleChange = () => {
    const toDoEl = document.getElementById('to-do-textfield')
    setTodo(toDoEl.value)
  }
  const handleEnter = () => {
    const toDoEl = document.getElementById('to-do-textfield')
    if (todo !== "") { 
      setTodoList(prevTodoList => [
        { name: todo, isChecked: false, id:uuidv4() },
        ...prevTodoList,
      ])
    }
    toDoEl.value = ""
  }
  

  return (
    <main className="text-center w-11/12 mx-auto mt-8">
      <h1 className="text-2xl inline align-middle">{title}</h1>
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
      {todoList.length > 0 && todoList.map(task => 
        <ToDo 
          key={task.id} 
          name={task?.name} 
          isChecked={task?.isChecked} 
          task={task}
          setTodoList={setTodoList} 
          id={task.id} 
        />)}
    </main>
  )
}

export default Task
