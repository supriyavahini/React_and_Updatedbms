import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";
function ProductList() {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getAllProduct()
  }, []);
 
  const getAllProduct = async () => {
    const data = await ProductService.getAllProducts();
    console.log("=====>" + data);
    setProducts(data.data);
    console.log("Product List :" + products);
  };
  const deleteProduct = async (id) => {
    //alert("delete");
    let resp = await ProductService.deleteProduct(id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((data) => {
        console.log(data);
      });
    console.log(resp);
    getAllProduct();
  };
  const UpdateProduct = (id) => {
    navigate(`/update/${id}`);
  };
  const CreateProduct = () => {
    navigate("/create");
  };
  return (
    <div className="container">
      <h1 className="vahini">ProductList </h1>
      <hr />
      <button
        className="btn btn-primary"
        style={{ float: "left" }}
        onClick={CreateProduct}
      >
        AddProduct
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Colour</th>
            <th colSpan={"1"}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.colour}</td>
                <td>{product.price}</td>
                <td>
                  <a 
                  className="btn btn-primary" style={{ margin: "10px" }}
                  onClick={()=> UpdateProduct(product.id)}>
                    Edit
                  </a>
                  <button className="btn btn-danger"
                  onClick={()=> deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
