import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
function UpdateProduct(){
    const[id,setId] = useState();
    const[name,setName]=useState();
    const[colour,setColour] = useState();
    const[price,setPrice] = useState();
    const params=useParams();
    const[product,setProduct]=useState({id:"",name:"",course:""});
    let navigate=useNavigate();
    useEffect(()=>{
        ProductService.getProducts(params.id).then((res)=> {
          let sobj=res.data;
          setProduct(sobj);
        });  
        },[]);
        const update=()=>{
            alert(id +" "+ name +" "+ colour +" "+ price);
            const updateObject={
                id:id,
                name:name,
                colour:colour,
                price:price,
            };
            alert("Calling update product method.."+JSON.stringify(updateObject));
          ProductService.updateProduct(params.id, updateObject).then((res) => {
             console.log(res.data);
            });
            navigate("/list");
  };
  return (
    <div>
      <h1 className="vainika">Update Product</h1>
      <hr />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputId" className="form-label">
              Product Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputId"
              value={product.id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={product.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Product Colour
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="colour"
              id="exampleColour"
              value={product.colour}
              onChange={(e) => setColour(e.target.value)}
            >
              <option>Select Colour menu</option>
              <option value="voilet">Voilet</option>
              <option value="indigo">Indigo</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
          Product Price
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="price"
              id="examplePrice"
              value={product.price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option>Select Price menu</option>
              <option value="20000">20000</option>
              <option value="10000">10000</option>
              <option value="30000">30000</option>
              <option value="50000">50000</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => update()}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
         