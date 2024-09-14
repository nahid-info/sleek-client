import React, { useContext, useEffect, useState } from 'react'
import CardBox from '../components/CardBox/CardBox'
import { AuthContext } from '../store/AuthContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

  const [cartInfo, setCartInfo] = useState([])
  const [totalCost, setTotalCost] = useState(0)

  const { url, token } = useContext(AuthContext)

  const findCart = async () => {
    console.log('finding cart.....')
    const response = await axios.get(`${url}/user/find-cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    if (response.data.success) {
      console.log(response.data.cart.length)
      setCartInfo(response.data.cart)
    }
  }
  useEffect(
    () => {
      if (token) {
        findCart()
      }
    }, []
  )


  return (
    <div className='my-10 sm:my-12 flex justify-center items-center md:items-start md:flex-row flex-col-reverse min-h-96'>
      {
        !cartInfo || cartInfo.length <= 0 ?
          <h2 className=' text-xl sm:text-2xl font-medium text-indigo-400'>No product added yet!</h2> : null
      }
      <div className=' flex flex-wrap gap-5 justify-center sm:gap-10'>
        {
          cartInfo && cartInfo.length > 0 && cartInfo.map((item) => (
            <CardBox setTotalCost={setTotalCost} setCartInfo={setCartInfo} item={item} key={item._id} />
          ))
        }
      </div>
      {
        cartInfo && cartInfo.length > 0 &&
        <div className=' font-medium text-xl flex gap-4 flex-col items-center justify-center md:max-w-80 w-full md:h-auto md:my-0 my-10'>
          <h2 className=' text-stone-600 border-2 border-blue-300 px-3 py-2 rounded-md'>Total : {totalCost} tk</h2>
          <div className=' flex flex-col items-center gap-4'>
            <h2 className=' text-base font-normal text-rose-600 text-center'>You should check your shipping address before placing an order!</h2>
            <Link className=' transition-all md:hover:px-5 text-lg border-2 border-blue-300 px-3 py-1 rounded-lg text-stone-600' to='/user'>check address</Link>
          </div>
          <button className='font-medium text-white bg-blue-400  px-14 pb-2 py-1 rounded-lg md:hover:px-16 transition-all'>pay</button>
        </div>
      }
    </div>
  )
}

export default Cart