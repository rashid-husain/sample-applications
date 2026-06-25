import { useState } from 'react'
import './App.css'
import Header from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <p className="firstName">Rufayda Khatoon</p>
          <p id="lastName">Shaista Khatoon</p>
          <h1>Nahida Khatoon</h1>
          <p>Count: {count}</p>
          <div className="button-spacer">
            <button className="button" onClick={() => setCount((count) => count + 1)}>
              +
            </button>
            <button className="button" onClick={() => setCount((count) => count - 1)}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
