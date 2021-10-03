import React,{useContext} from "react";
import {NavLink,Link} from "react-router-dom";
import "./Navbar.css";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import { useHistory } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../userContext/UserContext";





function MyNavbar(){
    const [User,setUser] = useState({})
    const [cookie,setCookie] = useCookies(['jwt']);
    const history = useHistory();
    const [cartItem , setCartItem] = useContext(CartContext)
    const cartItemCount = cartItem.length;
    const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState('')

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

            if(res.data  && res.data.status === "success" && res.data.user ){
                    setUser(res.data.user);
                    setUserLoggedIn(res.data.user)
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
        marginLeft:"12px",
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
    
  const searchChangeHandler=(event)=>{
    console.log(event.currentTarget.value)
    setSearchTerm(event.currentTarget.value)
   
  }
  // const RedirectToAllProducts=()=>{
  //    history.push({pathname:'/AllProducts', state:{searchTerm:searchTerm}})
  // }
    return(
        <>	
  
    {User !== {}?
    <>
     {cookie.jwt ?
       <div style={{position:'relatve'}}>
                        {User.role === 'admin'?
                       <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed',zIndex:'100',width:'100%',top:'0px'}}>
                    <Link className="navbar-brand" style={style} to="/Orders">Admin</Link>
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
                     
                           <ul className="navbar-nav  " style={{marginLeft:'10px ',padding:'0px', marginTop:'0px',marginRight:'17px '}} >
                             <li className="nav-item">
                                 <a className="nav-link "  onClick={useSignOut}>
                                 <i className="fa fa-sign-out"></i>
                                     SignOut
                                 </a>
                             </li>
                           </ul>
                           <form className="form-group row my-2 my-lg-0 " style={{paddingBottom:'0px',marginBottom:'0px'}}>
                             <div className=" form-group  search col-lg-12" style={{display:'flex',paddingBottom:'0px',marginBottom:'0px'}}>
                              <input  className=" form-control mr-sm-2 col-lg-9 col-md-12" type="text" placeholder="Search" aria-label="Search"/>
                              <button className="btn myButton my-2 my-sm-0 col-4 col-lg-3 " style={{color:'#F57224',background:'black',border:'1px solid #F57224'}}type="submit">Search</button>
                             </div>
                             
                           </form>
                       </div>
                    </nav>
                  :
                    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed',zIndex:'100',width:'100%',top:'0px'}}>
                       <Link className="navbar-brand" style={style} to="/Home">Mehar Super Store</Link>
                       <ul className="navbar-nav cartSmall" style={{position:'absolute',top:'10px',right:'90px'}}>
                        <li className="nav-item cart">
                              <Link className="nav-link " to="/Cart">
                                  <i class="fa fa-shopping-cart">
                                      <span class="badge badge-warning">{cartItemCount} </span>
                                  </i>
                                   
                              </Link>
                            </li>
                          </ul>  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse centered" id="navbarSupportedContent">
                      
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                              <Link to="/Home" className="nav-link" >
                                  <i class="fa fa-home"></i>
                                <span className="sr-only">(current)</span>
                                Home
                                </Link>
                            </li>
                            <li className="nav-item cart">
                              <Link className="nav-link " to="/Cart">
                                  <i class="fa fa-shopping-cart">
                                      <span class="badge badge-warning">{cartItemCount} </span>
                                  </i>
                                   Cart
                              </Link>
                            </li>
                           
                          </ul>
 
                            <ul className="navbar-nav rightSide  " style={{marginLeft:'15px ',marginRight:'19px ',padding:'0px', marginTop:'0px'}} >
                              <li className="nav-item dropdown"style={{marginRight:'10px'}}>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user"></i>
                                    User
                                    </a>
                                    <div className="dropdown-menu col-6 " aria-labelledby="navbarDropdown" style={{textAlign:'center',paddingLeft:'0px'}}>
                                        <Link className="dropdown-item " to="/PendingOrder">My Orders</Link>
                                        <Link className="dropdown-item " to="/ChangeUserName">Change UserName</Link>
                                    </div>
                              </li>

                              <li className="nav-item">
                                  
                                  <Link className="nav-link "  onClick={useSignOut}>
                                  <i className="fa fa-sign-out"></i>
                                      SignOut
                                  </Link>
                              </li>
                            </ul>
                            <form className="form-group row my-2 my-lg-0 " style={{paddingBottom:'0px',marginBottom:'0px'}}>
                              <div className=" form-group  search col-lg-12" style={{display:'flex',paddingBottom:'0px',marginBottom:'0px'}}>
                               <input  className=" form-control mr-sm-2 col-lg-9 col-md-12" type="text" placeholder="Search Product" onChange={searchChangeHandler}  name="search"/>
                              <Link  className=" myButton col-4 col-lg-3 " to={{pathname:'/AllProducts', state:`${searchTerm}`}} style={{color:'#F57224',background:'black',border:'3px solid #F57224'}}>Search</Link>
                              </div>
                              
                            </form>
                        </div>
                        
                       
                      </nav>
                         }
          
          </div>      
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

