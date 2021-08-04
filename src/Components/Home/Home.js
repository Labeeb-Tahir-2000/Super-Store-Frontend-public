import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Sale from "../Sale/Sale.js";
import ImageSLider from "./Sliders/ImageSlider";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

import DiscountSLider from "./Sliders/DiscountSlider"

const Home =()=>{
    return(
  <div>
       <ImageSLider/>
      <DiscountSLider/>
  </div>
    );

}
export default Home;