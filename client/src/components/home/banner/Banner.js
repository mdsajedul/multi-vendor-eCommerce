

import bannerOne from "../../../assets/pictures/bannerOne.png"
import bannerTwo from "../../../assets/pictures/bannerTwo.png"

import React from "react";
import Slider from "react-slick";


export default function Banner(){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <Slider {...settings}>
            <div>
                <img src={bannerOne} alt=''/>
            </div>
            <div>
                <img src={bannerTwo} alt='' />
            </div>
        </Slider>
    );
  }
