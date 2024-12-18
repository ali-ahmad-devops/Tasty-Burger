// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Route, BrowserRouter as Router , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/menu' element={<Menu/> }/>
      </Routes>
    </Router>
  )
}

export default App
