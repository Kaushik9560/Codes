/*
 * Use: 09-colour-changer folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. ColorChanger.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState('#667eea')

  return (
    <div className="color-page" style={{ backgroundColor: color }}>
      <div className="container">
        <h1>Dynamic Colour Changer</h1>
        <p aria-live="polite">Current Colour: {color}</p>
        <h2>Choose a Colour</h2>

        <button onClick={() => setColor('#667eea')}>Purple</button>
        <button onClick={() => setColor('#3498db')}>Blue</button>
        <button onClick={() => setColor('#2ecc71')}>Green</button>
        <button onClick={() => setColor('#f39c12')}>Orange</button>
        <button onClick={() => setColor('#e74c3c')}>Red</button>
        <button onClick={() => setColor('#e84393')}>Pink</button>
      </div>
    </div>
  )
}

export default ColorChanger
