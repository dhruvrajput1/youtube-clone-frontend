import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1>Home Page</h1>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
