import React from 'react'
import{useNavigate} from "react-router-dom";

function Home() {
  let navigate=useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate("/Navbar");
  }
  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={handleSubmit}className="btn btn-primary">Login</button>
    </div>
  )
}

export default Home
