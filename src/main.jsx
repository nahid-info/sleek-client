import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'

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
        element: <></>,
      },
      {
        path: '/polo-shirts',
        element: <></>,
      },
      {
        path: '/casual',
        element: <></>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
