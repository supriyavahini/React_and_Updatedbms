// import React from 'react'
// import { useState } from 'react'

// const Empolyee = () => {
//     const[id,setId]=useState("1");
//     const[name,setName]=useState("Vahini");

//   return (
//     <div>
//       <h1>
//         Employee Information
//       </h1>
//       <hr/>
//       <p>
//         Employee Id:<input type="text" value={id}/><br/>
//         Employee Name:<input type="text" value={name}></input><hr/>
//       </p>
//     </div>
//   )
// }

// export default Empolyee
import React from 'react'


const Empolyee = props => {
   
  return (
    <div>
     
      <p>
        Empolyee Id:<input type="text" value={props.id}/><br/>
        Empolyee Name:<input type="text" value={props.name}></input><br/>
        Empolyee salary:<input type="text" value={props.salary}/><br/>
        Empolyee address:<input type="text" value={props.address}/><br/><hr/>
      </p>
    </div>
  )
}

export default Empolyee
