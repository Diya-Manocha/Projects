import React from 'react'
import Sidebar from './Sidebar'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import ChatbotIcon from '../pages/ChatbotIcon'

export const Layout = () => {
  return (
   <div className='flex'>
<Sidebar/>
<div className='flex-1 flex flex-col'>
<Navbar/>
<main className='p-6 bg-gray-100 dark-gray-950 min-h-screen'>
<Outlet/>
</main>
<ChatbotIcon/>
</div>
   </div>
  )
}
