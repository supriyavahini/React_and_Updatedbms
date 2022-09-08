import React from 'react'

import {useNavigate} from "react-router-dom";

function Home() {

    let navigate = useNavigate();

    function handleSubmit(e) {

      e.preventDefault();

      navigate("/dashboard");

    }

    return (

      <div>

        <h1>Home component</h1>

        <button onClick={handleSubmit} className="btn btn-success">

          Login

        </button>

      </div>

    );

}

export default Home ;