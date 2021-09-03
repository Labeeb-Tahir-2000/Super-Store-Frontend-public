import React,{Component} from 'react';
import "./../SignIn.css";
import useAddProductFunc from './AddProductFunc';
import { app }  from './../../firebase/firebaseConfig';
import { useState } from 'react';

function AddProducts (){
	const [image, setImage]= useState(null);
	const [sale, setSale]= useState(' ');
	const [edible, setEdible]= useState(' ');
	const [URL, setURL] = useState(' ');

	const useAddProductFuncCall = useAddProductFunc();

	const saleChangeLisner =()=>{
	if(sale === ' '){
		setSale('onSale');
	}else{
		setSale(' ');
	}

	}
	const edibleChangeLisner =()=>{
	if(edible === ' '){
		setEdible('edible');
	}else{
		setEdible(' ');
	}
}
	const handleChange = (e) => {

		 if (e.target.files[0]) {
		 const newImage = e.target.files[0];
		  setImage(newImage)
		  console.log(newImage);
		}else{
			console.log('no image');
		}
	  }

	 const  handleUpload = async () => {
	
		const storageRef = app.storage().ref('/images');
		const fileRef = storageRef.child(image.name);
		await fileRef.put(image);
		setURL(await fileRef.getDownloadURL());
		console.log(URL);
		 console.log(image.name);
	  console.log(image);
		
	 }

    return(
        <div className="text-center" style={{padding:'50px' }}>
	<div className="logo">Add Products</div>
	<div className="login-form-1">
		<form id="register-form" className="text-left"  onSubmit={useAddProductFuncCall}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
                    
						<label for="reg_username" className="sr-only">Prodcut Name</label>
						<input type="text" className="form-control"  name="pTitle" placeholder="Prodcut Name"/>
					</div>

                    <div className="form-group">
						<label for="reg_fullname" className="sr-only">Product Price</label>
						<input type="text" className="form-control"  name="pPrice" placeholder="Product Price"/>
					</div>

					<div className="form-group">
                    
						<label for="reg_username" className="sr-only">Prodcut Decription</label>
						<input type="text" className="form-control"  name="pDescription" placeholder="Product Decription"/>
					</div>
        	
					<div className="form-group">
						<label  className="sr-only">Product Cetegory</label>
						<input type="text" className="form-control"  name="pCetegory" placeholder="Product Cetegory"/>
					</div>
					
                    <div className="form-group">
						<label for="pCount" className="sr-only">Stock</label>
						<input type="text" className="form-control" id="pCount" name="pStock" placeholder="Number of Products"/>
					</div>
                   
                    <div className="form-group login-group-checkbox "  >                 
						<input type="checkbox" className="" name="pEdible"  onChange={edibleChangeLisner} id='Edible' value={edible} />
						<label for="Edible" >Edible </label>
                        
						<input  type="checkbox" className="" name="pOnSale" onChange={saleChangeLisner} id="Sale"  value={sale}/>
						<label for="Sale">On Sale</label>
					</div>

                    <div className=" rounded form-group  ">
                    <input  onChange={handleChange} className="pic" type="file"   />
                    </div>
					<div >
                    <input onClick={handleUpload} class="btn btn-outline-secondary" name="pURL" value={URL}/> {/* can not use button inside button this will also trigger outside button. so make upload button outside  or just use input tags*/}
                    </div>
				</div>
				<button type="submit" onSubmit={useAddProductFuncCall} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			
		</form>
	</div>
	<div className="container">
	<img src={URL}/>
	</div>
    </div>
	
    );

}
export default AddProducts;
