/*
 * PROGRAM 7 - Class component lifecycle methods
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
 *    - Browser developer tools kholo (F12 ya right-click > Inspect), phir Console tab kholo.
 *    - Page load par constructor(), render() aur componentDidMount() ke logs dekho.
 *    - "Click to Update State" dabao: count badhega aur componentDidUpdate() log aayega.
 *    - "Destroy / Unmount Component" dabao: child hatega aur componentWillUnmount() log aayega.
 *    - "Mount / Create Component" dabao: child dobara banega aur count 0 se start hoga.
 *    - Development mein React StrictMode ki wajah se kuch lifecycle logs repeat ho sakte hain.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 7 chuno.
 */

import { Component, useState } from 'react'

class LifecycleDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('MOUNTING: constructor() - Component is created')
  }

  componentDidMount() {
    console.log('MOUNTING: componentDidMount() - Component is visible')
  }

  componentDidUpdate() {
    console.log('UPDATING: componentDidUpdate() - New count:', this.state.count)
  }

  componentWillUnmount() {
    console.log('UNMOUNTING: componentWillUnmount() - Component removed')
  }

  increment = () => {
    this.setState((previous) => ({ count: previous.count + 1 }))
  }

  render() {
    console.log('render() - Rendering UI')
    return (
      <div style={{ border: '2px solid #2563eb', padding: '15px', margin: '15px 0', borderRadius: '8px' }}>
        <h2>Child Component (Lifecycle Counter)</h2>
        <p aria-live="polite">Count: <strong>{this.state.count}</strong></p>
        <button onClick={this.increment}>Click to Update State</button>
      </div>
    )
  }
}

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
