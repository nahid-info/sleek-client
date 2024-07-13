import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import TShirts from './pages/T-Shirts.jsx'
import PoloShirts from './pages/Polo-Shirts.jsx'
import Casual from './pages/Casual.jsx'
import Login from './pages/Login.jsx'


import AuthProvider, { AuthContext } from './store/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <><Home /></>,
      },
      {
        path: '/t-shirts',
        element: <><TShirts /></>,
      },
      {
        path: '/polo-shirts',
        element: <><PoloShirts /></>,
      },
      {
        path: '/casual',
        element: <><Casual /></>,
      }
    ]
  },
  {
    path: '/login',
    element: <><Login /></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
