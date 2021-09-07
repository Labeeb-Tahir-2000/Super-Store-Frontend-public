import React from 'react'; 
import './productTable.css';
function ProductTable (props){
    return(
        <div className="container-fluid myTable" >
        <h2 style={{textAlign:'center'}}>Product</h2>
                
        <table className="table table-hover">
          <thead>
            <tr>
            <th >ID</th>
              <th style={{maxWidth:'80px'}}>Title</th>
              <th>Description</th>
              <th >Price</th>
              <th className="toNonDisplay">Edible</th>
              <th className="toNonDisplay">Cetegory</th>
              <th>Stock</th>
              <th>On Sale</th>
         
              
            </tr>
          </thead>
          <tbody>
            <tr>
            <td >{props.pID}</td>
            <td style={{maxWidth:'80px'}}>{props.pTitle}</td>
            <td>{props.pDescription}</td>
            <td >{props.pPrice}</td>
            <td className="toNonDisplay">{props.pEdible}</td>
            <td className="toNonDisplay">{props.pCetegory}</td>
            <td>{props.pStock}</td>
            <td>{props.pOnSale}</td>
        
            </tr>
          </tbody>
        </table>
        </div>
    )
}
export default  ProductTable;