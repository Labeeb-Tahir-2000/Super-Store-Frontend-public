import React from "react";
import "./DiscountSlider.css";
import {Carousel} from '3d-react-carousal';


const slider =()=>{
    let slides = [	
		<div className="row">
        <img src="https://picsum.photos/800/300/?random" alt="5" />
		</div>,
					<div className="row">
						<div className="my-col col-sm-4">
							
									<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
							
								
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									
									
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							
						
						<div className="my-col col-sm-4">
							
							<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
					
						
							<h4>Apple iPhone</h4>
							<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
							
							
							<a href="#" className="btn btn-primary">Add to Cart</a>
						</div>			
						<div className="my-col col-sm-4">
							
									<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
							
								
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									
									
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>
				</div>	
	,					
				<div className="row">
						<div className="my-col col-sm-4">
							
									<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
							
								
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									
									
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							
						
						<div className="my-col col-sm-4">
							
							<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
					
						
							<h4>Apple iPhone</h4>
							<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
							
							
							<a href="#" className="btn btn-primary">Add to Cart</a>
						</div>			
					 	<div className="my-col col-sm-4">
							
									<img src="https://picsum.photos/800/300/?random" className="img-fluid" alt=""/>
							
								
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									
									
									<a href="https://www.google.com/" className="btn btn-primary">Add to Cart</a>
								</div>			
							
					</div>
				
	
		
          ];
    const style={
        
        padding:"40px",
    }
    return(
		<div style={style}  className="container-fluid">
		<Carousel slides={slides}  interval={10000}/>
				</div>

       

    );

}

export default slider;
