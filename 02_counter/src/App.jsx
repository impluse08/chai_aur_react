import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // ye counter upar wala sare niche wale counters ko update karega and useState(15) is the current counter value
  // let counter  = 15;
  // document.querySelector('.add').addEventListener('click',function(){
  //   counter = counter + 1
  //   document.querySelector('.add').innerHTML = `Add Value ${counter}`
  //   document.querySelector('.c1').innerHTML = `Counter Value: ${counter}`
  //   document.querySelector('.rm').innerHTML = `Remove Value ${counter}`
  //   document.querySelector('.foot').innerHTML = `This is ${counter}`
  // })
  const addValue = function () {
    // counter = counter + 1
    if (counter < 20){
      setCounter(counter + 1) 
    }
    // console.log(`Clicket ${counter}`);
  }
  const rmValue = function(){
    if (counter > 0){
      setCounter(counter -1)
    }
    // console.log(`Clicket ${counter}`);
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2 class="c1">Counter Value: {counter}</h2>
    <button class="add" onClick={addValue}>Add Value {counter}</button>
    <br />
    <button class="rm" onClick={rmValue}>Remove Value {counter}</button>
    <footer class="foot">This is {counter}</footer>
    </>
  )
}

export default App
