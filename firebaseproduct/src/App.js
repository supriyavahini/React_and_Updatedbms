import "./App.css";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 cassname="vahini">ReactJS + Firebase Application</h1>
            <div className="card-body">
            <BrowserRouter>
        <ul>
          <li>
            <Link to="/create">Create Product</Link>
          </li>
          <li>
            <Link to="/list">Product List</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
              <CreateProduct />
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default App;
