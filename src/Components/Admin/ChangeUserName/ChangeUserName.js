import Axios from "axios";
import {useCookies} from "react-cookie";
import "./../SignIn.css";
function ChangeUserName(){
    const [cookie] = useCookies(['jwt']);        
       

    function changefunc(){
        
        return async function(e){
            e.preventDefault();
         
            try{
                    const res = await Axios.post('https://super-store-backend.herokuapp.com/api/v1/admin/change-email',{
                    newEmail: e.target.Email.value,
                    password: e.target.password.value,   
                    jwt :cookie.jwt,                       
                });
                    console.log(res)
                    console.log(res.data) }      
            catch(err){
                console.log(err)
                console.log(err.response) }
          }
        }
    return(
        <div className = "text-center" >
        <div className = "logo"style={{color:'#F57224'}}>Change password</div>   
          <div className="login-form-1">
            <form className="text-left" onSubmit={changefunc()}> 

                   <div className="main-login-form">
                      <div className="login-group">
                      
                      <div className="form-group">
                              <label for="fp_email" className="sr-only">Enter Password</label>
                              <input type="password" className="form-control"  name="password" placeholder="Password"/>
                          </div>
                          <div className="form-group">
                              <label for="fp_email" className="sr-only">Enter New Email address</label>
                              <input type="email" className="form-control"  name="Email" placeholder="New email address"/>
                          </div>
                    
                      <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                  </div>
                  </div>
              </form>
          </div>
      </div>
    )
}
export default ChangeUserName;