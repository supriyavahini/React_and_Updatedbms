
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React,{Component} from 'react';
import {connect} from "react-redux";
export class App extends Component{
  increment = () =>{
    this.props.dispatch({
      type:"INCREMENT",
    });
  };
decrement = () => {
  this.props.dispatch({
   type:"DECREMENT",
  });
};
render(){
  return(
  <div className="vahini">
      <center>
        <h1>Class Component</h1>
        <h1 className="vahini">{this.props.count}</h1>
      <button onClick={this.increment} className="btn btn-success mr-5">
        INCREMENT
        </button>
        <span style={{ padding: 5}}></span>
        <button onClick={this.decrement} className="btn btn-danger">
       DECREMENT
      </button>
    </center>
    
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    count: state.count,
  };
  };



export default connect(mapStateToProps) (App);
