import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux todo app</h1>
      <AddTodo />
      <ListTodo />
    </>
  )
}

export default App
