import React from 'react'
import img from '../../assets/image.png'
import { TbCurrencyTaka } from 'react-icons/tb'

const Card = () => {
  return (

    <div className='relative rounded-2xl overflow-hidden h-[220px] w-[140px] sm:h-[360px] sm:w-[250px] bg-stone-200 ring-1 ring-blue-400'>
      <img className=' transition-all hover:scale-125 h-[187px] sm:h-[334px] w-full object-cover rounded-2xl' src={img} alt="img" />
      <div className='absolute hover:h-[80px] transition-all flex flex-col bottom-0 left-[50%] translate-x-[-50%] h-[60px] sm:h-[70px] w-[80%] bg-slate-300 rounded-b-xl rounded-t-2xl overflow-hidden'>
        <div className=' flex sm:gap-4 justify-around sm:justify-center sm:text-xl h-[30px]'>
          <h2 className=' line-through text-stone-500 flex items-center'><TbCurrencyTaka />400</h2>
          <h2 className=' text-blue-500 sm:font-medium flex items-center'><TbCurrencyTaka />350</h2>
        </div>
        <button className=' flex-1 text-md sm:text-xl text-stone-200 sm:font-medium bg-green-400'>Add to Cart</button>
      </div>
    </div>

  )
}

export default Card