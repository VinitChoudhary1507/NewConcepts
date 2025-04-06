import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/UseRef'

function App() {
  const [count, setCount] = useState(0)
  const countRef =useRef(0)
  
  const incrementref = ()=> countRef.current++;
  const incrementState = ()=>setCount(count + 1);
  console.log("Component rendered");
  return (
    <>
        {/* <Counter/> */}
    <div>
      <p>Ref Count: {countRef.current}</p>
      <p>State Count: {count}</p>
      <button onClick={incrementref} >ref</button>
      <button onClick={incrementState}>state</button>
    </div>
    </>
  )
}

export default App
