import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const [isOpen , setIsOpen ] = useState(false)

  const navigate = useNavigate()
  return (
    <>
    
   <nav className='h-16 bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-6'>
<div className='text-lg font-semibold text-gray-800 dark:text-white'>
Welcome Back 👋
</div>
<ThemeToggle/>

<div className="relative">
<button
onClick={() => setIsOpen(!isOpen)}
className="focus:outline-none">
<img
      src={`https://ui-avatars.com/api/?name=Admin`}
      alt="Profile"
      className="w-10 h-10 rounded-full border"
    /></button>
    {isOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
    Profile
  </button>
  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
   onClick={()=> navigate("/settings")}
  >
    Settings
  </button>
  <button className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
    Logout
  </button>
</div>
) }

</div>

   </nav>


   </>
  )
}
