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

function App() {
  const [showComponent, setShowComponent] = useState(true)

  function toggleComponent() {
    setShowComponent(!showComponent)
  }

  return (
    <div className="container">
      <h1>React Lifecycle Visualizer</h1>
      <p>Open browser developer tools and select Console to see the messages.</p>

      <button onClick={toggleComponent}>
        {showComponent ? 'Destroy / Unmount Component' : 'Mount / Create Component'}
      </button>

      {showComponent && <LifecycleDemo />}
    </div>
  )
}

export default App
