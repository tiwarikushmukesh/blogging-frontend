import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import axios from "axios"
import Blog from "./pages/Blog"
import Write from "./pages/Write"
import Dashboard from "./pages/Dashboard"


axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/write/:blogId" element={<Write />} />
        <Route path="/user" element={<Dashboard />} /> 
      </Routes>
    </>
  )
}

export default App
