import React from 'react';
import Fade from 'react-awesome-reveal'
import Imgslider from './Imgslider'
import Footer from './Footer';


function Home() {
  return (
    <div className=''>
           <Fade left>
            <div className='md:flex '>
              <div className='md:w-[50%] w-[100%] h-[20%] relative'>
                <img 
                className='w-full h-full object-cover transform-none'
                  src="/images/home-pictures.png" 
                  alt="photo" 
                />
              </div>
              <div className='md:w-[50%] w-[100%] h-1/2 relative'>
                <img 
                className='w-full h-full object-cover transform-none'
                  src="/images/home-picture-guy.png" 
                  alt="photo" 
                />
              </div>
            </div>
            </Fade>
          <Fade left>
           <div className='md:flex '>
              <div className='md:w-[50%] w-[100%] h-[20%] relative'>
                <img 
                className='w-full h-full object-cover transform-none'
                  src="/images/dress_home.png" 
                  alt="photo" 
                />
              </div>
              <div className='md:w-[50%] w-[100%] h-[20%] relative'>
                <img 
                className='w-full h-full object-cover transform-none'
                  src="/images/home-picture_1.png" 
                  alt="photo" 
                />
              </div>
           </div>
        </Fade>
        <div className=" bg-gray-200 p-3 mt-3 w-[60%] rounded-sm mx-auto flex justify-center ">
          <h3 className='text-xl font-[500] opacity-80'>Best Female and Male clothers </h3>
        </div>
        <Imgslider />
        <Footer />
    </div>
  )
}

export default Home