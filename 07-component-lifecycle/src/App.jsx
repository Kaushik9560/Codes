/*
 * Component lifecycle methods - run karne ke steps:
 * 1. git clone https://github.com/Kaushik9560/Codes.git
 * 2. cd Codes/07-component-lifecycle
 * 3. npm install
 * 4. npm run dev; terminal ka Local URL browser mein kholo.
 * Program ka component isi src folder mein hai. Output steps README.md mein hain.
 */
import { useState } from 'react'
import LifecycleDemo from './LifecycleDemo.jsx'

export default function App() {
  const [showComponent, setShowComponent] = useState(true)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Lifecycle Visualizer</h1>
      <p>Open your browser developer tools → Console to see lifecycle messages.</p>
      <button onClick={() => setShowComponent((value) => !value)}>
        {showComponent ? 'Destroy / Unmount Component' : 'Mount / Create Component'}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  )
}
