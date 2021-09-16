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
                <td style={{display:'flex-inline' , justifyContent:'center', alignItems:"center"}}>{product.pDescription}</td>
                <td style={{display:'flex-inline' , justifyContent:'center', alignItems:"center"}}>{product.pPrice}rs </td>
                
            </tr>
        ))
    )

    return( 
        <div>  
              
                <div className="row externel displaySmall" style={{marginTop:'10px',backgroundColor:'white', display:'flex-inline' , alignItems:'center'}} >
                    <div className='col-4 ' style={{ display:'flex-inline' , alignItems:'center'}}>
                        <img className='image'src={props.imageURL}></img>
                    </div>
                    <div className='col detail' style={{ display:'flex-inline' , alignItems:'center' }}>
                       <h5>{props.title}</h5>
                       <p style={{ color:'blue'}}>{props.description}</p>
                       <p style={{fontWeight:'bold' , color:'red'}}>{props.price}rs</p>
                    </div>
            
                </div>

                
    </div> 
    )
};
export default CartProducts;