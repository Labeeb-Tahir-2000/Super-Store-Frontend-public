import React,{useContext} from "react";
import './cartJSX.css'
function CartProducts (props){
   const renderItems = () => (
        props.product && props.product.map(product => (
            <tr key={product._id}>
                <td >
                    <img style={{ width: '70px' }} alt="product" 
                    src={product.pImagePath} />
                </td> 
                <td >{product.pDescription}</td>
                <td >{product.pPrice}rs </td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )

    return( 
        <div>  
               

                <div className='displayLarge'>
                 <table className="table table-hover">
                     <thead>
                         <tr>
                             <th>Product Image</th>
                             <th>Product Description</th>
                             <th>Product Price</th>
                             <th>Remove from Cart</th>
                         </tr>
                     </thead>
                     <tbody>
                         {renderItems()}
                     </tbody>
                 </table>
             </div>
    </div> 
    )
};
export default CartProducts;