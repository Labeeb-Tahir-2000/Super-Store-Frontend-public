import React,{useEffect,useContext,useState} from "react";
import { CartContext } from "../cartContext/cartContext";
import CartProducts from "./CartJSX";
import CartTable from "./cartTableJSX";
import {useCookies} from "react-cookie";
import Axios from 'axios';
import './cartJSX.css'

 function Cart(){
    const [cookie] = useCookies(['jwt']);
    const [cartItem,setCartItem] = useContext(CartContext)
    const [products , setProducts] = useState([])

    useEffect(() => {
    
    getProducts(cartItem)
    }, [cartItem])// must put cartItem state in here bcz it will re call useEffect when ever this state change 
    //so by this getProducts call on each time according to changed cartItem global state which is essential to call bcz when we remove product and 
   // cartItem state set to changed  by setCartItem it will call useEffect and call getProducts so products get that are not removed

    const  getProducts = async (id) =>{
      try{
        console.log(id)
      const res = await  Axios.post('http://localhost:3000/api/v1/products/getCartProducts ',{id:id}, {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.jwt}`        
        }});
        
          setProducts(res.data.product);
          console.log(res.data.product)
        
        
      }catch(err){
        console.log(err.response.data.message)
      }
    }
    const removeFromCart = (productId) => {
console.log(productId)
     setCartItem(cartItem.filter(item=> item !== productId))
             
  }

    const cartProductsDisplay = products.map(item=>{
return <CartProducts imageURL ={item.pImagePath} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>

    })
    return(
        <div >
  <div className='container' >
{cartProductsDisplay}
<CartTable product={[...products]} removeItem={removeFromCart}/>
  </div>
       
      </div>
    )
}
export default Cart;