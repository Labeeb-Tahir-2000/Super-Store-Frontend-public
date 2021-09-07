import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useContext} from 'react';
import {BrowserRouter as Router , Route,Switch ,Redirect} from "react-router-dom";
import NavbarUser from "./Components/Navbar/NavbarUser";
import NavbarAdmin from "./Components/Navbar/NavbarAdmin";
import Sale from "./Components/Sale/Sale";
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import Signin  from "./Components/Admin/signIn/SignIn";
import Forget  from "./Components/Admin/forgetPassword/ForgetPassword";
import AddProducts  from "./Components/Admin/addProducts/AddProducts";
import ShowProducts from "./Components/Admin/manageProducts/ShowProducts";
import EditProducts from "./Components/Admin/manageProducts/EditProducts";
import ChangeUserName   from "./Components/Admin/changeUserName/ChangeUserName";
import SignUp from "./Components/Admin/signUp/SignUp";



function App() {
  // const context = useContext(userContext);
  
  return (
    <div className = "App">
   <Router>
     <NavbarAdmin/>
    <Switch>   
    <Route path = "/" exact>
        <Signin/>
      </Route>
      <Route path = "/SignUp" exact>
        {/* {context.user.role === 'user' ? <NavbarAdmin/> : <NavbarUser/>} */}
        <SignUp/>
      </Route>
      <Route path = "/forgetPassword" exact>
        <Forget/>
      </Route>
      <Route path = "/ChangeUserName" exact>
        <ChangeUserName/>
      </Route>
      <Route path = "/Home" exact>
        <Home/>
      </Route>
      <Route path = "/ShowProducts" exact>
        <ShowProducts/>
      </Route><Route path = "/EditProducts" exact>
        <EditProducts/>
      </Route>
      <Route path = "/addProducts" exact>
          <AddProducts/>
      </Route>
      <Route path = "/Sale" exact>
        <Sale/>
      </Route>
      <Route path = "/about" exact>
          <About/>
      </Route>
    </Switch>
      </Router>
    </div>
  );
}

export default App;
