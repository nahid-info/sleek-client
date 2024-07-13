import React, { useContext } from 'react'
import img from '../../assets/image.png'
import { TbCurrencyTaka } from 'react-icons/tb'
import { AuthContext } from '../../store/AuthContext'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {

  const { url } = useContext(AuthContext)

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
      <img className='h-[187px] sm:h-[334px] w-full object-center object-cover' src={`${url}/uploads/${product.imgUrl}`} alt="img" />
      <div className='h-[80px] transition-all flex flex-col w-full bg-slate-200'>
        <div className=' flex sm:gap-2 items-center justify-center sm:text-lg '>
          <h2 className=' text-stone-800 sm:font-medium flex items-center text-xl'><TbCurrencyTaka />{product.currentPrice}</h2>
          <h2 className=' line-through text-stone-500 flex items-center text-sm'><TbCurrencyTaka />{product.oldPrice}</h2>
          <p className=' text-green-500 flex items-center text-md font-medium'>{product.discount}%off</p>
        </div>
        <div className=' px-4 bg-slate-200 h-[100%] flex justify-end items-center gap-5'>
          <div className=' flex gap-2 text-lg font-medium text-gray-600 cursor-default'>
            <p className=' w-7 border h-7 flex justify-center items-center border-blue-400 rounded-md'>M</p>
            <p className=' w-7 border h-7 flex justify-center items-center border-blue-400 rounded-md'>L</p>
            <p className=' w-7 border h-7 flex justify-center items-center border-blue-400 rounded-md'>XL</p>
          </div>
          <Link className=' px-2 py-1 font-medium text-white rounded-lg border border-stone-400 bg-gray-600'>buy now</Link>
        </div>
      </div>
    </div>
  )
}

export default Card