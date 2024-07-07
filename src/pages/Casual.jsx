import React from 'react'
import Card from '../components/Card/Card'

const Casual = () => {
  return (
    <div>
      <h2 className=' text-3xl text-center text-stone-500 my-5 md:mt-10 cursor-default'>Casual-Shirts</h2>

      <div className="border-b-2 py-5 md:py-10 border-blue-300 all-cards flex flex-wrap justify-evenly sm:gap-y-16 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Casual