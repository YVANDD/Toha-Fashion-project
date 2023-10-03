import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className=' bg-black  text-white py-12 px-20'>
       <div  className='w-full max-h-[60%] items-center  flex space-x-4 gap-12 max-md:flex-col  mt-[-4px]'>
       <div className="about-us max-md:ml-[-8rem] lg:mt-[7rem] pl-28">
          <h3 className='font-[600] text-lg py-4'>Toha <span className='text-red-400 font-[800]'>Fashion</span></h3>
          <p className='w-[300px]'>
            Get clothers ready for the new term at your Toha Fashion store. Find Your perfect Size in Store, Get Rewards
          </p>
          <div className="social_media my-4 opacity-80 ">
            <h2 className='my-2'>Follow Us on Our Social Media</h2>
            <div className='flex gap-3 pt-3'>
              <div className='w-12 h-12  bg-white text-black p-2 rounded-full flex items-center justify-center'>
                <a 
                className=' font-[600]'
                href="https://instagram.com/toha_fashion_design?igshid=YmM0MjE2YWMzOA==" target='_blank'>
                  <InstagramIcon className='text-2xl'/>
                </a>
              </div>
              <div className='w-12 h-12  bg-white text-black p-2 rounded-full flex items-center justify-center'>
                <a 
                className=' font-[600]'
                href="https://instagram.com/toha_fashion_design?igshid=YmM0MjE2YWMzOA==" target='_blank'>
                  <FacebookIcon className='text-2xl'/>
                </a>
              </div>
              <div className='w-12 h-12  bg-white text-black p-2 rounded-full flex items-center justify-center'>
                <a 
                className=' font-[600]'
                href="https://instagram.com/toha_fashion_design?igshid=YmM0MjE2YWMzOA==" target='_blank'>
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
       </div>
       <div className='flex gap-7 justify-between flex-1 flex-wrap pt-20      ml-[-2rem]'>
          <div className="products">
            <h2 className='font-[600] text-2xl py-4 hover:opacity-75'>Products</h2>
            <ul className=''>
              <li className='hover:opacity-70'>Lorem</li>
              <li className='hover:opacity-70'>Lorem</li>
              <li className='hover:opacity-70'>Lorem</li>
              <li className='hover:opacity-70'>Lorem</li>
              <li className='hover:opacity-70'>Lorem</li>
            </ul>
          </div>
          <div className="products">
            <h2 className='font-[600] text-2xl py-4 hover:opacity-75'>Help</h2>
            <ul>
              <li className='hover:opacity-70'>About Us</li>
              <li className='hover:opacity-70'>FAQs</li>
              <li className='hover:opacity-70'>How it works</li>
              <li className='hover:opacity-70'>Privacy policy</li>
              <li className='hover:opacity-70'>Payment policy</li>
            </ul>
          </div>
          <div className="products cursor-pointer">
            <h2 className='font-[600] text-2xl py-4 hover:opacity-75'>Get in Touch</h2>
            <h4>nyvan80076@gmail.com</h4>
            <p>+250780076941</p>
          </div>
       </div>
      </div>
      <div className='py-8 flex justify-between items-center flex-wrap         '>
        <h2>
        <CopyrightIcon /> <span>Copyright. All rights reserved.</span>
        </h2>
        <p>Terms and Condition</p>
      </div>
    </div>
  )
}

export default Footer