import { useState } from "react"
import Card from "./components/card"
function App() {
  const [count , setCount] = useState(0)

  // let myObj = {
  //   name : "Himanshi",                    
  //   city : "Dahod"                      //Obj = {myObj} myArr = {Arr} in card tag
  // }

  // let Arr = [1,3,2]

   return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <Card username = "learn-props" />      
    

    </>
  )
}

export default App
