 import React, { useEffect, useState } from 'react'
 
 export default function ViewApi()
  {
     const [data,setData]=useState([])
     const [error,setError]=useState("")
 
    useEffect(() => {
     
      fetch("https://dummy-json.mock.beeceptor.com/companies").then((response) => //fetch is a two step process
         response.json()
     ).then((data) => 
         setData(data)
     ).catch((err) => {
         setError(err.message)
     })
    }, []);//empty dependence(value)
 
   return (
     <div>
          <h2><u>lab</u></h2>
          {
             error ? <b>{error}</b>:
             data.length ==0?
             <b>Loading...</b>:
          
          <table border={1}>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Address</th>
                
             </tr>
             {
                 data.map((todo,index) =>(
                   <tr key={index}>
                    
                    
                     <td>{todo.id}</td>
                     <td>{todo.name}</td>
                     <td>{todo.address}</td>
                     
                   </tr>
                 ))
 
                
             }
          </table>
  }
     </div>
   )
 }
 