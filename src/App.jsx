import './App.css'
import Home from './components/Home'
import { useState, createContext } from 'react'

const TaskContext = createContext()

function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'])

  return (
    // TO DO: use context to pass task to all components
    <TaskContext.Provider value={{tasks}}>
      <Home tasks={tasks}/>
    </TaskContext.Provider>
  )
}

export {TaskContext}
export default App
