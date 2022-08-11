
import './App.css';
import Dashboard from './components/Dashboard';
import{BrowserRouter,Route,Routes}from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}> </Route>
      </Routes>
      <Home/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
