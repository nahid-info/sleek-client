import React, { useContext, useEffect, useState } from 'react'
import homeBanner from '../assets/banner.jpg'
import Card from '../components/Card/Card'
import { MdOutlineKeyboardDoubleArrowDown, MdTrendingDown } from 'react-icons/md'
import { IoTrendingDownOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'

const Home = () => {

  const [tShirts, setTShirts] = useState()
  const [poloShirts, setPoloShirts] = useState()
  const [casuals, setCasuals] = useState()

  const { url } = useContext(AuthContext)

  const getAllProduct = async () => {

    try {

      const response = await axios.get(`${url}/product/show`)

      if (response.data.success) {

        const allProducts = response.data.allProducts

        const allTShirts = allProducts.filter((item) => item.type === 't-shirt')
        setTShirts(allTShirts)

        const allPolos = allProducts.filter((item) => item.type === 'polo-shirt')
        setPoloShirts(allPolos)

        const casuals = allProducts.filter((item) => item.type === 'casual')
        setCasuals(casuals)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(
    () => {
      getAllProduct()
    },
    []
  )

  return (
    <div>

      <div className='relative my-10 mx-auto w-[85%]'>
        <img src={homeBanner} alt="home-banner" className=' rounded-2xl w-full' />
      </div>

      <div className=' flex items-end sm:my-10 my-4 sm: sm:text-3xl text-2xl sm:gap-1 justify-center text-indigo-500 italic'><h2>New Arrivals</h2><IoTrendingDownOutline className='' /></div>

      <div className=' border-b-2 border-blue-300'>
        <h2 className=' sm:text-2xl text-slate-600 flex items-end my-10'>T-Shirts <MdOutlineKeyboardDoubleArrowDown /></h2>
        <div className="all-cards flex flex-wrap justify-center sm:justify-evenly sm:gap-y-16 gap-y-8 gap-4">
          {
            tShirts && tShirts.slice().reverse().map((product) => {
              return <Card product={product} key={product._id} />
            })
          }
        </div>
        <div className=' text-end text-sm sm:text-xl text-blue-500 p-4'>
          <Link to='/t-shirts'>t-shirts...</Link>
        </div>
      </div>

      <div className=' border-b-2 border-blue-300'>
        <h2 className=' sm:text-2xl text-slate-600 flex items-end my-10'>Casual <MdOutlineKeyboardDoubleArrowDown /></h2>
        <div className="all-cards flex flex-wrap justify-center sm:justify-evenly sm:gap-y-16 gap-4">
          {/* <Card /> */}
          {
            casuals && casuals.slice().reverse().map((product) => {
              return <Card product={product} key={product._id} />
            })
          }
        </div>
        <div className=' text-end text-sm sm:text-xl text-blue-500 p-4'>
          <Link to='/casual'>Casual shirts...</Link>
        </div>
      </div>

      <div className=' border-b-2 border-blue-300'>
        <h2 className=' sm:text-2xl text-slate-600 flex items-end my-10'>Polo-Shirts <MdOutlineKeyboardDoubleArrowDown /></h2>
        <div className="all-cards flex flex-wrap justify-center sm:justify-evenly sm:gap-y-16 gap-4">
          {/* <Card /> */}
          {
            poloShirts && poloShirts.slice().reverse().map((product) => {
              return <Card product={product} key={product._id} />
            })
          }
        </div>
        <div className=' text-end text-sm sm:text-xl text-blue-500 p-4'>
          <Link to='/polo-shirts'>polo-shirts...</Link>
        </div>
      </div>


    </div>
  )
}

export default Home