import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React,{Component} from 'react';
import {connect} from "react-redux";

// import React from 'react'

function App(props) {
  const increment = () =>{
    props.dispatch({
      type:"INCREMENT",
    });
  };
  const decrement = () => {
          props.dispatch({
           type:"DECREMENT",
          });
        };
        
  return (
    <div>
   
      <center>
      <h1>Functional Component</h1>
  <h1 className="mt-5 display-1">{props.count}</h1>
<button onClick={increment} className="btn btn-success mr-5">
  INCREMENT
  </button>
  <span style={{ padding: 5}}></span>
  <button onClick={decrement} className="btn btn-danger">
 DECREMENT
</button>
</center>

</div>
  
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
  };


export default connect(mapStateToProps) (App);

// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import React,{Component} from 'react';
// import {connect} from "react-redux";

// function App(props) {
  
//     const decrement = () => {
//       props.dispatch({
//        type:"DECREMENT",
//       });
//     };
//     const increment = () =>{
//       props.dispatch({
//         type:"INCREMENT",
//       });
//     };
// render(){
//   return (
   
//   )
// }
//}

