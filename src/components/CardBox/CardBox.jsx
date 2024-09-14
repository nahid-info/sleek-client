import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import axios from 'axios'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { CiSquareRemove } from 'react-icons/ci'
import { toast, ToastContainer } from 'react-toastify'

const CardBox = ({ item, setCartInfo, setTotalCost }) => {

  const { url, token } = useContext(AuthContext)

  const [product, setProduct] = useState()

  const getProduct = async () => {
    try {
      const response = await axios.post(`${url}/product/findone`, { _id: item._id })
      if (response.data.success) {
        if (product) {
          return
        }
        setProduct(response.data.product)
        // setCartInfo((prevCart) => {
        //   const foundProduct = prevCart.find(element => element._id === item._id)
        //   foundProduct.price = response.data.product.currentPrice
        //   return [...prevCart]
        // })
        setTotalCost((prevCost) => {
          console.log(response.data.product.currentPrice)
          return prevCost += response.data.product.currentPrice
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // useEffect(() => {
  //   product &&
  //     setCartInfo((prevCart) => {
  //       const foundProduct = prevCart.find(element => element._id === item._id)
  //       foundProduct.Price = product.currentPrice
  //       return [...prevCart]
  //     })
  // }, [product])

  useEffect(
    () => {
      getProduct()
    }, []
  )

  const decreaseCount = () => {
    setCartInfo((prevCart) => {
      const foundItem = prevCart.find((element) => element._id === item._id)
      if (foundItem && foundItem.quantity <= 1) {
        return prevCart
      } else {
        foundItem.quantity--
        setTotalCost((prevCost) => {
          return prevCost -= product.currentPrice
        })
        return [...prevCart]
      }
    })
  }

  const increaseCount = async () => {
    setCartInfo((prevCart) => {
      const foundItem = prevCart.find((element) => element._id === item._id)
      if (foundItem) {
        foundItem.quantity++;
        setTotalCost((prevCost) => prevCost + product.currentPrice);
        return [...prevCart]
      } else {
        return prevCart
      }
    })
  }

  const removeFromCart = async () => {
    const response = await axios.delete(`${url}/user/cart-remove/${item._id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.data.success) {
      setTotalCost((prevCost) => {
        return prevCost -= product.currentPrice * item.quantity
      })
      setCartInfo(prevCart => {
        return prevCart.filter(element => element._id !== item._id)
      })
    }
  }


  return (
    <>
      <ToastContainer />
      {product &&
        <div className='relative flex items-center gap-10 border-2 border-indigo-300 p-4 rounded-lg'>

          <div className=' rounded-lg border-2 border-blue-200 p-2'>
            <img className='rounded-lg max-h-32 sm:h-40' src={`${url}/uploads/${product.imgUrl}`} alt="Image" />
          </div>

          <div className=' text-xl font-medium flex flex-col gap-5'>
            <pre>
              <h2 >Size  : {item.size}</h2>
              <h2>Price : {product.currentPrice} tk</h2>
            </pre>

            <div className='flex justify-center gap-4'>
              <button className=' border-2 border-rose-400 p-1 rounded-md' onClick={decreaseCount}><FaMinusCircle className=' text-rose-400' /></button>
              <h2 className=' text-stone-600 border-2 px-3 rounded-lg border-slate-400'>{item.quantity}</h2>
              <button className=' border-2 border-blue-400 p-1 rounded-md' onClick={increaseCount}><FaPlusCircle className=' text-blue-400' /></button>
            </div>

          </div>
          <CiSquareRemove onClick={() => removeFromCart()} className='absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl rounded-md font-medium text-white bg-rose-400' />
        </div>
      }

    </>
  )
}

export default CardBox