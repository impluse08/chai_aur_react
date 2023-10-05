import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  let myObject = {username: 'Hitesh',age: 21}
  let myArr = [1,23,4,25,6]
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Pranav" btnText="Click me"/>
    <Card username="Purva"/>
    </>
  )
}

export default App
