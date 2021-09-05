import React from "react";
import {NavLink,Link} from "react-router-dom";
import {Nav , Navbar} from "react-bootstrap";
import "./Navbar.css";
import {useEffect} from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import { useHistory } from "react-router-dom";
// import styled from 'styled-components';



function MyNavbar(){
    const [cookie,setCookie] = useCookies(['jwt']);
    const history = useHistory();
    const style={
        color:"red",
        marginLeft:"15px",
    }
    const style2={
        textDecoration:"none",
        color:"blue",
        padding:"10px",
       
    }
    function useSignOut(){ 
        try{
                    setCookie('jwt',cookie, { path:'/' , expires : new Date(Date.now()) }); 
                    console.log('loggedout succesfully');
                    return history.push("/");
        }catch(err){
            console.log(err.message)
        }
    }
    
  
    return(
     
        <Navbar className="navigation-bar "  expand="lg" bg="light" variant="light">
        <Link className="navbar-brand" style={style} to="/Home">Mehar Super Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse   id="basic-navbar-nav ">
        <Nav  className=" mr-auto  ">
        <Link style={style2} to="/">Login</Link>
        <Link style={style2} to="/SignUp">SignUp</Link>
        <Link style={style2} to="/ChangeUserName">Change-UserName</Link>
        <Link style={style2} to="/forgetPassword">Forget-Password</Link>
        <Link style={style2} to="/addProducts">Add-Products</Link>
        <Link style={style2} to="/ManageProducts">Manage-Products</Link>
        <Link style={style2} to="/Home">Home</Link>
        <Link style={style2} to="/Sale">Sale</Link>
       
        <a style={style2} onClick={useSignOut}><i class="fa fa-sign-out" aria-hidden="true"></i></a>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavbar;

