import Axios from 'axios';
import {useContext} from 'react';
import {CartContext} from "../cartContext/cartContext";
import { useCookies } from 'react-cookie'; 
import { useHistory } from "react-router-dom";

function useBuyNow(){
  
    const history = useHistory();
    const [cartItem] = useContext(CartContext);
    const [cookie] = useCookies(['jwt']);        
return function(){
    try{
            const res=   Axios.post('http://localhost:3000/api/v1/users/setUserOrder',{products:cartItem},{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }}
            );
               
            console.log(res)
         
          
        }catch(err){
            if(err.response.data){
                console.log(err.response.data.message)
    
            }else{
   
            console.log(err)
            }
        }
    }
}
export default useBuyNow;
