import React, { useEffect, useState ,useContext } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import {Table} from 'antd';
import ProductTableJSX from './ProductTable';
import './productTable.css';
import { UserContext } from '../../userContext/UserContext';
import {useHistory} from 'react-router-dom'

function ManageProducts (){
    const history = useHistory();
	const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [cookie] = useCookies(['jwt']);  
  const [table,setTable] = useState();
  const [resProducts,setResProducts] = useState([]);
  const [Edible,setEdible] = useState(" ");
  const [nonEdible,setNonEdible] = useState(" ");
  const [cetegoryValue, setCetegoryValue] = useState(1);
  const [nonEdibleCetegoryValue, setNonEdibleCetegoryValue] = useState(1);
  const [allProducts,setAllProducts] = useState(" ");

  const edibleCetegories = [
    { key: 1, value: "Chips" },
    { key: 2, value: "Chocolate" },
    { key: 3, value: "Biscuit" },
    { key: 4, value: "Juice" },
    { key: 5, value: "Cold Drink" },
    { key: 6, value: "Cooking Ghee" },
    { key: 7, value: "Cooking Oil" },
    { key: 8, value: "Recipe Masalah" },
    { key: 9, value: "Spice" },
    { key: 10, value: "Herb" },
    { key: 11, value: "Grain" },
    { key: 12, value: "Souce" },
    { key: 13, value: "Kachup" },
    { key: 14, value: "Rice" },

]
const nonEdibleCetegories =[
    { key: 1, value: "Stationary" },
    { key: 2, value: "Beuty & Beuty" },
    { key: 3, value: "Perfume" },
    { key: 4, value: "Soap" },
    { key: 5, value: "Detergent" },
    { key: 6, value: "Surface Cleaner" },
    { key: 7, value: "Bathroom Cleaner" },
    { key: 8, value: "Tissue" },
    { key: 9, value: "Insect Killer" },
    { key: 10, value: "Electronic" },
    { key: 11, value: "Face Mask" },
    { key: 12, value: "Baby Pamper" },
    { key: 13, value: "Adult Pamper" }
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


    return(
    <>
     
    {userLoggedIn.length !== 0 ?
        <>
		{userLoggedIn.role === 'admin'?  
        <div  style={{marginTop:'70px'}}>
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
                        <select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',overflow:'scroll',
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
         <ProductTableJSX products={resProducts}/>
         </div>
        
       
         </div>   
      	:
          history.push({pathname:'/Home'})
                          }
          </>
	:
    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>Loading.....</h2>
                    </div> 
                    }
    </>

    );
}

export default ManageProducts;