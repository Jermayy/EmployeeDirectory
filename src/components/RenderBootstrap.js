import React from "react";
import SearchBar from './SearchBar'


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

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

    )

    }
    export default RenderBootstrap;
