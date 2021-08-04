import React from 'react'; 

function ProductTable (props){
    return(
        <div className="container">
        <h2 style={{textAlign:'center'}}>Products</h2>
                
        <table style={{textAlign:'center'}} className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Cetegory</th>
              <th>Remaining</th>
              <th>Edit</th>
              <th>Discount</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{props.key}</td>
            <td>{props.id}</td>
            <td>{props.url}</td>
            <td>{props.title}</td>
              
            </tr>
          </tbody>
        </table>
        </div>
    )
}
export default  ProductTable;