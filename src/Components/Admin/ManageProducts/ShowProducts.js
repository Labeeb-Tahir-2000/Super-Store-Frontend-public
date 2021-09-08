import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import {Table} from 'antd';
import ProductTableJSX from './ProductTable';
import './productTable.css';

function ManageProducts (){

  const [cookie] = useCookies(['jwt']);  
  const [table,setTable] = useState();
  const [resProducts,setResProducts] = useState([]);
  const [Edible,setEdible] = useState(" ");
  const [nonEdible,setNonEdible] = useState(" ");
  const [cetegoryValue, setCetegoryValue] = useState(1);
  const [nonEdibleCetegoryValue, setNonEdibleCetegoryValue] = useState(1);
  const [allProducts,setAllProducts] = useState(" ");

  const edibleCetegories = [
    { key: 1, value: "Beans" },
    { key: 2, value: "Lays" },
    { key: 3, value: "Cold Drinks" },
    { key: 4, value: "Biscuits" },
    { key: 5, value: "Spices" },
    { key: 6, value: "Cooking Oil" },
    { key: 7, value: "Chocolate" },

]
const nonEdibleCetegories = [
    { key: 1, value: "Deturjunts" },
    { key: 2, value: "Sprays" },
    { key: 3, value: "Stationary" },
    
]

   const  onEdibleChange=()=>{
       if(Edible === " "){
        setEdible("edible")
       }else if(Edible === "edible"){
        setEdible(" ")
       }
       
     }
     const  onNonEdibleChange=()=>{
        if(nonEdible === " "){
         setNonEdible("nonEdible")
        }else if(nonEdible === "nonEdible"){
         setNonEdible(" ")
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
    const onNonEdibleCetegoryChange = (event) => {
        setNonEdibleCetegoryValue(event.currentTarget.value)
    }
    
    const Submit= async (e)=>{
         if(e.target.pEdible.value  === " " && e.target.allProducts.value  === " " && e.target.pNonEdible.value  === " "){
                return alert("please select any filter!")
            }
            e.preventDefault(); 
            let data = {};
            if(e.target.allProducts.value === "allProducts"){
                data={}
            }else if(e.target.pEdible.value === "edible"){
                data={
                pEdible :e.target.pEdible.value, 
                pCetegory :e.target.pCetegory.value 
                }
            }else if(e.target.pNonEdible.value === "nonEdible"){
                data={
                pEdible : " ",
                pCetegory :e.target.pNonEdibleCetegory.value
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
           setResProducts(res.data.product)
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.message); 
        }
    };

    const productTableDisplay = resProducts.map(item=>{
        return <ProductTableJSX pTitle={item.pTitle} pID={item._id} pCetegory={item.pCetegory} pPrice={item.pPrice} pEdible={item.pEdible}
         pOnSale={item.pOnSale} pImagePath={item.pImagePath} pStock={item.pStock} pDescription={item.pDescription} />
    })
    



    return(
        
        <div >
         <div className="container-fluid myFilterBar row myForm" style={{paddingTop:'20px', paddingBottom:'20px', paddingLeft:'30px',margin:'0px' }} >
            <div className="col-sm-12">
                <form  className="form-inline flex-container myForm" onSubmit={Submit} >
                    
                    <div className="form-group login-group-checkbox " style={{paddingLeft:'0px '}}   >
						<input  style={{paddingLeft:'0px '}} type="checkbox"  name="allProducts" id="Products"  onChange={onAllProductChange}  value={allProducts}
                         disabled={Edible === "edible" || nonEdible === "nonEdible" ? true : false}  />	
                        <label for="Products" >All Products </label>
					</div>

                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="pNonEdible" id="nonEdible"  onChange={onNonEdibleChange} value={nonEdible} 
                        disabled={allProducts === "allProducts" || Edible === "edible"? true : false} 
                        />
						<label for="nonEdible" >Non Edible </label>
					</div>

                    <div className="form-group login-group-checkbox "  >
						<input type="checkbox"  name="pEdible" id="Edible"  onChange={onEdibleChange} value={Edible} 
                        disabled={allProducts === "allProducts"|| nonEdible === "nonEdible" ? true : false} 
                        />
						<label for="Edible" >Edible </label>
					</div>
                	
                    {nonEdible === "nonEdible"?
                        <div className="form-group" >
                        <select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',
                            fontSize: '20px'}}
                            name="pNonEdibleCetegory" onChange={onNonEdibleCetegoryChange} value={nonEdibleCetegoryValue}>

                            {nonEdibleCetegories.map(item => (
                                <option key={item.key} value={item.value}>{item.value} </option>
                            ))}

                            </select>
                        </div>
                       :
                       null 
                    }

					{Edible === "edible"?
                        <div className="form-group" >
                        <select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',
                            fontSize: '20px'}}
                            name="pCetegory" onChange={onCetegoryChange} value={cetegoryValue}>

                            {edibleCetegories.map(item => (
                                <option key={item.key} value={item.value}>{item.value} </option>
                            ))}

                            </select>
                        </div>
                       :
                       null 
                    }
                    
                    <div>
                        <button type="submit"    onSubmit={Submit}>Aplly Filter</button>
                    </div>
                </form>
            </div>
         </div>  
         <div style={{paddingTop:'10px'}}>
         {productTableDisplay}
         </div>
        
       
         </div>   
      

    );
}

export default ManageProducts;