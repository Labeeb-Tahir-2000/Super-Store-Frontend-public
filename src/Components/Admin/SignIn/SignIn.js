import React, { useContext } from 'react';
import useLogin from './../../userHooks/useLogin';
import "./../SignIn.css";
import User from './../../userHooks/UserContext';
import { Link } from 'react-router-dom';

function Signin(){
    const login = useLogin();
	const {user} = useContext(User);
return(

<div className="text-center" style={{padding:'50px' }} >
	<div className="logo">login</div>
	<div className="login-form-1" style={{width:'400px'}}>
		<form id="login-form" className="text-left" onSubmit={login}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label for="lg_username" className="sr-only">Username</label>
						<input type="text" className="form-control"  name="email" placeholder="Email" style={{fontSize:'20px'}}/>
					</div>
					<div className="form-group">
						<label for="lg_password" className="sr-only">Password</label>
						<input type="password" className="form-control"  name="password" placeholder="password" style={{fontSize:'20px'}}/>
					</div>
					<div className="form-group login-group-checkbox">
						<input type="checkbox" id="lg_remember" name="lg_remember"/>
						<label for="lg_remember">remember</label>
					</div>
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>forgot your password? <Link to="/forget">click here</Link></p>
				<p>new user? <Link to="/signUp">create new account</Link></p>
			</div>
		</form>
	</div>	
</div>

)
};
export default Signin;