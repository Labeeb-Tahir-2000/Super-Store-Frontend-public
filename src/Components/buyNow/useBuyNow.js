import Axios from 'axios';
import {useContext} from 'react';
import {CartContext} from "../cartContext/cartContext";
import { useCookies } from 'react-cookie'; 
import { useHistory } from "react-router-dom";

function useBuyNow(props){
  
    const history = useHistory();
    const [cartItem,setCartItem] = useContext(CartContext);
    const [cookie] = useCookies(['jwt']);        
return async function(){

    try{
           let  items =[]
            {console.log('this is buy Now props',props)}
            if(props){
              items[0] = props;
            }else{
                items = [...cartItem]
            }
            const res=  await Axios.post('http://localhost:3000/api/v1/users/setUserOrder',{products:items},{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }}
            );
            if(res.data.status === 'success'){
                try{
                const res=  await Axios.post('http://localhost:3000/api/v1/products/editProductsCount',{products:items},{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${cookie.jwt}`        
                    }})
                   
                }catch(err){
                   return  alert(err)
                }
                document.getElementById('goToHome').style.display = 'inline';
                document.getElementById('addressCartFooter').style.display = 'none';
                document.getElementById('goToHome').style.opacity = '1';
               
                
            }
            // console.log(res)
         
          
        }catch(err){
            
            console.log(err)
            
        }
    }
}
export default useBuyNow;
