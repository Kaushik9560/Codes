/*
 * Use: 07-component-lifecycle folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. LifecycleDemo.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { Component } from 'react'

class LifecycleDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('constructor() - Component is created')
  }

  componentDidMount() {
    console.log('componentDidMount() - Component is shown')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() - Count changed:', this.state.count)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() - Component is removed')
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('render() - Displaying the component')

    return (
      <div className="child-box">
        <h2>Child Component</h2>
        <p aria-live="polite">Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Click to Update State</button>
      </div>
    )
  }
}

export default LifecycleDemo
