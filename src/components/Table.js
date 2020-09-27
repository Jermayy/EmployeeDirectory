import React, {Component} from 'react';
import sampleEmployees from './../sampleEmployees.json'




  function Table (props){
return (
<div>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Department</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
        
        <td> {props.id} </td>
        <td>{props.firstName} </td>
        <td>{props.lastName} </td>
        <td>{props.department} </td>
        <td>{props.email} </td>
        
        
    
    
  </tbody>
</table>
</div>
)
}



export default Table;


// function Table(props){
//     return <div className="table">{props.children}</div>
// }

// export default Table;