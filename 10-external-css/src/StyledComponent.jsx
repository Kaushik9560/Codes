/*
 * Use: 10-external-css folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. StyledComponent.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'
import './StyledComponent.css'

function StyledComponent() {
  const [message, setMessage] = useState('')

  function showMessage() {
    setMessage('Great! You are learning React!')
  }

  return (
    <div className="page">
      <div className="card">
        <h1>React Styling</h1>
        <p>This component is styled using an external CSS file.</p>

        <div className="info-box">
          <h2>External CSS</h2>
          <p>The styles are written in StyledComponent.css.</p>
        </div>

        <button onClick={showMessage}>Learn React</button>
        <p className="message" role="status">{message}</p>
      </div>
    </div>
  )
}

export default StyledComponent
