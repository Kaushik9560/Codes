/*
 * Use: 09-colour-changer folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. ColorChanger.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

const colors = [
  { name: 'Purple', value: '#667eea' },
  { name: 'Blue', value: '#3498db' },
  { name: 'Green', value: '#2ecc71' },
  { name: 'Orange', value: '#f39c12' },
  { name: 'Red', value: '#e74c3c' },
  { name: 'Pink', value: '#e84393' },
]

export default function ColorChanger() {
  const [color, setColor] = useState('#667eea')

  return (
    <div style={{ minHeight: '100vh', boxSizing: 'border-box', display: 'grid', placeItems: 'center', backgroundColor: color, padding: '24px', transition: 'background-color 0.5s ease', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '600px', boxSizing: 'border-box', padding: '30px', textAlign: 'center', backgroundColor: 'white', color: '#333', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.25)' }}>
        <h1>Dynamic Colour Changer</h1>
        <p aria-live="polite">Current Colour: <strong>{color}</strong></p>
        <h2>Choose a Colour</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
          {colors.map((item) => (
            <button
              key={item.value}
              onClick={() => setColor(item.value)}
              aria-pressed={color === item.value}
              style={{ padding: '12px 20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: item.value, color: '#111', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
