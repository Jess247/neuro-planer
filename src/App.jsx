import './App.css'
import ProgressBar from './components/ProgressBar'
import Task from './components/Task'
import { FaPlus } from "react-icons/fa";


function App() {
  const totalTasks = 10
  const completed = 7
  const progress = completed / totalTasks * 100

  const handleClick = () => {
    
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
          placeholder="Drink one bottle of water..."
          className="p-2 border-b font-thin text-sm w-11/12 flex ml-[4%] rounded-full shadow focus-visible:outline-1 focus-visible:outline focus-visible:outline-[#F76C5E]"  
          />
      <Task/>
    </div>
  )
}

export default App
