import React from 'react';
import useSignUp from '../../userHooks/useSignUp';
import "./../SignIn.css";

function  SignUp(){
    const signUp = useSignUp();
    return(
<div className="text-center" style={{padding:'50px'  }}>
	<div className="logo">Sign Up</div>
	 <div className="login-form-1" style={{width:'400px'}} >
		<form id="login-form" className="text-left" onSubmit={signUp}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label for="lg_username" className="sr-only">Name</label>
						<input type="text" className="form-control"  name="name" placeholder="name" style={{fontSize:'20px'}}/>
					</div>
                    <div className="form-group">
						<label for="lg_password" className="sr-only">Username</label>
						<input type="email" className="form-control"  name="email" placeholder="username"style={{fontSize:'20px'}}/>
					</div>
					<div className="form-group">
						<label for="lg_password" className="sr-only">Password</label>
						<input type="password" className="form-control"  name="password" placeholder="password" style={{fontSize:'20px'}}/>
					</div>
                    <div className="form-group">
						<label for="lg_password" className="sr-only">Confrirm Password</label>
						<input type="password" className="form-control"  name="confirmPassword" placeholder="confirm password" style={{fontSize:'20px'}}/>
					</div>
				</div>
				<button type="submit" onSubmit={signUp} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
		</form>
	</div>	
</div>
    )
}
export default SignUp;