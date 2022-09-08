import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Dashbar from './Dashbar'
import Login from './Login'
import Register from './Register'
import Home from './Home'

function Navbar() {
  return (
    <div>
        <BrowserRouter>
        <ul>
            <li><Link to="/login">Home</Link></li>
            <li><Link to="/login">AboutUs</Link></li>
            <li><Link to="/login">ContactUs</Link></li>
            <li><Link to="/login">SignIn</Link></li>
            <li><Link to="/login">SignUp</Link></li>
        </ul>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashbar/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
        </BrowserRouter>
      <h1>Navbar Component</h1>
    </div>
  )
}

export default Navbar
