import React,{useEffect,useState} from "react";
import { Icon, Col, Card, Row, Divider } from 'antd';
import ImageSLider from "./Sliders/ImageSlider";
import Axios from "axios";
import {useCookies} from "react-cookie";
import CardProductsJSX from "./cardProductsJSX";
import './line.css'
import SaleSlider from "./Sliders/SaleSlider";

function Home(){
  
  const [cookie] = useCookies(['jwt']);
   const[products , setProduct] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const  getProducts= async()=>{
    try{
    const res =  await Axios.post('http://localhost:3000/api/v1/products/getProducts ',{ }, {
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.jwt}`        
      }});
      
        setProduct(res.data.product);
        console.log(res.data.product)
      
      
    }catch(err){
      console.log(err.responce)
    }
  }

    //product image must have size 500x500 for better adjustment in card
      const items= products.map(item=>{
          return <div className="col-sm-4 col-lg-3 col-6 " style={{marginRight:'0px',paddingRight:'3px'}}>
               <CardProductsJSX  url={item.pImagePath} title={item.pTitle} price={item.pPrice} />
          </div>
      });
      const itemsSale= products.map(item=>{
        if(item.pOnSale === 'onSale'){
          return <div className="col-sm-4 col-lg-3 col-6 " style={{marginRight:'0px',paddingRight:'3px'}}>
          <CardProductsJSX  url={item.pImagePath} title={item.pTitle} price={item.pPrice} />
          </div>
          }else{
            return ;
          }   
    });


    const productCount = products.length;
    
    return(
  <div>
       <ImageSLider/>
       
       {products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                   <hr style={{marginTop:'40px'}}className="hr-text" data-content="AND"/>
                    <SaleSlider />
                   
                  <hr style={{marginTop:'40px'}}className="hr-text" data-content="AND"/>
                    <div style={{marginTop:'50px' , marginRight:'0px',paddingRight:'3px'}} className="row container-fluid">
                      {itemsSale}
                    </div>

                  <hr style={{marginTop:'40px'}}className="hr-text" data-content="AND"/>
                    <div style={{marginTop:'50px' , marginRight:'0px',paddingRight:'3px'}} className="row container-fluid">
                      {items}
                    </div>
                    
                </div>
}
  </div>
    );

}
export default Home;