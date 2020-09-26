import React from "react";
import SearchBar from './SearchBar'
import Table from './Table'

function RenderBootstrap() {

    return(
<div>

        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
    <p className="lead">Search your employee database below:</p>
  </div>
</div>

<SearchBar/>
<Table/>

</div>

    )

    }
    export default RenderBootstrap;
