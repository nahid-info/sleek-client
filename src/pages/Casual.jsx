import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'

const Casual = () => {
  const [casuals, setCasuals] = useState()

  const { url } = useContext(AuthContext)

  const getAllProduct = async () => {

    try {

      const response = await axios.get(`${url}/product/show`)

      if (response.data.success) {

        const allProducts = response.data.allProducts

        const allTShirts = allProducts.filter((item) => item.type === 'casual')
        setCasuals(allTShirts)
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
    <div className=' min-h-screen'>
      <h2 className=' text-3xl text-center text-stone-500 my-5 md:mt-10 cursor-default'>Casual-Shirts</h2>

      <div className="border-b-2 py-5 md:py-10 border-blue-300 all-cards flex flex-wrap justify-center sm:justify-evenly sm:gap-y-16 gap-4">
        {
          casuals && casuals.slice().reverse().map((product) => {
            return <Card key={product._id} product={product} />
          })
        }
      </div>
    </div>
  )
}

export default Casual