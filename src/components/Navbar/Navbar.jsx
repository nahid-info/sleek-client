import React from 'react'
import { FaCircle, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping, FaRegCircleDot } from 'react-icons/fa6'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { SiTemporal } from 'react-icons/si'
import { RiAlignItemHorizontalCenterFill } from 'react-icons/ri'
import { MdOutlineStarRate } from 'react-icons/md'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav className=' shadow-md shadow-blue-300 px-10 md:px-16 sticky top-0 z-10 bg-white'>
      <div className=' flex items-center justify-between md:justify-around h-16'>
        <h2 onClick={() => navigate('/')} className='text-blue-400 sm:text-stone-600 text-3xl'>Sleek</h2>
        <ul className=' text-blue-400 items-center sm:flex sm:gap-10 sm:text-lg hidden'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/t-shirts'>T-Shirts</NavLink></li>
          <li><NavLink to='/polo-shirts'>Polo-Shirts</NavLink></li>
          <li><NavLink to='/casual'>Casual</NavLink></li>
        </ul>
        <ul className="cart-section text-stone-500 flex items-center sm:gap-8 gap-6 sm:text-3xl text-2xl">
          <li className=' relative'><Link to='/cart'>
            <FaCartShopping className=' text-blue-400' />
            <MdOutlineStarRate className=' text-lg text-rose-500 absolute -top-[20%] left-[60%] -translate-x-1/2 -translate-y-1/2' />
          </Link></li>
          <li><Link to='/user'><FaUserAlt className=' text-indigo-400' /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar