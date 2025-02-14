import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    // counter++
    // console.log('clicked',counter)
    if(counter == 20) {
      setCounter(counter = 20)
      alert('Max limit reached')
    }
    else{
    setCounter(counter + 1)
    }
  }

  //Interview Question
  // Write a function that increases the counter by any number

  // const addValues = () => {
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)    //increases counter by 1 only
  //   setCounter(counter + 1)
  // }

  //to increase value by any number
  // const addValues = () => {
  //   setCounter(prevCounter => prevCounter + 1) 
  //   setCounter(prevCounter => prevCounter + 1)    //this will directly increase counter by given number
  //   setCounter(prevCounter => prevCounter + 1)     //here number is 4
  //   setCounter(prevCounter => prevCounter + 1)
  // }
  

  

  const removeval = () => {
    // counter--
    // console.log('clicked',counter)
    if(counter == 0) {
      setCounter(counter = 0)
      alert('Min limit reached')
    }
    else{
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Increase Value </button>
    <br />
    <button
    onClick={removeval}
    >Decrease Value </button>
    
    </>
  )
}

export default App
