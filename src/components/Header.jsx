import React from 'react'
import reactLogo from './../assets/react.svg'
import { useNavigate } from "react-router-dom"



const Header = () => {

  const navigation = useNavigate();

  return (
    <div className='flex flex-row items-center justify-between gap-4 py-4  '>
        <button  onClick={() => navigation("/new")} className='btn btn-primary btn-sm md:btn-md  '>+ New Idea</button>
        <h2 className='font-bold text-sm md:text-2xl'>TOP 20 IDEA</h2>
        <div className="flex flex-row items-center justify-between gap-2">
            <img src={reactLogo} className='w-10 h-10 rounded-full' />
            <h2 className='font-bold text-sm hidden md:block '>By Olusegun</h2>
        </div>
    </div>
  )
}

export default Header