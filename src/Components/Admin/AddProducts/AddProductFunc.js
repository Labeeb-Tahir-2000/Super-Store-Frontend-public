import React from 'react';
import Axios from 'axios';
import {useCookies} from "react-cookie";

export default function AddProductFunc(){

    const [cookie] = useCookies(['jwt']); 
    
    return async function(e)
    {
        e.preventDefault();
        try{
            const data={
                pTitle: e.target.pTitle.value,
                PCetegory : e.target.pCetegory.value,
                pPrice: e.target.pPrice.value,
                pStock : e.target.pCount.value,
                pOnSale: e.target.ponSale.value,
                pEdible: e.target.pedible.value,
                pImagePatch: e.target.URL,
                pDescription:e.target.pDescription.value,
            }
           
            const res = await Axios.post('http://localhost:3000/api/v1/products/addProduct',{ data },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie}`        
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