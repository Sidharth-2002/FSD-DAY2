import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cardcomp from './components/Cardcomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/'element={<View/>}></Route>
      <Route path='/add'element={<Add/>}></Route>
      <Route path='/card'element={<Cardcomp/>}></Route>
  
    </Routes>
    </div>
  )
}

export default App
