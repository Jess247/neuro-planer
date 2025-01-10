import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes ,Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import LayoutComponent from './components/layout/LayoutComponent'
import Timer from './components/Timer'
import Notes from './components/Notes'
import Done from './components/Done'
import Achievements from './components/Achievements'
import Task from './components/Task'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />} >
          <Route path="/" element={<App />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/done" element={<Done />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/:id" element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
