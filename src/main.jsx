import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes ,Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import LayoutComponent from './components/layout/LayoutComponent'
import Timer from './components/Timer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />} >
          <Route path="/" element={<App />} />
          <Route path="/timer" element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
