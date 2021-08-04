import React from "react";
import MyNavbar from "./Components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route,Switch } from "react-router-dom";
import Sale from "./Components/Sale/Sale";
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import Signin  from "./Components/Admin/SignIn/SignIn";
import Forget  from "./Components/Admin/ForgetPassword/ForgetPassword";
import AddProducts  from "./Components/Admin/AddProducts/AddProducts";
import ManageProducts from "./Components/Admin/ManageProducts/ManageProducts";
import ChangeUserName   from "./Components/Admin/ChangeUserName/ChangeUserName";

function App() {
  return (
    <div className = "App">
      <Router>
      <MyNavbar/> 
    <Switch>   
     
      <Route path = "/" exact>
          <About/>
      </Route>
      <Route path = "/Home" exact>
        <Home/>
      </Route>
      <Route path = "/ManageProducts" exact>
        <ManageProducts/>
      </Route>
      <Route path = "/Home" exact>
        <Home/>
      </Route>
      <Route path = "/ChangeUserName" exact>
        <ChangeUserName/>
      </Route>
      <Route path = "/addProducts" exact>
          <AddProducts/>
      </Route>
      <Route path = "/Admin" exact>
        <Signin/>
      </Route>
      <Route path = "/Sale" exact>
        <Sale/>
      </Route>
      <Route path = "/forget" exact>
        <Forget/>
      </Route>

    </Switch>
      </Router>
    </div>
  );
}

export default App;
