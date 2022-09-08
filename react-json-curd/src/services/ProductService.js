import axios from "axios";
const baseUrl = "http://localhost:3000/products";
class ProductService {
  getAllProducts() {
    return axios.get(baseUrl);
  }
    getProduct(id) {
     return axios.get(`${baseUrl}/${id}`)
    }
  
  createProduct(product) {
    return axios.post(baseUrl,product);
  }
  deleteProduct(id) {
    return axios.delete(`baseUrl+/${id}`);
  }
  updateProduct(id,product) {
    return axios.put(`baseUrl+/${id}`, product);
  }
}
export default new ProductService();
