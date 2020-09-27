import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import sampleEmployees from './sampleEmployees.json';


// function App() {
 
// }

// export default App;


function App(){

const [employeeResults] = React.useState(sampleEmployees);

  return(
    <div>
<Header/>
<SearchBar/>
{/* <Table 
  id= {sampleEmployees[0].id}
  firstName= {sampleEmployees[0].firstName}
  lastName= {sampleEmployees[0].lastName}
  department= {sampleEmployees[0].department}
  email= {sampleEmployees[0].email}
/> */}

<Table/>


</div>

  )
    
}


export default App;
