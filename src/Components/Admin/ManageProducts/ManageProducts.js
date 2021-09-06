import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import ProductTable from './ProductTable';
function ManageProducts (){

  const [cookie] = useCookies(['jwt']);  
  const [table,setTable] = useState();
  const [resProducts,setResProducts] = useState([]);
  const [Edible,setEdible] = useState(" ");
  const [cetegoryValue, setCetegoryValue] = useState(1)
  const [allProducts,setAllProducts] = useState(" ");

  const Cetegories = [
    { key: 1, value: "Beans" },
    { key: 2, value: "Lays" },
    { key: 3, value: "Cold Drinks" },
    { key: 4, value: "Biscuits" },
    { key: 5, value: "Spices" },
    { key: 6, value: "Deturjunts" },
    { key: 7, value: "Sprays" }
]

   const  onEdibleChange=()=>{
       if(Edible === " "){
        setEdible("edible")
       }else if(Edible === "edible"){
        setEdible(" ")
       }
       
     }
    const onAllProductChange=()=>{
         if(allProducts === " "){
            setAllProducts("allProducts")
           }else if(allProducts === "allProducts"){
            setAllProducts(" ")
           }
    }
    const onCetegoryChange = (event) => {
        setCetegoryValue(event.currentTarget.value)
    }
    
    const Submit= async (e)=>{
         if(e.target.pEdible.value  === " " && e.target.allProducts.value  === " "){
                return alert("please select any filter!")
            }
            e.preventDefault(); 
            let data = {};
            if(e.target.allProducts.value === "allProducts"){
                data={}
            }else if(e.target.allProducts.value === " "){
                data={
                pEdible :e.target.pEdible.value, 
                pCetegory :e.target.pCetegory.value 
                }
            }
            console.log(data);
           try{
            const res = await Axios.post('http://localhost:3000/api/v1/products/showProducts', data,
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }
            }
            ); 
            console.log(res.data);     
           
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.message); 
        }
    };




    return(
        
        <div className="container-fluid" style={{ margin:'0px' }}>
         <div style={{ margin:'0px' }} className="row">
            <div className="col-sm-12">
                <form className="form-inline flex-container" onSubmit={Submit} >
                    
                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="allProducts" id="Products"  onChange={onAllProductChange}  value={allProducts}
                         disabled={Edible === "edible"? true : false} unChecked={Edible === "edible"? false : true } />	
                        <label for="Products" >All Products </label>
					</div>
                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="pEdible" id="Edible"  onChange={onEdibleChange} value={Edible} 
                        disabled={allProducts === "allProducts"? true : false} unChecked={allProducts === "allProducts"? false : true}
                        />
						<label for="Edible" >Edible </label>
					</div>
                	

					{Edible === "edible"?
                        <div className="form-group-select" >
                        <select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',
                            fontSize: '20px'}}
                            name="pCetegory" onChange={onCetegoryChange} value={cetegoryValue}>

                            {Cetegories.map(item => (
                                <option key={item.key} value={item.value}>{item.value} </option>
                            ))}

                            </select>
                        </div>
                       :
                       null 
                    }
                    
                    <div>
                        <button type="submit"  onSubmit={Submit}>Click me</button>
                    </div>
                </form>
            </div>
         </div>   
       
       
       
         </div>   
      

    );
}

export default ManageProducts;