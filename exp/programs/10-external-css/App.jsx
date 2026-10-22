/*
 * PROGRAM 10 - Styling using an external CSS file
 *
 * USE KARNE KE STEPS (React + Vite, JavaScript):
 * 1. Agar React project pehle se hai to step 2 par jao. Naya project banana ho to:
 *    npm create vite@latest my-react-lab -- --template react
 *    cd my-react-lab
 * 2. VS Code mein apna React project kholo. Terminal us folder mein kholo jahan
 *    package.json hai, phir dependencies install karo: npm install
 * 3. Is poori file ka code copy karo. Apne src/App.jsx ka purana code hata kar
 *    paste karo aur save karo. src/main.jsx ko rehne do; wahi <App /> render karega.
 * 4. Isi program folder se StyledComponent.css ka poora code bhi copy karo.
 *    Apne project mein src/StyledComponent.css banao aur usmein CSS paste karo.
 *    Neeche import './StyledComponent.css' rehne do; dono files ek folder mein hon.
 * 5. Terminal mein npm run dev chalao. Vite jo Local URL de use browser mein kholo.
 *    Agar server pehle se chal raha hai to sirf file save karo; output update ho jayega.
 * 6. Output check karo:
 *    - Browser mein coloured background aur styled white card dikhega.
 *    - "Learn React" dabao: learning message dikhega.
 *    - CSS apply na ho to file ka naam aur location check karo: src/StyledComponent.css.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 10 chuno.
 */

import { useState } from 'react'
import './StyledComponent.css'

function StyledComponent() {
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

export default function App() {
  return <StyledComponent />
}
