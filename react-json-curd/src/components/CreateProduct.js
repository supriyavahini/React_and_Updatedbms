import React,{useState} from "react";
import ProductService from "../services/ProductService";
import {useNavigate} from "react-router-dom"
function CreateProduct() {
  //const [product, setProduct]=useState();
  const [id,setId]=useState();
  const[name,setName]=useState();
  const[colour,setColour]=useState();
  const[price, setPrice]=useState();
  let navigate=useNavigate();
  const createProduct=(e)=>{
    e.preventDefault();
    let obj={
      id:parseInt(id),
      name:name,
    colour:colour,
     price:price
    };
    ProductService.createProduct(obj).then((res)=>{
      console.log(res.data)
    });
    navigate("/list")
  }
  return (
    <div className="container">
      <h1>Create Product</h1>
      <hr />
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputId" 
          className="form-label">
           Product Id
          </label>
          <input type="text" 
          className="form-control" 
          id="exampleInputId" 
          value={id} 
          onChange={(e)=>setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" 
          className="form-label">
          Product Name
          </label>
          <input type="text" 
          className="form-control" 
          id="exampleInputName" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" 
          class="form-label">
            Product Colour
          </label>
          <select
          className="form-select"
          arial-label="Default select example"
          name="colour"
          id="exampleColour"
          onChange={(e)=>setColour(e.target.value)}
         >
          <option selected>Colour Select menu</option>
            <option defaultValue="Voilet">Voilet</option>
            <option defaultValue="Indigo">Indigo</option>
            <option defaultValue="Blue">Blue</option>
            <option defaultValue="Red">Red</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleInputName" class="form-label">
            Product Price
          </label>
          <select
          className="form-select"
          aria-label="Default select example"
          name="price"
          id="examplePrice"
          onChange={(e)=> setPrice(e.target.value)}
      >
        <option selected>Price Select menu</option>
            <option defaultValue="20000">20000</option>
            <option defaultValue="10000">10000</option>
            <option defaultValue="40000">40000</option>
            <option defaultValue="50000">50000</option>
         
        </select></div>
        <button type="submit" class="btn btn-primary" onClick={createProduct}>
      Create
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
