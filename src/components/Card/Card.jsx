import React from 'react'
import img from '../../assets/image.png'

const Card = () => {
  return (

    <div className='relative rounded-2xl overflow-hidden h-[190px] w-[120px] sm:h-[340px] sm:w-[250px] bg-stone-200 ring-1 ring-blue-400'>
      <img className=' transition-all hover:scale-125 h-[144px] sm:h-[300px] w-full object-cover rounded-2xl' src={img} alt="img" />
      <div className='absolute hover:h-[80px] transition-all flex flex-col bottom-0 left-[50%] translate-x-[-50%] h-[60px] sm:h-[70px] w-[80%] bg-slate-300 rounded-b-xl rounded-t-2xl overflow-hidden'>
        <div className=' flex sm:gap-4 justify-around sm:justify-center sm:text-xl h-[30px]'>
          <h2 className=' line-through text-rose-600'>$400</h2>
          <h2 className=' text-stone-700 sm:font-medium'>$350</h2>
        </div>
        <button className=' flex-1 sm:text-xl text-stone-200 sm:font-medium bg-green-400'>Add to Cart</button>
      </div>
    </div>

  )
}

export default Card