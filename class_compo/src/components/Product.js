import React, { Component } from 'react'

export class Product extends Component {
    constructor(props){
        super(props)
this.state={
    "id":(this.props.id),
    "name":(this.props.name),
    "qty":(this.props.qty),
    "price":(this.props.price)
}
    }
  render() {
    return (
      <div>
        <h1>Product Information</h1>
        <p> 
         Product Id:{this.state.id} 
         Product Name:{this.state.name} 
         Product Quantity:{this.state.qty} 
         Product Price:{this.state.price}
        </p>
      </div>
    )
  }
}

export default Product
