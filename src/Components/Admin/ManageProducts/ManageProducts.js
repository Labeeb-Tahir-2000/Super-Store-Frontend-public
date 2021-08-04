import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import "../SignIn.css";
import ProductTable from "./ProductTable";




function ManageProducts (){
  const [cookie] = useCookies(['jwt']);  
  const [product,setProduct] = useState();
  const [table,setTable] = useState();
  const [check,setcheck] = useState(false);
  const [type,setType] = useState();
  const [cetegory,setCetegory] = useState();
  const [allProducts,setAllProducts] = useState();

    function typeChangeHandler(event){
       setType(event.target.type.value)
     }
    function productChangeHandler(event){
        setCetegory(event.target.AllProduct.value)
    }
    function cetegoryChangeHandler(event){
        setAllProducts(event.target.Cetegory.value)
    }
 useEffect(()=>{
     Submit();
     console.log(product); 
 },[]);
  const Submit= async()=>{
   
        //   const data ={
        //       cetegories:cetegory,
        //       allProducts:allProducts,
        //       type:type,
        //       jwt:cookie
        //   }
              try{
                  const res = await  Axios.get('https://jsonplaceholder.typicode.com/todos');

                        setProduct(res);
                        console.log(res.data);
                        console.log(res);
                      
                        console.log("Succesfully send request");
                        console.log(product); 
                        
                  
                }
                //const res = await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/',{ data });   
              
            catch(err){ 
                console.log(err); 
                console.log(err.data); 
            } 
      
        console.log(product); 
  }


    return(
        
        <div className="container-fluid" style={{ margin:'0px' }}>
         <div style={{ margin:'0px' }} className="row">
            <div className="col-sm-12">
                <form className="form-inline flex-container" >
                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="AllProduct" id="Products" onChange={productChangeHandler} />
						<label for="Products">All Products </label>
					</div>
                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="Type" id="edible" onChange={typeChangeHandler} />
						<label for="edible">Edible </label>
					</div>
                    <div className="selection">
                    <select className="form-select"   name="Cetegory" onChange={cetegoryChangeHandler}>
                        <option selected>Cetegories</option>
                        <button value="Soap">Soap</button>
                        <option value="2">Chocolate</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div>
                        <button type="submit" >Click me</button>
                    </div>
                </form>
            </div>
         </div>   
       
       
       
         </div>   
      

    );
}

export default ManageProducts;