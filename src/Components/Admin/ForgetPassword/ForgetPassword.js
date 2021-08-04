import  React from "react";
import "../SignIn.css";
import Forgetfunc from "./Forgetfunc.js";
function forget(){
     const style={
        padding:"50px",
    }
    
    return(
        <div className = "text-center" style = {style}>
          <div className = "logo">forgot password</div>
            
            <div className="login-form-1">
                <form onSubmit={Forgetfunc} id="forgot-password-form" className="text-left">
                    <div className="etc-login-form">
                        <p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
                    </div>
                    <div className="login-form-main-message"></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label for="fp_email" className="sr-only">Email address</label>
                                <input type="text" className="form-control" id="fp_email" name="fp_email" placeholder="email address"/>
                            </div>
                        </div>
                        <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
};
export default forget;
