/*
 * PROGRAM 6 - Conditional rendering: login/logout
 *
 * DIRECT CLONE KARKAR RUN KARO (copy-paste ki zarurat nahi):
 * 1. Terminal mein repo clone karo:
 *    git clone https://github.com/Kaushik9560/Codes.git
 * 2. Project folder mein jao: cd Codes/exp/programs/06-login-logout
 * 3. Dependencies install karo: npm install
 * 4. Project chalao: npm run dev; Vite ka Local URL browser mein kholo.
 * 5. Program change karna ho to isi folder ki App.jsx edit karo.
 * 6. Yeh poora folder independent hai. Baaki program folders delete kar sakte ho,
 *    ya sirf is folder ko kisi doosri location par copy/move karke chala sakte ho.
 *    Is folder ke andar ki project files saath rakho.
 * Agar terminal pehle se isi project folder mein hai, seedha step 3 se shuru karo.
 *
 * APNE EXISTING REACT PROJECT MEIN COPY KARNE KE STEPS:
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
 *    - Shuru mein "Please log in." message aur "Login" button dikhega.
 *    - Login dabao: welcome message dikhega. Logout dabao: pehla message wapas aayega.
 *    - Yeh state aur conditional rendering ka demo hai; account/password ki zarurat nahi.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 6 chuno.
 */

import { useState } from 'react'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div style={{ textAlign: 'center', padding: '30px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Conditional Rendering Example</h1>
      <h2 aria-live="polite">
        {isLoggedIn ? 'Welcome! You are logged in.' : 'Please log in.'}
      </h2>
      <button
        style={{ padding: '10px 20px', cursor: 'pointer' }}
        onClick={() => setIsLoggedIn((value) => !value)}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}
