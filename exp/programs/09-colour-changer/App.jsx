/*
 * PROGRAM 9 - Dynamic colour changer
 *
 * USE KARNE KE STEPS (React + Vite, JavaScript):
 * 1. Agar React project pehle se hai to step 2 par jao. Naya project banana ho to:
 *    npm create vite@latest my-react-lab -- --template react
 *    cd my-react-lab
 * 2. VS Code mein apna React project kholo. Terminal us folder mein kholo jahan
 *    package.json hai, phir dependencies install karo: npm install
 * 3. Is poori file ka code copy karo. Apne src/App.jsx ka purana code hata kar
 *    paste karo aur save karo. src/main.jsx ko rehne do; wahi <App /> render karega.
 * 4. Is program ke liye koi extra component file, CSS file ya package nahi chahiye.
 *    Styles isi file mein hain. Purane src/index.css ke starter styles output
 *    ko badal rahe hon to unhe clear karke save karo.
 * 5. Terminal mein npm run dev chalao. Vite jo Local URL de use browser mein kholo.
 *    Agar server pehle se chal raha hai to sirf file save karo; output update ho jayega.
 * 6. Output check karo:
 *    - Browser mein Purple, Blue, Green, Orange, Red aur Pink buttons dikhenge.
 *    - Kisi colour button ko dabao: background aur current colour code badal jayega.
 *    - Page refresh karne par default purple colour wapas aa jayega.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 9 chuno.
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

export default function App() {
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
