/*
 * Use: 10-external-css folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. StyledComponent.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'
import './StyledComponent.css'

export default function StyledComponent() {
  const [message, setMessage] = useState('')

  return (
    <div className="styling-page">
      <div className="styling-card">
        <h1>React Styling</h1>
        <p className="styling-description">This component is styled using an external CSS file.</p>
        <div className="styling-info-box">
          <h2>External CSS</h2>
          <p>The styles for this React component are written in a separate CSS file.</p>
        </div>
        <button className="styling-learn-btn" onClick={() => setMessage('🎉 Great! You are learning React!')}>
          Learn React
        </button>
        {message && <p className="styling-success-message" role="status">{message}</p>}
      </div>
    </div>
  )
}
