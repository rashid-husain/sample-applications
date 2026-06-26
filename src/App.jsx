import { useState } from 'react'
import './App.css'
import'./header.css'
import Header from './header'
import home from'./pages/home';
import about from'./pages/about';
import contact from './pages/contact';
import careers from './pages/careers';
import blogs from './pages/blogs';
import faq from './pages/faq';
import services from './pages/services';
import support from './pages/support';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <p className="firstName">Rufayda Khatoon</p>
          <p id="lastName">Shaista Khatoon</p>
          <h4>Nahida Khatoon</h4>
          <h4>Rashid Husain</h4>
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
