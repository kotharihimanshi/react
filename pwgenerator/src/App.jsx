import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [noallowed, setNoallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const pwgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (noallowed) str += '0123456789'
    if (charallowed) str += '!@#$%^&*()"|^~`{|}~`:;<=>?@[]-'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, noallowed, charallowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
  }, [password])
    

  useEffect(() => {
    pwgenerator()
  }, [length, noallowed, charallowed, pwgenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 font-medium text-blue-500 bg-gray-800'>
        <h1 className='text-center my-3 text-4xl text-red-600 font-bold underline font-serif'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className="outline-none bg-white w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className='outline-none bg-blue-700  hover:cursor-pointer text-white px-3 py-0.5 shrink-0 hover:bg-blue-400'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength((e.target.value))
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={noallowed}
              id="numberInput"
              onChange={() => {
                setNoallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charallowed}
              id="charInput"
              onChange={() => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charrInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
