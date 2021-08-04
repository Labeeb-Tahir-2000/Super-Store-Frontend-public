import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import  "./Sale.css";

function SaleJSX (props){
    return(
        <div className="container">
      
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="card product_item">
                    <div className="body">
                        <div className="cp_img">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Product" className="img-fluid"/>
                            <div className="hover">
                                <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus"></i></a>
                                <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart"></i></a>
                            </div>
                        </div>
                        <div className="product_details">
                            <h5><a href="ec-product-detail.html">{props.title}</a></h5>
                            <ul className="product_price list-unstyled">
                                <li className="old_price">$16.00</li>
                                <li className="new_price">$13.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            
            
        </div>
    </div>
    )
};
export default SaleJSX;