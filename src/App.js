import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import sampleEmployees from './sampleEmployees.json';


function App(){


  return(
    <div>
<Header/>
<SearchBar/>

<Table employees= {sampleEmployees}  />


</div>

)
    
}


export default App;
