import React,{useContext} from "react";
import { CartContext } from "../cartContext/cartContext";

import './cartJSX.css';

function CartProducts (props){
    
    const [cartItem,setCartItem] = useContext(CartContext)
    return( 
        <div>  
              
                <div className="row externel displaySmall" style={{marginTop:'10px',backgroundColor:'white', display:'flex-inline' , alignItems:'center'}} >
                    <div className='col-4 ' style={{ display:'flex-inline' , alignItems:'center'}}>
                        <img className='image'src={props.imageURL}></img>
                    </div>
                    <div className='col-5 detail' style={{ display:'flex-inline' , alignItems:'center' }}>
                       <h5>{props.title}</h5>
                       <p style={{ color:'blue'}}>{props.description}</p>
                       <p style={{ color:'rgb(163, 163, 163)'}}>Number of Items <span style={{color:'rgb(42, 237, 139)', fontWeight:'bold'}}>{cartItem.filter((itemID)=> itemID === props.id).length}</span></p>
                       <p style={{fontWeight:'bold' , color:'red'}}>Rs. {props.price} <span style={{fontWeight:'normal', color:'black', fontSize:'11px'}}>per Item</span></p>
                    </div>
                    <div className='col-3'  style={{ display:'flex-inline' , alignItems:'center', marginLeft:'0px',paddingLeft:'0px' }}>
                    <button style={{background:'rgb(237, 33, 33)' , border:'1px' , color :' #F8F9FA'}}
                        onClick={()=> props.removeItem(props.id)}
                        > Remove </button>
                    </div>
                </div>

                
    </div> 
    )
};
export default CartProducts;