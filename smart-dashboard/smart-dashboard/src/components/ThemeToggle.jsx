import React from 'react'
import { useEffect, useState } from 'react'
import{Sun, Moon} from 'lucide-react'


export const ThemeToggle = () => {
    const [dark, setDark] = useState(()=>{
        return localStorage.getItem("theme") === "dark"
    })

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",dark)
        localStorage.setItem("theme", dark ? "dark": "light")
    },[dark])
  return (
    <button onClick={()=> setDark(!dark)}
     className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition'
    >
{dark ? <Sun className='text-yellow-400'/>: <Moon className='text-blue-400'/>}
    </button>
  )
}
