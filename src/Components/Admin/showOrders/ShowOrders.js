import React, { useEffect, useState,useContext } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import OrdersTableJSX from './ordersTableJSX';
import { UserContext } from '../../userContext/UserContext';
import {useHistory} from 'react-router-dom'

function ManageProducts (){
    const history = useHistory();
	const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
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
        <>
		{userLoggedIn.role === 'admin'?  
        <div >
         <div >
         <OrdersTableJSX  users={[...users]} />
         </div>
         </div>
         	:
             history.push({pathname:'/Home'})
                             }
             </>
   
    );
}

export default ManageProducts;