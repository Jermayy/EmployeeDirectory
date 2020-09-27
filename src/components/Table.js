import React, {Component} from 'react';
import sampleEmployees from './../sampleEmployees.json'
import Row from './Row';



  function Table (){

    const employeeResults = sampleEmployees.map(employee =>{
        return <Row
        id= {employee.id}
        firstName= {employee.firstName}
        lastName= {employee.lastName}
        department= {employee.department}
        email= {employee.email} />
      })
      


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
        
   {employeeResults}  
        
    
    
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