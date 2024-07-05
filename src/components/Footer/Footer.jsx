import React from 'react'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='my-4'>
      <ul className=' text-4xl text-blue-500 flex justify-center gap-6'>
        <li><Link><FaSquareFacebook /></Link></li>
        <li><Link><FaFacebookMessenger className='text-indigo-700' /></Link></li>
        <li><Link><FaWhatsapp className=' text-green-500' /></Link></li>
      </ul>
      <h2 className=' text-xl sm:text-3xl text-center py-2 sm:py-4 text-stone-700 border-b-2 border-stone-300'>Contact Us</h2>
      <p className=' text-xs sm:text-lg text-center text-blue-600'>Copyright 2024 © sleek-lifestyle.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer