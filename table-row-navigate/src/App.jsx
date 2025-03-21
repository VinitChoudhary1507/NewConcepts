
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import React from 'react';
import TableRowSelection from './components/Table';
console.log('hello');
import { createBrowserRouter,RouterProvider } from "react-router";
function App() {

    const router = createBrowserRouter([
      {
        path:'/',
        element: <><Navbar/> <Home/> </>  
      },
      { 
        path:'/login',
        element:  <> <Navbar/><Login/> </> 
      },
      { 
        path:'/about',
        element: <><Navbar /><About/> </>  
      },
      { 
        path:'/table',
        element: <><Navbar /><TableRowSelection/> </>  
      },
    ])
    console.log('hello');
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
