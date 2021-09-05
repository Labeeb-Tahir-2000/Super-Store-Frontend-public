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
	const [cetegoryValue, setCetegoryValue] = useState(1)
	const Cetegories = [
		{ key: 1, value: "Beans" },
		{ key: 2, value: "Lays" },
		{ key: 3, value: "Cold Drinks" },
		{ key: 4, value: "Biscuits" },
		{ key: 5, value: "Spices" },
		{ key: 6, value: "Deturjunts" },
		{ key: 7, value: "Sprays" }
	]
	const useAddProductFuncCall = useAddProductFunc();

	const onCetegoryChange = (event) => {
        setCetegoryValue(event.currentTarget.value)
    }
    
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
						<input type="text" className="form-control"  name="pTitle" placeholder="Prodcut Name"/>
					</div>

                    <div className="form-group">
						<input type="text" className="form-control"  name="pPrice" placeholder="Product Price"/>
					</div>

					<div className="form-group">
						<input type="text" className="form-control"  name="pDescription" placeholder="Product Decription"/>
					</div>
					
                    <div className="form-group">
						<input type="text" className="form-control" id="pCount" name="pStock" placeholder="Number of Products"/>
					</div>

					<div className="form-group-select" >
					
						<select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',
						fontSize: '20px',padding: 'none ',marginBottom:'3px !important',marginTop:'7px !important'}}
						name="pCetegory" onChange={onCetegoryChange} value={cetegoryValue}>

						{Cetegories.map(item => (
							<option key={item.key} value={item.value}>{item.value} </option>
						))}

               			</select>
					</div>

                    <div style={{paddingTop:'9px',paddingBottom:'0px'}}className="form-group login-group-checkbox "  >                 
					
						<input type="checkbox" className="" name="pEdible"  onChange={edibleChangeLisner} id='Edible' value={edible} />
						<label for="Edible" >Edible </label>
                       
						<input  type="checkbox" className="" name="pOnSale" onChange={saleChangeLisner} id="Sale"  value={sale}/>
						<label for="Sale">On Sale</label>
				
					</div>
					
                    <div className=" rounded form-group  ">
                    <input  style={{marginBottom:'8px'}} onChange={handleChange} className="pic" type="file" />
                    </div>
					
					{image?
					<div  className="form-group" >
					<input style={{marginTop:'8px',padding:'2px', width:'110%'}} type="button" className="btn btn-outline-primary btn-lg"  onClick={handleUpload}  value='Click here to upload the image'/>
                    <input style={{display:'none'}} role='button'   name="pURL" value={URL}/>
                    </div>
					:
					null
					}
					
				</div>
				<button type="submit" onSubmit={useAddProductFuncCall} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			
		</form>
	</div>
	<div style={{marginTop:'10px' , width:'100%', maxHeight:'240px'}}>
	<img style={{marginTop:'10px' , maxWidth:'250px', maxHeight:'240px' ,borderRadius:'50%'}}src={URL}/>
	</div>
    </div>
	
    );

}
export default AddProducts;
