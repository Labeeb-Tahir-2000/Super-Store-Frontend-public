
import Axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

function UseSignUp(){
   const [cookie,setCookie] = useCookies(['jwt']);
   const history = useHistory();
    return async function(e){
    try
      {
        e.preventDefault();
        // const data={
        //     name :e.target.name.value,
        //    email :e.target.email.value,
        //     password :e.target.password.value,
        //     confirmPassword:e.target.confirmPassword.value
        // }
       const res =await Axios.post('http://localhost:3000/api/v1/users/signup',{
        name :e.target.name.value,
        email :e.target.email.value,
         password :e.target.password.value,
         confirmPassword:e.target.confirmPassword.value
       });
       setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) }); 
       console.log(cookie);
       console.log(res.data)
       if(res.data && res.data.jwt && res.data.status === "success") return history.push("/Home");
    }
    catch(err){
        console.log(err)
        console.log(err.message)
    }
    }
}
export default UseSignUp;
