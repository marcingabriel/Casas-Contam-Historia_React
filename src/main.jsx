import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { lazy } from 'react'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

//import Home from './routes/Home.jsx'
//import Sobre from './routes/Sobre.jsx'
//import Error from './routes/Error.jsx'
//import Depoimentos from './routes/Depoimentos.jsx'
//import Inventario from './routes/Inventario.jsx'

const Home = lazy (() => import("./routes/Home.jsx") )
const Sobre = lazy (() => import("./routes/Sobre.jsx") )
const Depoimentos = lazy (() => import("./routes/Depoimentos.jsx") )
const Inventario = lazy (() => import("./routes/Inventario.jsx") )
const Error = lazy (() => import("./routes/Error.jsx") )



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
