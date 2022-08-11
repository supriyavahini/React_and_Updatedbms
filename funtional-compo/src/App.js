
import './App.css';
import Empolyee from './components/Empolyee';

function App() {
  return (
    
    <div className="App">
       <h1>Employee Information</h1><hr/>
      <Empolyee id="1" name="Vahini" salary="50000" address="Sangareddy"/>
      <Empolyee id="2" name="Varnika" salary="10000" address="Patancheru"/>
      <Empolyee id="3" name="Vignu"salary="20000" address="Tandur"/>
      <Empolyee id="4" name="Sonu" salary="40000" address="Beeramguda"/>
    </div>
  );
}

export default App;
