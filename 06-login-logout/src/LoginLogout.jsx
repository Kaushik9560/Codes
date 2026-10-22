/*
 * Use: 06-login-logout folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. LoginLogout.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function toggleLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }

  let message = 'Please log in.'
  let buttonText = 'Login'

  // Login hone par message aur button ka text badal do.
  if (isLoggedIn) {
    message = 'Welcome! You are logged in.'
    buttonText = 'Logout'
  }

  return (
    <div className="container">
      <h1>Conditional Rendering Example</h1>
      <h2 aria-live="polite">{message}</h2>
      <button onClick={toggleLogin}>{buttonText}</button>
    </div>
  )
}

export default LoginLogout
