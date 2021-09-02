import React,{Component} from 'react';
import "./../SignIn.css";
import addProductFunc from './AddProductFunc';

function AddProducts (){
	const submit = addProductFunc();
    return(
        <div className="text-center" style={{padding:'50px' }}>
	<div className="logo">Add Products</div>
	<div className="login-form-1">
		<form id="register-form" className="text-left" onSubmit={submit}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
                    
						<label for="reg_username" className="sr-only">Prodcut Name</label>
						<input type="text" className="form-control" id="reg_username" name="pName" placeholder="Prodcut Name"/>
					</div>

                    <div className="form-group">
						<label for="reg_fullname" className="sr-only">Product Price</label>
						<input type="text" className="form-control" id="reg_fullname" name="pPrice" placeholder="Product Price"/>
					</div>
        
					<div className="form-group">
						<label for="reg_password_confirm" className="sr-only">Product type</label>
						<input type="text" className="form-control" id="reg_password_confirm" name="pType" placeholder="Product type"/>
					</div>
					
					<div className="form-group">
						<label  className="sr-only">Product Cetegory</label>
						<input type="text" className="form-control"  name="pCetegory" placeholder="Product Cetegory"/>
					</div>
					
                    <div className="form-group">
						<label for="pCount" className="sr-only">Number of Products</label>
						<input type="text" className="form-control" id="pCount" name="pCount" placeholder="Number of Products"/>
					</div>
                   
                    <div className="form-group login-group-checkbox "  >                 
						<input type="checkbox" className="" name="onSale" id="Sale" />
						<label for="Sale">Edible </label>
                        
						<input  type="checkbox" className="" name="edible" id="Edible"/>
						<label for="Edible">On Sale</label>
					</div>

                    <div className=" rounded form-group  ">
                    <input  className="pic" type="file" name="image" accept="image/*" />
                    </div>
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			
		</form>
	</div>
    </div>
    );

}
export default AddProducts;