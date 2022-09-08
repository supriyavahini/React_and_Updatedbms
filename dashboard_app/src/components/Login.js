import React from 'react'
import {useNavigate} from "react-router-dom";
function Login() {
    let navigate=useNavigate();
  return (
    <div>
     <h1>Login Component</h1> 
     <button type="link" className="btn btn-primary" onClick={()=>navigate("/Dashboard")}>Login</button>
    </div>
  )
}

export default Login
