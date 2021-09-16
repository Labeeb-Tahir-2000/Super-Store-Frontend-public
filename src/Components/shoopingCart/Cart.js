import React,{useEffect,useContext,useState} from "react";
import { CartContext } from "../cartContext/cartContext";

 function Cart(){
    const [cartItem , setCartItem] = useContext(CartContext)
    // useEffect(() => {
    //     console.log(cartItem)
    // }, [])
    return(
        <div>
  
        {console.log(cartItem)}
      </div>
    )
}
export default Cart;