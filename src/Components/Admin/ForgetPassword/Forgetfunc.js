import Axios from 'axios';

export default  function forgetfunc(){
    return async function(e){
        e.preventdefault();
        try{
            const res =  await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/forget-password',{
                email: e.target.email.value});
                if(res.status === "200"){
                    alert('Token generated, goto your inbox!')
                }
        }
        catch(err){
            if(err.response)
            alert(err.response.data.message)
            else alert(err)
        }
    }

}