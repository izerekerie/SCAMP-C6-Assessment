import React, { useState } from 'react'
import {Link} from 'react-scroll'
import prof from '../../assets/about.jpg'
import cart from '../../assets/cart.svg'
import bars from '../../assets/bars.svg'
import close from '../../assets/close.svg'


function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div  className=' w-full  flex md:justify-center mt-6'>

   
    <div className='md:flex w-full   md:justify-between md:border-b pb-4 md:w-10/12 bg-orange'>
      
     
      <div className='flex w-2/3 justify-around  '>
      <div className='w-11/12 md:w-1/4'>
      <h1 className='text-2xl font-bold '>Sneakers</h1>
      </div>
      
      <div className='flex w-2/3 justify-around hidden md:block md:flex'>
        
      <Link className='  text-gray-600 text-grey-400 hover:text-orange-500 py-1 text-lg ' href="#">Collections</Link>
        <Link className=' text-gray-600 text-grey-400 hover:text-orange-500 py-1 text-lg ' href="#">Men</Link>
        <Link className=' text-gray-600 text-grey-400 hover:text-orange-500 py-1 text-lg ' href="#">Women</Link>
       <Link className=' text-gray-600 text-grey-400  hover:text-orange-500 py-1 text-lg ' href="#">About</Link>
       <Link className=' text-gray-600 text-grey-400 hover:text-orange-500  py-1 text-lg ' href="#">Contact</Link>
      </div>
      
        </div>
    <div className='flex justify-end hidden md:inline-flex '>
    <img  className='w-8 h-8' src={cart} alt="" />
      <img className=' ml-8 w-10 h-10 rounded-full' src={prof} alt="" />
    </div>
    
    </div>
   <img onClick={()=>{setIsOpen(!isOpen)}} className='md:hidden absolute right-3 w-8 h-10' src={isOpen?close:bars} alt=""  />
    
    </div>
    <div className='grid grid-col-1 justify-around  ' style={{backgroundColor:"#ff7c1a",display:`${isOpen? '':'none'}`}}>
      <Link className='   text-white  hover:text-gray-300  py-4 text-lg  ' href="#">Collections</Link>
        <Link className='  text-white  hover:text-gray-300 py-4 text-lg ' href="#">Men</Link>
        <Link className=' text-white  hover:text-gray-300 py-4 text-lg ' href="#">Women</Link>
       <Link className='  text-white  hover:text-gray-300 py-4 text-lg ' href="#">About</Link>
       <Link className='  text-white hover:text-gray-300  py-4 text-lg ' href="#">Contact</Link>
      </div>



    </>
  )
}

export default Navbar