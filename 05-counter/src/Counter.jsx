/*
 * Use: 05-counter folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. Counter.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

const buttonStyle = {
  padding: '8px 16px', margin: '5px', cursor: 'pointer',
  backgroundColor: '#1769aa', color: 'white', border: 'none', borderRadius: '4px',
}

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '30px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '36px' }} aria-live="polite">{count}</p>
      <button style={buttonStyle} onClick={() => setCount((value) => value - 1)}>- Decrement</button>
      <button style={{ ...buttonStyle, backgroundColor: '#b91c1c' }} onClick={() => setCount(0)}>Reset</button>
      <button style={{ ...buttonStyle, backgroundColor: '#15803d' }} onClick={() => setCount((value) => value + 1)}>+ Increment</button>
    </div>
  )
}
