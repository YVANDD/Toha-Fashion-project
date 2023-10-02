import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3, 
      autoplay: true
  };
  return (
    <Slider {...settings} className='my-6'>
      <div className="w-[100%] h-[50%] px-[2px]">
        <img 
         className='w-full h-full object-cover'
        src="/images/slider5.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[2px]'>
        <img 
         className='w-full h-full object-cover'
        src="/images/slider4.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[2px] '>
        <img 
         className='w-full h-full object-cover'
        src="/images/slider3.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[2px]'>
        <img 
         className='w-full h-full object-cover'
        src="/images/slider2.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[2px]'>
        <img 
         className='w-full h-full object-cover'
        src="/images/slider.png" alt="" />
      </div>
      <div className='w-[100%] h-[50%] px-[2px]'>
        <img
        className='w-full h-full object-cover' 
        src="/images/women_slider.png" alt="" />
      </div>
    </Slider>
  )
}

export default  Imgslider