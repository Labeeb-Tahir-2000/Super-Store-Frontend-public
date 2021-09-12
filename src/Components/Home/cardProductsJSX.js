import React from "react";
import  "./cardProducts.css";
import 'bootstrap/dist/css/bootstrap.css';

import {Link} from "react-router-dom"

function CardProducts (props){
    return(
        
      
            
                <div className="card product_item" >
                    <div className="body" >
                        <div className="cp_img">
                            <img src={props.url} alt="Product" className="img-fluid"/>
                            <div  className="hover ">
                               <div style={{display:'flex',}} className="justify-content-center">
                                <div style={{ display:'inline'}}>
                                    <Link style={{textDecoration:'none'}}to="Buy" ><i style={{color:'blue'}} className="zmdi zmdi-plus icon"></i></Link>
                                </div>
                                <div style={{marginLeft:'10px', display:'inline'}}>
                                 <Link style={{textDecoration:'none'}}to="Cart" ><i style={{color:'blue',textDecoration:'none'}} className="zmdi zmdi-shopping-cart icon"></i></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="product_details">
                            <h6 className="productTitle">{props.title}</h6>
                            <ul style={{padding:'0px', margin:'0px'}}className="product_price list-unstyled">
                                <li style={{padding:'0px', marginRight:'10px',color:'blue'}}className="new_price">{props.description}</li>
                                <li style={{padding:'0px', margin:'0px', fontWeight:'bold'}} className="new_price">{props.price}rs</li>
                            </ul>
                        </div>
                    </div>
                </div>
  
    )
};
export default CardProducts;