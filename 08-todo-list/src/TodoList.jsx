/*
 * Use: 08-todo-list folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. TodoList.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
import { useState } from 'react'

function TodoList() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(1)

  function handleInput(event) {
    setTask(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()

    if (task.trim() === '') {
      return
    }

    const newTodo = {
      id: nextId,
      text: task.trim(),
      completed: false,
    }

    // concat purani list ko badle bina ek nayi list banata hai.
    const newTodos = todos.concat(newTodo)
    setTodos(newTodos)
    setNextId(nextId + 1)
    setTask('')
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          completed: true,
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  function deleteTodo(id) {
    // Sirf woh tasks rakho jinki id delete wali id se alag hai.
    const remainingTodos = todos.filter(function (todo) {
      return todo.id !== id
    })

    setTodos(remainingTodos)
  }

  return (
    <div className="container">
      <h1>TODO LIST</h1>

      <form onSubmit={addTodo}>
        <label htmlFor="task">New task</label>
        <input id="task" value={task} onChange={handleInput} placeholder="Enter a task..." />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 && <p>No tasks yet. Add your first task!</p>}

      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              {todo.completed ? <del>{todo.text}</del> : <span>{todo.text}</span>}
              <button onClick={() => completeTodo(todo.id)} disabled={todo.completed}>
                {todo.completed ? 'Done ✓' : 'Done'}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
