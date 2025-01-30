import './App.css'
import Home from './components/Home'
import { useState } from 'react'



function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'])

  return (
    // TO DO: use context to pass task to all components
    <Home tasks={tasks}/>
  )
}

export default App
