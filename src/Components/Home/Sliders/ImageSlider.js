import React from "react";

import {Carousel} from '3d-react-carousal';


const ImageSlider =()=>{
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    const style={
        backgroundColor:"#2A2F3F",
        padding:"20px",
    }
    return(
        <div style={style}  className="container-fluid">
 <Carousel  slides={slides} autoplay={true} interval={2000}/>
        </div>

    );

}
export default ImageSlider;