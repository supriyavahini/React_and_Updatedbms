import React, { useState } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
function Create() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [colour, setColour] = useState();
  const [price, setPrice] = useState();

  const ref = collection(db, "products");

  const handleCreateProduct = (e) => {
    e.preventDefault();
    addDoc(ref, { id, name, colour, price });
  };

  return (
    <div className="container">
      <form>
        <div className="sai">
          <label htmlfor="exampleInputid" class="form-label">
            Product Id
          </label>
          <input
            type="text"
            className="form-control"
            id="pid"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="sai">
          <label htmlfor="exampleInputpname" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="pname"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sai">
          <label htmlfor="exampleInputpcolor" class="form-label">
            Product Colour
          </label>
          <input
            type="text"
            className="form-control"
            id="pcolour"
            onChange={(e) => setColour(e.target.value)}
          />
        </div>
        <div className="sai">
          <label htmlfor="exampleInputprice" class="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button onClick={handleCreateProduct} class="btn btn-primary">
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default Create;
