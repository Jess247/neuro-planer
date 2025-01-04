import './App.css'
import ProgressBar from './components/ProgressBar'
import Task from './components/Task'
import { FaPlus } from "react-icons/fa";


function App() {
  const totalTasks = 10
  const completed = 7
  const progress = completed / totalTasks * 100

  return (
    <div className="text-center w-11/12 mx-auto mt-8">
        <h1 className="text-2xl inline align-middle">Task 1</h1>
        <FaPlus className="inline float-end" size={25}/>
      <ProgressBar progress={progress}/>
      <Task/>
    </div>
  )
}

export default App
