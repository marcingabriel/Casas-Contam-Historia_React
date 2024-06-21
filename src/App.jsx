import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

//reaproveitar estrutura
import {Outlet} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
  
        <div>
          <NavBar></NavBar>

          <Outlet></Outlet>

        </div>
    
   
  )
}

export default App
