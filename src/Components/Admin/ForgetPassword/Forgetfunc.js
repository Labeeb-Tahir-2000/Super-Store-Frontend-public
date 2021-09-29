import Axios from 'axios';

export default  function forgetfunc(){
    return async function(e){
        e.preventDefault();
        try{
            const res=  await Axios.post('http://localhost:3000/api/v1/users/forgetPassword',{
                email: e.target.email.value});
                if(res.status === "200"){
                    alert('Token generated, goto your inbox!')
                }
                console.log(res)
        }
        catch(err){
            if(err.response) alert(err.response.data.message)    
            else alert(err)
        }
    }

}