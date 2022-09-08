import Product from "./components/Product"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Product Components</h1>
     <Product id="1" name="Vahini" qty="30" price="30000"/>
     <Product id="1" name="Sonu" qty="30" price="10000"/>
     <Product id="1" name="Varni" qty="30" price="40000"/>
     <Product id="1" name="Vignu" qty="30" price="60000"/>

    </div>
  );
}

export default App;
