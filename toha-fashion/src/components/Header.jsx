import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Favorite from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Fade from 'react-awesome-reveal'

function Header() {
  return (
    <div className=' '>
      <div className="w-full h-[80vh] relative"> 
        <div className=" w-full h-[80vh] object-cover hover:bg-top  bg-center   bg-no-repeat bg-cover bg-[url('/images/photo-front.png')]   transition-all ">
          <div className=" w-full h-12 hover:bg-white flex items-center justify-between px-6 cursor-pointer hover:text-black text-white      z-[999]">
           <div className='flex gap-6 ml-20  text-sm font-[500] max-lg:hidden '>
             <a href="#" className='relative'  >
               <span className='before:content-[""]  before:h-[2px]  before:bg-black before:absolute before:left-0 before:right-0 before:bottom-[-13px] before:w-9  transition-all origin-top-right before:opacity-0 hover:before:opacity-100'>Shop</span>
             </a>
             <a href="#" className='relative' >
               <span className='before:content-[""]  before:h-[2px]  before:bg-black before:absolute before:left-[0]  before:right-[20%] before:bottom-[-13px] before:w-16 ransition-all origin--top-right before:opacity-0 hover:before:opacity-100 '>Collection</span>
             </a>
             <a href='' className='relative'>
               <span className='before:content-[""]  before:h-[2px]  before:bg-black before:absolute before:left-0 before:right-0 before:bottom-[-13px] before:w-16  transition-all origin-top-right before:opacity-0 hover:before:opacity-100'>About Us</span> 
             </a>
           </div>
            <div className='lg:hidden'>
            <MenuIcon  />
            </div>
            <div className='font-bold'>
              <h2 className=''>Toha Fashion</h2>
            </div>
            <div className='flex gap-2'>
              <Favorite />
              <PersonIcon />
              <SearchIcon />
              <div className='relative flex items-center'>
              <ShoppingBagIcon /> 
              <span className='text-[13px] absolute right-[1%] top-[-40%] text-green-500 font-bold'>0</span>
              </div>
            </div>
          </div>
             
         <div className='w-full h-[80.3vh] bg-black bg-opacity-[0.4] mt-[-50px]'>
          <Fade top>
            <div className=' h-[80vh] flex justify-center items-center '>
            <h3 className='font-bold text-white  pt-6 cursor-pointer  tracking-widest relative hover:scale-[1.2] hover:text-yellow-400'>Discover Now 
            <span className='w-[8rem] h-[1px] bg-white absolute left-0 bottom-[-4px] '></span>
            </h3>
            </div>
          </Fade>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Header

