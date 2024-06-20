import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//reaproveitar estrutura

import {Outlet} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
  
        <div>
          <h1>ol;a</h1>
          <Outlet></Outlet>

        </div>
    
   
  )
}

export default App
