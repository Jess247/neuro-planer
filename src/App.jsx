import './App.css'
import ProgressBar from './components/ProgressBar'
import Task from './components/Task'


function App() {
  const totalTasks = 10
  const completed = 7
  const progress = completed / totalTasks * 100

  return (
    <div className="text-center w-11/12 mx-auto mt-8">
      <h1 className="text-2xl">Task 1</h1>
      <ProgressBar progress={progress}/>
      <Task/>
      <Task/>
    </div>
  )
}

export default App
