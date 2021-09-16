
import Axios from 'axios';
import {useContext} from 'react';
import User from "./UserContext";
import { useCookies } from 'react-cookie'; // package to set and store cookies on frontend 
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";


/*  cookies.set('jwt',res.data.jwt) will set or making cookie by putting token value 'which is coming from API's object data' into our custon made and named jwt */
function useLogin(){
    // const userContext = React.createContext();
    const history = useHistory();
    const {user,setUser} = useContext(User);
    const [cookie, setCookie] = useCookies(['jwt']);        

    return async function(e){
        const d= new Date();
         d.setDate(7);

       
        e.preventDefault();
        try{
            const res=  await Axios.post('http://localhost:3000/api/v1/users/signin',{

            // const res=  await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/sign-in',{
                email: e.target.email.value,
                password: e.target.password.value
            });
                setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) }); 
                setUser(res.data);

                if(res.data && res.data.jwt && res.data.status === "success") return history.push("/Home");
          
        }catch(err){
            if(err.response.data){
             document.getElementById('errMessage').innerHTML = err.response.data.message;
            }else{
            document.getElementById('errMessage').innerHTML = err;
            document.getElementById('errMessage').style.visibility = 'visible';
            
            }
        }
    }

      
}
export default useLogin;
// export default useLoginstatic axiosInstance =  axios.create({
//     baseURL: "BASE_API_URL",
//     timeout: 5000,
//     headers: {
//       'Authorization': "JWT_TOKEN",
//       'Content-Type': 'application/json'
//     }
//   }); 