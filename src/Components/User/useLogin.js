
import Axios from 'axios';
import {useContext} from 'react';
import User from "./UserContext";
import { useCookies } from 'react-cookie'; // package to set and store cookies on frontend 


/*  cookies.set('jwt',res.data.jwt) will set or making cookie by putting token value 'which is coming from API's object data' into our custon made and named jwt */
function useLogin(){
    const {setUser} = useContext(User);
    const [cookie, setCookie] = useCookies(['jwt']);        

    return async function(e){
        const d= new Date();
         d.setDate(7);

       
        e.preventDefault();
        try{
            // const res=  await Axios.post('http://localhost:3000/api/v1/users/signin',{

            const res=  await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/sign-in',{
                email: e.target.email.value,
                password: e.target.password.value
            });
                
                setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) }); 
                console.log(cookie);

            console.log(res)
            console.log(res.data)
        }
        catch(err){
            console.log(err)
            console.log(err.message)
        }
    }
      
}
export default useLogin;