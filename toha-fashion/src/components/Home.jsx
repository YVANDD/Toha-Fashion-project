import React from 'react';
import Fade from 'react-awesome-reveal'
import Imgslider from './Imgslider'

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
        <Imgslider />
    </div>
  )
}

export default Home