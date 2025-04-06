import { useState } from 'react'
import './App.css'
import Count from './Count'

function App() {
  const [count, setCount] = useState(0)

const handleChange = (newCount) => {
  setCount(newCount);
};

  return (
    <>
   <Count counts={count} data={handleChange}/>
      <div className="card">
    <h1>{count}</h1>
      </div> 
   
    </>
  )
}

export default App
// function handleChange(data){
//   console.log(data)
//      const counts = dataa
// }