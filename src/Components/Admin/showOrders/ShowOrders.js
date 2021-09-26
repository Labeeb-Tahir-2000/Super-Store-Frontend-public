import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import OrdersTableJSX from './ordersTableJSX'

function ManageProducts (){

  const [cookie] = useCookies(['jwt']);  
  const [users,setUsers] = useState([]);
useEffect(() => {
  getAllOrders()
}, [])
 
    const getAllOrders= async (ID)=>{
        
           try{
            const res = await Axios.post('http://localhost:3000/api/v1/users/allOrders',{ID },
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }
            }
            ); 
            console.log(res.data);     
         setUsers(res.data.users)
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.message); 
        }
    };



    return(
        
        <div >
      
        
         <div style={{paddingTop:'10px'}}>
         <OrdersTableJSX  users={[...users]} />
         </div>
         </div>
    );
}

export default ManageProducts;