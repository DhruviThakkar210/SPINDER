import React from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren
} from "react-router-dom"
import Home from "./Pages/HomePage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import "./index.css"
import { setClientToken } from "./Components/SpotifyAuth"
import LandingPage from "./Pages/LandingPage"


const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
  </Route>
))

// window.localStorage.clear() 

export default function App(){

  const [token, setToken] = React.useState("")
  React.useEffect(() => {
    const hash = window.location.hash //value leading #in URL 
    const token = window.localStorage.getItem("token")
    window.location.hash=("") //now we can clear the url

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1] 
      window.localStorage.setItem("token",_token)
      setToken(_token)
      setClientToken(_token) //setting token to axios >
    } else {
      setToken(token) //token from L.S
      setClientToken(token)
    }
  },[])

  return !token ? (
      <RouterProvider router={router} />
    ) : (
      <>
        <pre>LINKED SUCCESSFULLY..... Now you are HACKED And I have All Your Private DATA</pre>
        <LandingPage/>
      </>
      
  )

}

