import './App.css'
import ProgressBar from './components/ProgressBar'


function App() {
  const totalTasks = 10
  const completed = 7
  const progress = completed / totalTasks * 100

  return (
    <div className="text-center w-11/12 mx-auto mt-8">
      <h1 className="text-2xl">Task 1</h1>
      <ProgressBar progress={progress}/>
    </div>
  )
}

export default App
