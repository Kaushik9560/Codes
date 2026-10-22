/*
 * Use: 08-todo-list folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. TodoList.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

const buttonStyle = { padding: '8px 12px', cursor: 'pointer' }

export default function TodoList() {
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
