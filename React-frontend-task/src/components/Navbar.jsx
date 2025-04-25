import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-end items-center gap-3 bg-customCream'>
      <Link to="/product">
      <button className='bg-menuBtn mb-6 mt-5 mr-[7px] rounded-md text-white font-bold px-[18px] py-2'>Menu</button>
      </Link>
        
        <Link to="/login" className="hover:text-indigo-400">
        <button className='bg-menuBtn mb-6 mt-5 mr-[146px] rounded-md text-white font-bold px-[18px] py-2'>Login</button>
        </Link>
        
    </div>
  )
}

export default Navbar

// margin-bottom: 33px;
//     margin-top: 23px;
//     margin-right: 193px;
