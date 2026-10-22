/*
 * React entry: is file ko src/main.jsx par rakho.
 * 1. Project folder (package.json wali location) se npm install chalao.
 * 2. npm run dev chalao aur terminal ka Local URL kholo.
 * 3. UI edit karne ke liye App.jsx aur uski component file kholo.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
