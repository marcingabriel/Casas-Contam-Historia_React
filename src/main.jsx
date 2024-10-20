import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Error from './routes/Error.jsx'
import Depoimentos from './routes/Depoimentos.jsx'
import Inventario from './routes/Inventario.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      
      {
        path: "Sobre",
        element: <Sobre />
      },

      {
        path: "Inventario",
        element: <Inventario />
      },

      {
        path: "Depoimentos",
        element: <Depoimentos />
      },

    ]


    
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
