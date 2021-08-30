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
                name: e.target.pName.value,
                type : e.target.pType.value,
                cetegory : e.target.pCetegory.value,
                price: e.target.pPrice.value,
                noOfItems : e.target.pCount.value,
                onSale: e.target.OnSale.value,
                edible: e.target.Edible.value,
                picture: e.target.image.value,
                jwt : cookie.jwt,
            }
           
            const res = await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin',{ data });
            console.log(res);
            console.log(res.data);
        }
        catch(err){
            console.log(err);
            console.log(err.response);
        }
    }
}