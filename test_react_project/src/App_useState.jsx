import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App1() {
  // const [count, setCount] = useState(() => initialValue());
  // function initialValue(){
  //   console.log("jii haa");
  //   return 1;}
  const [count, setCount] = useState(4);
  const [color, setColor] = useState("blue")

  function decrease(){
    // setCount(count -1) this is okay
    setCount(prevCount => prevCount -1) //this is better you can do it twice
    if(count > 0){
      setColor("red")
    }else{
      setColor("blue")
    }
  }
  function increase(){
    setCount(prevCount => prevCount +1)
    if(count > 0){
      setColor("red")
    }else{
      setColor("blue")
    }
  }
  return (
    <div className='text-7xl content-center  text-center text-white gap-4'>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
      <p>{color}</p>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App1
