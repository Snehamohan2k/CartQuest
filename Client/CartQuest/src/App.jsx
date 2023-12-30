import React from 'react'
import LoginPage from './LoginPage/LoginPage'
import RegistrationPage from './RegistrationPage/RegistrationPage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>
    },
    {
      path: '/register',
      element: <RegistrationPage/>
    }
  ]

  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
