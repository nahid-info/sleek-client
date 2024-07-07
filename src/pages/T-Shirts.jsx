import React from 'react'
import Card from '../components/Card/Card'

const TShirts = () => {
  return (
    <div>
      <h2 className=' text-3xl text-center text-stone-500 my-5 md:my-10 cursor-default'>T-Shirts</h2>

      <div className="border-b-2 py-5 md:py-20 border-blue-300 all-cards flex flex-wrap justify-evenly sm:gap-y-16 gap-4">
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

export default TShirts