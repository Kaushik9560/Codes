/*
 * REACT ENTRY FILE - App ko browser mein render karti hai
 * 1. Is file ko src/main.jsx par rakho; index.html isi entry file ko load karta hai.
 * 2. Kisi lab program ko chalane ke liye uska code src/App.jsx mein paste karo.
 * 3. Program ka code is main.jsx mein paste mat karo; App import/render rehne do.
 * 4. Project folder se npm install aur npm run dev chalao; Vite ka URL kholo.
 * StrictMode development mein lifecycle logs repeat kar sakta hai.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
