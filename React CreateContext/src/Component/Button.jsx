import React ,{ useContext }from 'react'
import Component1 from './component1'
import { counterContext } from '../context/context'

const Button = () => {
    const {count,setCount} = useContext(counterContext)
  return (
    <button onClick={() => setCount((count) => count + 1)}><Component1/> {count}</button>
  )
}
export default Button




// const Button = ({count}) => {
//   return (
//     <button><Component1/>{count}</button>
//   )
// }