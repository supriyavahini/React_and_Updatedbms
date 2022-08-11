import Product from "./components/Product"
import './App.css';
import {useState}from "react";
function App() {
  const Product=[
    {
      price:99999,
      name:"Iphone",
      quantity:0
    },
    {
      
    }
  ]
  return (
    <div className="App">

     <Product/>
    </div>
  );
}

export default App;
