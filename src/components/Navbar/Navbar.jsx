import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className=' shadow-md shadow-blue-300 px-10 md:px-16 sm:sticky sm:top-0 z-10 bg-white'>
      <div className=' flex items-center justify-between md:justify-around h-16'>
        <h2 className='text-blue-400 sm:text-stone-600 text-3xl'>Sleek</h2>
        <ul className=' text-blue-400 items-center sm:flex sm:gap-10 sm:text-lg hidden'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/t-shirts'>T-Shirts</NavLink></li>
          <li><NavLink to='/polo-shirts'>Polo-Shirts</NavLink></li>
          <li><NavLink to='/casual'>Casual</NavLink></li>
        </ul>
        <ul className="cart-section text-stone-500 flex items-center sm:gap-8 gap-6 sm:text-3xl text-2xl">
          <li><Link to='/cart'><FaCartShopping /></Link></li>
          <li><Link to='/user'><FaUserAlt /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar