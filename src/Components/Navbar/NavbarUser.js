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
        <Navbar className="navigation-bar "  expand="lg" bg="light" variant="light">
            <Link className="navbar-brand" style={style} to="/Home">Mehar Super Store</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse   id="basic-navbar-nav ">
     
                        {User.role === 'admin'?
                            <Nav  className=" mr-auto  ">
                                <Link style={style2} to="/Orders">Orders</Link>
                                <Link style={style2} to="/addProducts">Add Products</Link>
                                <Link style={style2} to="/ShowProducts">Show Products</Link>
                                <Link style={style2} to="/EditProducts">Edit Products</Link>
                                <a style={style2} onClick={useSignOut}><i class="fa fa-sign-out" aria-hidden="true"></i></a>
                                
                            </Nav>
                        :
                            <Nav  className=" mr-auto  ">
                                <Link style={style2} to="/Home">Home</Link>
                                <Link style={style2} to="/ChangeUserName">Change UserName</Link>
                                <Link style={style3}  to="/Cart"><FontAwesomeIcon style={{marginTop:"4px",}}icon={faShoppingCart}/>
                                <p style={{background:'yellow',padding:'0px 4px', marginLeft:'2px',borderRadius:'50%',color:'blueviolet',display:'inline'}}>{cartItemCount}</p>
                                </Link>
                                <a style={style2} onClick={useSignOut}><i class="fa fa-sign-out" aria-hidden="true"></i></a>
                            </Nav>
                         }
          
                </Navbar.Collapse>
        </Navbar>
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

