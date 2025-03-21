import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PassAccount from './Components/passAccount';


function App() {
  const [email, setEmail] = useState('');
  const [pass,setPass] = useState('');
 
 
    
  return (
    <>
    
     <PassAccount setEmail={setEmail} setPass={setPass} />
    </>
  )
}

export default App;
