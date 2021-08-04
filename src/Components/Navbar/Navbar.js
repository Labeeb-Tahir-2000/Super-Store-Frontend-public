import React from "react";
import {NavLink,Link} from "react-router-dom";
import {Nav , Navbar} from "react-bootstrap";
import "./Navbar.css";
// import styled from 'styled-components';



function MyNavbar(){
    const style={
        color:"red",
        marginLeft:"15px",
    }
    const style2={
        textDecoration:"none",
        color:"blue",
        padding:"10px",
       
    }
    
    return(
     
        <Navbar className="navigation-bar "  expand="lg" bg="light" variant="light">
        <Link className="navbar-brand" style={style} to="/">Mehar Super Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse   id="basic-navbar-nav ">
        <Nav  className=" mr-auto  ">
        <Link style={style2} to="/Admin">Login</Link>
        <Link style={style2} to="/ManageProducts">Manage-Products</Link>
        <Link style={style2} to="/ChangeUserName">Change UserName</Link>
        <Link style={style2} to="/addProducts">Add-Products</Link>
        <Link style={style2} to="/Home">Home</Link>
          <Link style={style2} to="/Sale">Sale</Link>
          <Link style={style2} to="/Cart">Cart</Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavbar;

