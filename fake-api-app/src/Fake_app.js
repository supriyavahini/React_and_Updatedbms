import axios from 'axios';
import { useEffect, useState } from 'react';


function Fake_app() {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        setProducts(res.data);
    })
    },[])

  return (
    <div className='container'>
    <table className='table table-bordered'>
        <thead>
            <tr >
                <td>id</td>
                <td>image</td>
                <td>description</td>
                <td>price</td>
            </tr>
        </thead>
       <tbody>
            {
                products.map(res=>{
                return(
                    <tr key={res.id}>
                       <td>{res.id}</td> 
                       <td><img src={res.image} alt={res.id} style={{height:"200px",width:"200px"}}/></td> 
                       <td>{res.description}</td> 
                       <td>{res.price}</td> 
                    </tr>
                )
                })
                }
                
        </tbody>
    </table>
      
    </div>
  )
}

export default Fake_app;
