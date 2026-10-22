/*
 * Use: 06-login-logout folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. LoginLogout.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

export default function LoginLogout() {
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
