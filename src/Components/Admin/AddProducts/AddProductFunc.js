import React from 'react';
import Axios from 'axios';
import {useCookies} from "react-cookie";

function useAddProductFunc(){

    const [cookie] = useCookies(['jwt']); 
    
    return async function(e)
    {
        e.preventDefault();
        try{
            const data={
              
            }
           console.log(e.target.pURL.value,)
            const res = await Axios.post('http://localhost:3000/api/v1/products/addProduct',{ 
                pTitle: e.target.pTitle.value,
                pCetegory : e.target.pCetegory.value,
                pPrice: e.target.pPrice.value,
                pStock : e.target.pStock.value,
                pOnSale: e.target.pOnSale.value,
                pEdible: e.target.pEdible.value,
                pImagePath:e.target.pURL.value,
                pDescription:e.target.pDescription.value,
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }

            });
            console.log(res);
            console.log(res.data);
        }
        catch(err){
            console.log(err);
            console.log(err.response);
        }
    }
}
export default useAddProductFunc;