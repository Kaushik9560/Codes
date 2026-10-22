/*
 * Use: 07-component-lifecycle folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. LifecycleDemo.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { Component } from 'react'

export default class LifecycleDemo extends Component {
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
