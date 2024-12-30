import './App.css'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Tabs from './components/Tabs'
function App() {

  return (
    <main className="flex items-start">
      <Sidebar/>
      <Tabs/>
    </main>
  )
}

export default App
