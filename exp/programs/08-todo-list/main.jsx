/*
 * INDEPENDENT PROJECT ENTRY - use karne ke steps
 * 1. Isi folder mein terminal kholo, jahan yeh main.jsx aur package.json hain.
 * 2. npm install chalao, phir npm run dev; browser mein Vite ka Local URL kholo.
 * 3. Program edit karna ho to isi folder ki App.jsx edit karke save karo.
 * 4. Is file, App.jsx, index.html, index.css aur configs ko isi folder mein rakho.
 * React StrictMode development mein lifecycle logs repeat kar sakta hai.
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
