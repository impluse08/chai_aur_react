import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(true)
  const [passoword, setPassoword] = useState("")
  
  //ref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }else if(charAllowed){
      str += "~!@#$%^&*(){}"
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char)
    }
    setPassoword(pass)  
  }, [length, numberAllowed, charAllowed, setCharAllowed])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3) only selects 3 char
    window.navigator.clipboard.writeText(passoword)
  },[passoword])
  useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator] )
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-1 my-2 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-10'>
      <input type="text" 
      value={passoword} 
      className='outline-none w-full py-1 px-3'
      placeholder='passoword'
      readOnly
      ref={passwordRef} />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      onClick={copyPasswordToClipboard}>Copy</button>  
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
        <input type="range"
        min={8}
        max={40}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
         />
        <label>Lenght: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
