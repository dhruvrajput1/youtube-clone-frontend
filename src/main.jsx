import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/register",
//         element: <RegisterForm />,
//         errorElement: <ErrorPage />,
//       }, 
//       {
//         path: "/login",
//         element: <LoginForm />,
//         errorElement: <ErrorPage />
//       }
//     ]
//   },
  
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
