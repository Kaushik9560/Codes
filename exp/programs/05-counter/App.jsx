/*
 * PROGRAM 5 - Counter using useState
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
 *    - Browser mein count 0 se start hoga.
 *    - "+ Increment" se count badhao, "- Decrement" se ghatao aur "Reset" se 0 karo.
 *    - Page refresh karne par count dobara 0 ho jayega.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 5 chuno.
 */

import { useState } from 'react'

const buttonStyle = {
  padding: '8px 16px', margin: '5px', cursor: 'pointer',
  backgroundColor: '#1769aa', color: 'white', border: 'none', borderRadius: '4px',
}

export default function App() {
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
