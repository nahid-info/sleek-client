import React from 'react'
import Navbar from '../Navbar/Navbar'
import { GiPoloShirt, GiTShirt } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { RiShirtFill } from 'react-icons/ri'
import './Header.css'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  return (
    <ul className='bg-white min-w[320px] flex py-2 justify-center gap-8 sm:hidden overflow-scroll no-scrollbar'>
      <li>
        <NavLink to='/' className=' flex flex-col items-center text-sm text-stone-500'>
          <FaHome className='border-2 border-indigo-200 rounded-full text-5xl text-stone-600 p-2' />Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/t-shirts' className=' flex flex-col items-center text-sm text-stone-500'>
          <GiTShirt className='border-2 border-indigo-200 rounded-full text-5xl text-slate-500 p-2' />T-Shirts
        </NavLink>
      </li>
      <li>
        <NavLink to='/casual' className=' flex flex-col items-center text-sm text-stone-500'>
          <RiShirtFill className='border-2 border-indigo-200 rounded-full text-5xl text-stone-500 p-2' />Casual
        </NavLink>
      </li>
      <li>
        <NavLink to='polo-shirts' className=' flex flex-col items-center text-sm text-stone-500'>
          <GiPoloShirt className='border-2 border-indigo-200 rounded-full text-5xl text-slate-700 p-2' />Polo
        </NavLink>
      </li>
    </ul>
  )
}

export default Header