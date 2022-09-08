import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Link, Route,Routes} from 'react-router-dom'

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UsersList from './components/UsersList';


function App() {
  return (
    <div className='App'>
         <UsersList />
      <BrowserRouter>
      <ul>
          <li>
            <Link to="/employee">Create Employee</Link>
          </li>
          <li>
            <Link to="/list">List Employee</Link>
          </li>
          <li><Link to="/view">View Employee</Link></li>
          <li>
          <Link to="/update">Update Employee</Link>
        </li>
        </ul>
              
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {<ListEmployeeComponent/>}></Route>
                          <Route path = "/employees" component = {<ListEmployeeComponent/>}></Route>
                          <Route path = "/add-employee/:id" component = {<CreateEmployeeComponent/>}></Route>
                          <Route path = "/view-employee/:id" component = {<ViewEmployeeComponent/>}></Route>
                          <Route path = "/update-employee/:id" component = {<UpdateEmployeeComponent/>}></Route> 
                    </Routes>
                </div>
              <FooterComponent />
       
        </BrowserRouter>
    </div>
    
  );
}

export default App;

