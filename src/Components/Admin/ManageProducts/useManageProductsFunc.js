import React, { useContext, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import ProductTable from './ProductTable';
import ProductContext from './ProductContext';
 function  useManageProductFunc (cetegory,allProducts,type){
    
     const {products,setProducts} = useState([]);
    // const {setProduct} = useContext(ProductContext);
    const [cookie] = useCookies(['jwt']);  
    return async function(e)
    {
        try{ 
            e.preventDefault(); 
            // const data={ 
            //     allProduct: e.target.AllProducts.value, 
            //     type :type, 
            //    cetegories :cetegory ,
            //     jwt : cookie.jwt, 
            // } 
            const res= await Axios.get('https://jsonplaceholder.typicode.com/todos'); 
            // const res = await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/',{ data }); 
            // setProducts(res.data); 
            // console.log(products); 
            console.log(res.data); 
            // console.log(e.target.AllProducts.value); 
            // console.log(cetegory); 
            // console.log(type); 
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.message); 
        } 
    }
}
export default useManageProductFunc;