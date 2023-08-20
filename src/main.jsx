import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'
import DataProvider from './providers/DataProvider'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><DataProvider><RouterProvider router={router} /></DataProvider></AuthProvider>
  </React.StrictMode>,
)
