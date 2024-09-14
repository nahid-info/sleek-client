import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'

const PoloShirts = () => {
  const [poloShirts, setPoloShirts] = useState()

  const { url } = useContext(AuthContext)

  const getAllProduct = async () => {

    try {

      const response = await axios.get(`${url}/product/show`)

      if (response.data.success) {

        const allProducts = response.data.allProducts

        const allPolos = allProducts.filter((item) => item.type === 'polo-shirt')
        setPoloShirts(allPolos)
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
      <h2 className=' text-3xl text-center text-stone-500 my-5 md:mt-10 cursor-default'>Polo-Shirts</h2>

      <div className="border-b-2 py-5 md:py-10 border-blue-300 all-cards flex flex-wrap justify-center sm:justify-evenly sm:gap-y-16 gap-4">
        {
          poloShirts && poloShirts.slice().reverse().map((product) => {
            return <Card key={product._id} product={product} />
          })
        }
      </div>
    </div>
  )
}

export default PoloShirts