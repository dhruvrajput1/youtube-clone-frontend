import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import App from './App'
import { LoginForm } from './components/LoginForm/LoginForm.jsx'
import { Home } from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
        errorElement: <ErrorPage />,
      }, 
      {
        path: "/login",
        element: <LoginForm />,
        errorElement: <ErrorPage />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
