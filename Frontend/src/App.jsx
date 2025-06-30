import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
         <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        </Routes>
     
    </>
  )
}

export default App
