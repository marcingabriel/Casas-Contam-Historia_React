import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { AudioProvider } from './components/AudioContext'; // Importar o provider do contexto
//reaproveitar estrutura
import {Outlet} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <AudioProvider> {/* Envolver com o provider */}
        <div>
          <NavBar></NavBar>
          
          <Outlet></Outlet>

          <Footer ></Footer>
        </div>
    </AudioProvider>
   
  )
}

export default App
