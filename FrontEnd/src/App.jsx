import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Home from "./Pages/HomePage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import "./index.css"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup/>} />
  </Route>
))
export default function App(){
  return (
      <RouterProvider router={router}/>
  )
}