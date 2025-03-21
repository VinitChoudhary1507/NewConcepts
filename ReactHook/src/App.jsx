// import { Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Comp1 from './Components/comp1'
// import Comp2 from './Components/comp2'
// import Comp4 from './Components/comp4'
// import Comp5 from './Components/comp5'
// import Comp3 from './Components/comp3'


// function App() {
//   return (
//     <>
//     <Comp1/>
//     <Comp2/>
//     <Comp3/>
//     <Comp4/>
//     <Comp5/>
//     </>
//   )
// }

// export default App
import React, { createContext,useState} from 'react';
import Form from './Components/Form';

// ThemeContext.js
export const ThemeContext = createContext(null);

// MyApp.js
export default function MyApp() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}
