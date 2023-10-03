import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function Imgslider() {
  let settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4, 
      autoplay: true
  };
  return (
    <Slider {...settings} className='mt-6 cursor-pointer'>
      <div className="w-[100%] h-[50%] px-[0px]">
        <img 
         className='w-full h-full object-cover hover:scale-[1.2]'
        src="/images/slider5.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[0px]'>
        <img 
         className='w-full h-full object-cover hover:scale-[1.2]'
        src="/images/slider4.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[0px] '>
        <img 
         className='w-full h-full object-cover hover:scale-[1.2]'
        src="/images/slider_women_2.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[0px]'>
        <img 
         className='w-full h-full object-cover hover:scale-[1.2]'
        src="/images/slider_women4.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[0px]'>
        <img 
         className='w-full h-full object-cover hover:scale-[1.2]'
        src="/images/slider_women_1.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[0px]'>
        <img
        className='w-full h-full object-cover hover:scale-[1.2]' 
        src="/images/women_slider.png" alt="" />
      </div>
    </Slider>
  )
}

export default  Imgslider
