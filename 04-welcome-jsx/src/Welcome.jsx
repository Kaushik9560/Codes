/*
 * Use: 04-welcome-jsx folder mein terminal kholo.
 * 1. npm install, phir npm run dev chalao; Local URL browser mein kholo.
 * 2. Welcome.jsx edit karke save karo; App.jsx is component ko render karti hai.
 */
function Welcome() {
  return (
    <div className="container">
      <h1>Welcome to My First React App!</h1>
      <p>This message is rendered using JSX.</p>
    </div>
  )
}

export default Welcome
