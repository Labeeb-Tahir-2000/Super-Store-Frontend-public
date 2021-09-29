import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route,Switch } from "react-router-dom";
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
import SaleSlider from "./Components/Home/Sliders/SaleSlider";
import Cart from "./Components/shoopingCart/Cart";
import ShowMore from './Components/Home/filterBar/utilits/ShowMoreCetegories';
import CetegoryProducts from './Components/Home/filterBar/CetegoryProducts';
import ShippingAddressPage from './Components/shipping/shippingAddress';
import BuyNow from './Components/buyNow/BuyNow';
import {ProviderFunc} from './Components/cartContext/cartContext';
import {UserProviderFunc} from './Components/userContext/UserContext';
import Orders from './Components/Admin/showOrders/ShowOrders';
import UserOrderDetails from './Components/Admin/showOrders/UserOrderDetails';
import PendingOrder from './Components/pendingOrder/PendingOrder.js'

function App() {
  
  
  return (
    <div className = "App">
<UserProviderFunc>    
<ProviderFunc>    
   <Router>
     <NavbarAdmin/>
    <Switch>   
      <div className='outer'>

    <Route path = "/" exact>
        <Signin/>
      </Route>

      <Route path = "/signUp" exact>
        <SignUp/>
      </Route>
   
        <Route path = "/shippingPage" exact>
        <ShippingAddressPage/>
        </Route>
        <Route path = "/BuyNow" exact>
        <BuyNow/>
        </Route>
        
      <Route path = "/forgetPassword" exact>/shippingPage
        <Forget/>
      </Route>
      <Route path = "/Cart" exact>
        <Cart/>
        </Route>
        <Route path = "/PendingOrder" exact>
        <PendingOrder/>
        </Route>
        <Route path = "/ChangeUserName" exact>
        <ChangeUserName/>
      </Route>
      <Route path = "/ShowMore" exact>
        <ShowMore/>
      </Route>
      <Route path = "/Home" exact>
        <Home/>
      </Route>
      <Route path = "/Sale" exact>
        <Sale/>
      </Route>
      <Route path = "/about" exact>
          <About/>
      </Route> 
      {/* routing component with sending data as props in it from <Link/> */}
      <Route path="/CetegoryProducts"  render={(props) => <CetegoryProducts {...props}/>}/> 
     
      </div> 
      </Switch>
      <Switch>
        <Route path = "/Orders" exact>
        <Orders/>
        </Route>
        <Route path = "/userOrderDetails" exact>
        <UserOrderDetails/>
        </Route>         
      <Route path = "/ShowProducts" exact>
        <ShowProducts/>
      </Route>
      <Route path = "/EditProducts" exact>
        <EditProducts/>
      </Route>
      <Route path = "/addProducts" exact>
          <AddProducts/>
      </Route>
     
</Switch>
    
      </Router>
</ProviderFunc>  
</UserProviderFunc> 
    </div>
  );
}

export default App;
