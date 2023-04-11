import React from 'react'
import { Login } from './Pages/Login'
import { 
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
    Link,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route index element={<Login/>}/>
        <Route to=""/>

    </Route>
))

export default function App() {
  return (
    <div>
        <Login />
    </div>
  )
}
