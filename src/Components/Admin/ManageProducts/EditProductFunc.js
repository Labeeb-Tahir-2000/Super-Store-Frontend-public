import React from 'react';
import Axios from 'axios';
import {useCookies} from "react-cookie";

function useEditProductFunc(){

    const [cookie] = useCookies(['jwt']); 
    
    return async function(e)
    {
        e.preventDefault();
        try{

           
            const res = await Axios.post('http://localhost:3000/api/v1/products/editProducts',{ 
                _id: e.target.pID.value,
                pTitle: e.target.pTitle.value === " " || e.target.pTitle.value === " "? undefined : e.target.pTitle.value,
                pCetegory : e.target.pCetegory.value === " " || e.target.pCetegory.value === null? undefined : e.target.pCetegory.value,
                pPrice: e.target.pPrice.value === " " || e.target.pPrice.value === null ? undefined : e.target.pPrice.value,
                pStock : e.target.pStock.value === " " || e.target.pStock.value === null ? undefined : e.target.pStock.value,
                pOnSale: e.target.pOnSale.value ,
                pEdible: e.target.pEdible.value ,
                pDescription: e.target.pDescription.value === " " || e.target.pDescription.value === null? undefined : e.target.pDescription.value,
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }

            });
            if(res.data.status === 'success'){
                alert('Successfuly Uploaded edited data');
            }else{
                alert('Error in Uploading edited data');
            }
            console.log(res);
            console.log(res.data);
        }
        catch(err){
            alert('Error in Uploading edited data');
            console.log(err);
            console.log(err.response);
        }
    }
}
export default useEditProductFunc;