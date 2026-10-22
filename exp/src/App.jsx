/*
 * REACT LAB COLLECTION - Sabhi programs ka preview
 * 1. Poora exp folder download/open karo; programs/ aur src/ dono saath rakho.
 * 2. Terminal mein exp folder par jao: cd exp (agar pehle se exp mein ho to skip karo).
 * 3. Dependencies install karo: npm install
 * 4. Development server chalao: npm run dev
 * 5. Vite ka Local URL browser mein kholo; dropdown se program 4-10 select karo.
 * 6. Ek program apne project mein use karna ho to programs/<program-folder>/App.jsx
 *    kholo aur uske upar diye copy-paste steps follow karo.
 * Yeh collection launcher sibling programs/ folder ko import karta hai.
 * Individual copy-paste ke liye programs/ wali App.jsx use karo.
 */

import { useState } from 'react'
import Welcome from '../programs/04-welcome-jsx/App.jsx'
import Counter from '../programs/05-counter/App.jsx'
import LoginLogout from '../programs/06-login-logout/App.jsx'
import Lifecycle from '../programs/07-component-lifecycle/App.jsx'
import TodoList from '../programs/08-todo-list/App.jsx'
import ColorChanger from '../programs/09-colour-changer/App.jsx'
import ExternalCss from '../programs/10-external-css/App.jsx'
import './App.css'

const programs = [
  { number: 4, title: 'Welcome message using JSX', folder: '04-welcome-jsx', Component: Welcome },
  { number: 5, title: 'Counter', folder: '05-counter', Component: Counter },
  { number: 6, title: 'Conditional rendering: login/logout', folder: '06-login-logout', Component: LoginLogout },
  { number: 7, title: 'Component lifecycle methods', folder: '07-component-lifecycle', Component: Lifecycle },
  { number: 8, title: 'TODO list', folder: '08-todo-list', Component: TodoList },
  { number: 9, title: 'Dynamic colour changer', folder: '09-colour-changer', Component: ColorChanger },
  { number: 10, title: 'External CSS styling', folder: '10-external-css', Component: ExternalCss },
]

export default function App() {
  const [selected, setSelected] = useState(4)
  const program = programs.find((item) => item.number === selected)
  const Demo = program.Component

  return (
    <>
      <header className="lab-header">
        <h1>V Semester BCA · React Lab</h1>
        <p>Programs 4–10 from the frontend lab manual.</p>
        <label htmlFor="program">Choose a program</label>
        <select id="program" value={selected} onChange={(event) => setSelected(Number(event.target.value))}>
          {programs.map((item) => (
            <option key={item.number} value={item.number}>{item.number}. {item.title}</option>
          ))}
        </select>
        <p>Copy <code>programs/{program.folder}/App.jsx</code> into your project’s <code>src/App.jsx</code>.</p>
        {selected === 10 && <p>Also copy <code>StyledComponent.css</code> into <code>src/</code>.</p>}
      </header>
      <main>
        <Demo key={selected} />
      </main>
    </>
  )
}
