import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import UserList from './components/UserList';
function App() {
  return (
    <div className="App">
       <UserList />
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
          <Route path="/list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
