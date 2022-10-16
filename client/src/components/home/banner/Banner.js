

import bannerOne from "../../../assets/pictures/bannerOne.png"
import bannerTwo from "../../../assets/pictures/bannerTwo.png"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Banner () {

    const bannerImages = [bannerOne,bannerTwo]

  return (
    <Swiper autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }} 
            modules={[EffectFade,Autoplay]} effect="fade"
    >
        {
            bannerImages.map(b=>(<SwiperSlide className="swiper-slide-active{z-index:999}">
                <img className="z-[-1]" src={b} alt="" />
            </SwiperSlide>))
        }
    </Swiper>
  );
};

// {[1, 2, 3].map((i, el) => {
//     return <SwiperSlide>Slide {el}</SwiperSlide>;
//   })}