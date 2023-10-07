import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <button
          type="button"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor: "black"}}
          onClick={() => {setcolor("black")}}
        >
          Black Button
        </button>
        <button
          type="button"
          class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          style={{backgroundColor: "yellow"}}
          onClick={() => {setcolor("yellow")}}
        >
          Yellow Button
        </button>
        <button
          type="button"
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          style={{backgroundColor: "red"}}
          onClick={() => {setcolor("red")}}
        >
          Red Button
        </button>
        <button
          type="button"
          class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{backgroundColor: "green"}}
          onClick={() => {setcolor("green")}}
        >
          Green Button
        </button>
        <button
          type="button"
          class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{backgroundColor: "blue"}}
          onClick={() => {setcolor("blue")}}
        >
          Blue Button
        </button>
        <button
          type="button"
          class="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{backgroundColor: "purple"}}
          onClick={() => {setcolor("purple")}}
        >
          Purple Button
        </button>
        <button
          type="button"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{backgroundColor: "orange"}}
          onClick={() => {setcolor("orange")}}
        >
          Orange Button
        </button>
        <button
          type="button"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{backgroundColor: "white"}}
          onClick={() => {setcolor("white")}}
        >
          White Button
        </button>
      </div> 
    </>
  )
}

export default App
