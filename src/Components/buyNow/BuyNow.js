import React,{useState,useEffect,useContext} from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { CartContext } from "../cartContext/cartContext";
import CartProducts from './CartJSX';
import './buyNow.css';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function BuyNow(props){
  const history = useHistory();
    const  [showAddress, setShowAddress] = useState(false)
    const  [userAddress, setUserAddress] = useState();
    const [cartDisplay, setCartDisplay] = useState(false)
    const [cookie] = useCookies(['jwt']);
    const [cartItem , setCartItem] = useContext(CartContext);
    const [products , setProducts] = useState([]);
    const location = useLocation();
    const [count,setCount] = useState(0)
 
    useEffect(async() => {
      if(location.state){
     
        cartItemsRequestFunc(location.state)
        setCartDisplay(true)
      }else{
        cartItemsRequestFunc(cartItem);
      }
        addressRequestFunc();
      if(location.state){
          setCount(1)
    
      }else{
          setCount(cartItem.length)
      }
    }, [cartItem])
    const cartItemsRequestFunc=async(id)=>{
        try{
        const res = await  Axios.post('http://localhost:3000/api/v1/products/getCartProducts ',{id:id}, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
            }});
            
              setProducts(res.data.product);
              console.log(res.data.product)
            
            
          }catch(err){
            if(err.response){
              console.log(err.response.data.message)
            }else{
              console.log(err.message)
            }
           
          }
    }
    const addressRequestFunc= async()=>{
        try{
        const res= await  Axios.post('http://localhost:3000/api/v1/users/getUser',{},{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
        }});
        
            if(res.data  && res.data.status === "success" && res.data.user.address ){
              setUserAddress(res.data.user.address)
                setShowAddress(true)
            }
                
          }catch(err){
            if(err.response){
              console.log(err.response.data.message)
            }else{
              console.log(err.message)
            }
    }
}
const removeItem = (productId) => {
    const index=  cartItem.indexOf(productId);
    let arrayItems = [...cartItem];//hard copying array so to implement splice() on it 
   arrayItems.splice(index,1)
   setCartItem(arrayItems); // setting cartItem to spliced array
            
 }
 const cartProdcutsHeader = <div  className="row " style={{color:'white',paddingTop:'8px', paddingBottom:'0px',backgroundColor:'rgb(0, 191, 255)', display:'flex-inline' , justifyContent:'center',alignContent:'center'}}>
                              <div className='col-6' style={{ display:'flex',justifyContent:'start'}}>
                                <p><span style={{color:'black'}}>{count}</span> ITEM(s)</p>
                              </div>
                              <div className='col-6 ' style={{ display:'flex',justifyContent:'space-between',textAlign:'end'}}>
                                <p style={{ textAlign:'start'}}>PRICE</p>
                                <p style={{ textAlign:'end'}}>QUANTITY</p>
                              </div>
                            </div>
  
 
const cartProductsDisplay = products.map(item=>{
    return <CartProducts cartDisplay={cartDisplay} removeItem={removeItem} imageURL ={item.pImagePath} id={item._id} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>
        })

    return(
        <div className='container-fluid outSide' >
             {showAddress && products?
            <div className='row' style={{display:'flex-inline',position:'relative' , justifyContent:'space-between'}} >  
                 <div className='col-12 col-md-7 myCart ' style={{display:'flex',flexDirection:'column',background:'white'}}>
                  {!location.state && cartItem.length === 0?
                     history.push('/Home')
                  :
                  <div>
                  {cartProdcutsHeader}
                  {cartProductsDisplay} 
                  </div>
                  }
                   
                </div>
               
                <div className='col-12 col-md-5 myAddressBook'  style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:'5%'}}>
                    <div> <p>Name:{userAddress.name}</p> </div>
                    <div> <p>Contact Number:{userAddress.contact}</p> </div>
                    <div> <p>Address:{userAddress.address}</p> </div>
                    <div> <p>City:{userAddress.cityName}</p> </div>
                    <div> <p>Province:{userAddress.provinceName}</p> </div>
                   
                </div>
               
            </div>
             :
             null
             }
        </div>
    )
}
export default BuyNow;