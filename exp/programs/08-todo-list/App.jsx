/*
 * PROGRAM 8 - TODO list
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
 *    - Input mein task likho; "Add" dabao ya Enter press karo.
 *    - Khali ya sirf spaces wala task add nahi hoga.
 *    - "Done" dabao: task complete hoga. "Delete" dabao: task list se hat jayega.
 *    - Tasks sirf memory mein hain; page refresh karne par list khali ho jayegi.
 *
 * Isi collection mein preview: exp folder se npm run dev chalao aur program 8 chuno.
 */

import { useState } from 'react'

const buttonStyle = { padding: '8px 12px', cursor: 'pointer' }

export default function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  function addTodo(event) {
    event.preventDefault()
    const text = task.trim()
    if (!text) return

    const newTodo = { id: crypto.randomUUID(), text, completed: false }
    setTodos((previous) => [...previous, newTodo])
    setTask('')
  }

  function completeTodo(id) {
    setTodos((previous) => previous.map((todo) => (
      todo.id === id ? { ...todo, completed: true } : todo
    )))
  }

  function deleteTodo(id) {
    setTodos((previous) => previous.filter((todo) => todo.id !== id))
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>TODO LIST</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="task">New task</label>
        <div style={{ display: 'flex', gap: '8px', margin: '10px 0 20px' }}>
          <input
            id="task"
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
            style={{ flex: 1, minWidth: 0, padding: '10px' }}
          />
          <button type="submit" style={buttonStyle}>Add</button>
        </div>
      </form>
      {todos.length === 0 && <p>No tasks yet. Add your first task! 🎯</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', marginBottom: '10px' }}>
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none', overflowWrap: 'anywhere' }}>
              {todo.completed ? '✓' : '○'} {todo.text}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={buttonStyle} onClick={() => completeTodo(todo.id)} disabled={todo.completed}>
                {todo.completed ? 'Done ✓' : 'Done'}
              </button>
              <button style={buttonStyle} onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
