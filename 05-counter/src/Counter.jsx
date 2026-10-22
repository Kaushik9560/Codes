/*
 * Use: 05-counter folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. Counter.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

function Counter() {
  // count ki starting value 0 hai.
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2 aria-live="polite">{count}</h2>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+ Increment</button>
    </div>
  )
}

export default Counter
