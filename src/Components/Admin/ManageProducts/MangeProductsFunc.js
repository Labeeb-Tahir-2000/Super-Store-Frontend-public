import React, { useContext, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import ProductTable from './ProductTable';
import ProductContext from './ProductContext';
 function  ManageProductFunc (){
    const {setProduct} = useContext(ProductContext);
    const [cookie] = useCookies(['jwt']);  
    return async function(e)
    {
        try{ 
            e.preventDefault(); 
            const data={ 
                allProduct: e.target.AllProduct.value, 
                type : e.target.Type.value, 
               cetegories : e.target.Cetegories.value, 
                jwt : cookie.jwt, 
            } 
            const res= await Axios.get('https://jsonplaceholder.typicode.com/todos'); 
            //const res = await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/',{ data }); 
            setProduct(res.data); 
            console.log(res); 
            console.log(res.data); 
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.data); 
        } 
    }
}
export default ManageProductFunc;