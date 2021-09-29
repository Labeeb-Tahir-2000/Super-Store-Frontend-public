import React,{useContext} from "react";
import {NavLink,Link} from "react-router-dom";
import {Nav , Navbar} from "react-bootstrap";
import "./Navbar.css";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import { useHistory } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';





function MyNavbar(){
    const [User,setUser] = useState({})
    const [cookie,setCookie] = useCookies(['jwt']);
    const history = useHistory();
    const [cartItem , setCartItem] = useContext(CartContext)
    const cartItemCount = cartItem.length;

    useEffect(() => {
      getUser()
    }, [cookie])

    const getUser= async()=>{
        try{
        const res= await  Axios.post('http://localhost:3000/api/v1/users/getUser',{},{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
        }});
        console.log('bye',res.data.user)
            if(res.data  && res.data.status === "success" && res.data.user ){
                    setUser(res.data.user)
              }
           
          }catch(err){
            if(err.response){
              console.log(err.response.data.message)
            }else{
              console.log(err.message)
            }
    }
}
    const style={
        color:"red",
        marginLeft:"15px",
    }
    const style2={
        textDecoration:"none",
        color:"blue",
        padding:"10px",
       
    }
    const style3={
        textDecoration:"none",
        color:"blue",
        padding:"10px",
       display:'flex',
       justifyContent:'center',
       
    }
    function useSignOut(){ 
        try{
                    setCookie('jwt',cookie, { path:'/' , expires : new Date(Date.now()) }); 
                    setCartItem([])
                    
                    console.log('loggedout succesfully');
                    return history.push("/");
        }catch(err){
            console.log(err.message)
        }
    }
    
  
    return(
        <>	
  
    {User !== {}?
    <>
     {cookie.jwt ?
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" href="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse centered" id="navbarSupportedContent">
      
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to="/Orders" className="nav-link" >
            <img className='fa' style={{width:'40px', height:'29px',paddingBottom:'0px', marginBottom:'0px' }} src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-delivery-box-shopping-and-ecommerce-itim2101-lineal-color-itim2101.png"/>
              <span className="sr-only">(current)</span>
              Orders
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/ShowProducts">
            <img className='fa' style={{width:'40px', height:'29px',paddingBottom:'0px', marginBottom:'0px'}} src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-product-business-model-canvas-wanicon-lineal-color-wanicon.png"/>
                All Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addProducts">
            <i className="fa fa-plus-square"></i>
              Add Products
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link " to="/EditProducts">
            <i className="fa fa-edit"></i>
                Edit Products
            </Link>
          </li>
        </ul>
    
          <form className="form-group row my-2 my-lg-0 " style={{paddingTop:'10px',paddingBottom:'0px',marginBottom:'0px'}}>
            <div className=" form-group  search col-lg-12" style={{display:'flex',paddingBottom:'0px',marginBottom:'0px'}}>
             <input  className=" form-control mr-sm-2 col-lg-9 col-md-12" type="text" placeholder="Search" aria-label="Search"/>
             <button className="btn myButton my-2 my-sm-0 col-4 col-lg-3 " style={{color:'#F57224',background:'black',border:'1px solid #F57224'}}type="submit">Search</button>
            </div>
            
          </form>
          <ul className="navbar-nav  " style={{marginLeft:'10px ',padding:'0px', marginTop:'0px'}} >
            <li className="nav-item">
                <a className="nav-link "  onClick={useSignOut}>
                <i className="fa fa-sign-out"></i>
                    SignOut
                </a>
            </li>
          </ul>
        
      </div>
    </nav>
:
history.push({pathname:'/'})
        }
  </>      
:
null
}
</>     
    )
}
export default MyNavbar;


