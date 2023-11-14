import { useState } from 'react'
import Hello from "./components/Hello"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello/>
      </div>
    </>
  )
}

export default App