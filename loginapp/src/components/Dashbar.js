import React from 'react'

function Dashbar() {
    let Employee = [
        {
          "Id":1,
          "Name":"Vahini",
          "Address":"Beeramguda",
          "Salary":13000
        },
        {
          "Id":2,
          "Name":"Vignyan",
          "Address":"Sangareddy",
          "Salary":12000
        },
        {
          "Id":3,
          "Name":"Varnika",
          "Address":"Patancheru",
          "price":15000
        },
    ];
      const EmployeeList = Employee.map(Employee=>{
        return(
          <tr key={Employee.Id}>
            <td>{Employee.Id}</td>
            <td>{Employee.Name}</td>
            <td>{Employee.Address}</td>
            <td>{Employee.Salary}</td>
            <td>
              <button className='btn btn-primary' style={{margin:"10px"}}>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        )
      })
      return (
       
        <div>
          
          <h1>Employee List</h1>
          <hr/>
          <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Salary</th>
          <th colSpan={"2"}>Actions</th>
        </tr>
      </thead>
      <tbody>
       {EmployeeList}
      </tbody>
    </table>
        </div>
      )
    }
    
    
export default Dashbar
