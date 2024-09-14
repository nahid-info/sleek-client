import React, { useContext } from 'react'
import { TbCurrencyTaka } from 'react-icons/tb'
import { AuthContext } from '../../store/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { IoStarSharp } from 'react-icons/io5'

const Card = ({ product }) => {

  const { url, token } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleBuy = (e) => {
    e.stopPropagation()
    navigate(`/product/${product._id}`)

  }

  return (

    // <div className='relative rounded-2xl overflow-hidden h-[220px] w-[140px] sm:h-[360px] sm:w-[250px] bg-stone-200 ring-1 ring-blue-400'>
    //   <img className=' transition-all hover:scale-125 h-[187px] sm:h-[334px] w-full object-cover rounded-2xl' src={img} alt="img" />
    //   <div className='absolute hover:h-[80px] transition-all flex flex-col bottom-0 left-[50%] translate-x-[-50%] h-[60px] sm:h-[70px] w-[80%] bg-slate-300 rounded-b-xl rounded-t-2xl overflow-hidden'>
    //     <div className=' flex sm:gap-4 justify-around sm:justify-center sm:text-xl h-[30px]'>
    //       <h2 className=' line-through text-stone-500 flex items-center'><TbCurrencyTaka />400</h2>
    //       <h2 className=' text-blue-500 sm:font-medium flex items-center'><TbCurrencyTaka />350</h2>
    //     </div>
    //     <button className=' flex-1 text-md sm:text-xl text-stone-200 sm:font-medium bg-green-400'>Add to Cart</button>
    //   </div>
    // </div>

    <div className='rounded-lg overflow-hidden w-[140px] sm:w-[250px] bg-stone-200'>
      <img onClick={handleBuy} className='h-[187px] sm:h-[334px] w-full object-center object-cover hover:scale-125 cursor-pointer transition-all' src={`${url}/uploads/${product.imgUrl}`} alt="img" />
      <div className=' sm:h-[80px] h-[56px] flex flex-col w-full bg-slate-200 overflow-hidden relative cursor-default'>
        <div className=' flex sm:gap-2 gap-1 items-center justify-center sm:text-lg '>
          <h2 className=' text-stone-800 font-medium flex items-center text-md sm:text-xl'><TbCurrencyTaka />{product.currentPrice}</h2>
          {product.discount > 0 ?
            <>
              <h2 className=' line-through text-stone-500 flex items-center text-xs sm:text-sm'><TbCurrencyTaka />{product.oldPrice}</h2>
              <p className=' text-green-500 flex items-center text-sm sm:text-md font-medium'>{product.discount}%off</p>
            </> :
            <>
              <IoStarSharp className=' text-indigo-500' />
              <IoStarSharp className=' text-indigo-500' />
            </>
          }

        </div>
        <div className=' px-2 sm:px-4 bg-slate-200 h-[100%] flex justify-end items-center gap-2 sm:gap-5'>
          <div className=' flex sm:gap-2 gap-1 sm:text-lg text-xs font-medium text-gray-600 cursor-default'>
            <p className=' sm:w-7 w-4 h-5 border sm:h-7 flex justify-center items-center border-blue-400 rounded-sm sm:rounded-md'>M</p>
            <p className=' sm:w-7 w-4 h-5 border sm:h-7 flex justify-center items-center border-blue-400 rounded-sm sm:rounded-md'>L</p>
            <p className=' sm:w-7 w-4 px-2 h-5 border sm:h-7 flex justify-center items-center border-blue-400 rounded-sm sm:rounded-md'>XL</p>
          </div>
          <button onClick={handleBuy} className=' sm:px-2 px-1 py-1 sm:hover:px-3 transition-all sm:py-1 text-xs sm:text-base font-medium text-white rounded-lg border border-stone-400 bg-black'>buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Card