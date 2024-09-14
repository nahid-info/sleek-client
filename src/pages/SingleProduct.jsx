import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const SingleProduct = () => {


  const [slImg, setSlImg] = useState(null)
  const [product, setProduct] = useState()
  const [size, setSize] = useState()

  const { id } = useParams()

  const { url, token, } = useContext(AuthContext)

  const navigate = useNavigate()


  const productInfo = async () => {
    const response = await axios.post(`${url}/product/findone`, { _id: id })
    if (response.data.success) {
      setProduct(response.data.product)
      setSlImg(response.data.product.imgUrl)
    }
  }

  useEffect(
    () => {
      productInfo()
    }, []
  )

  const addToCart = async (_id, price) => {
    try {
      console.log(size === 'M')
      if (size !== 'M' && size !== 'L' && size !== 'XL') {
        return toast.error('Please Select Size.')
      }
      if (!token) {
        navigate('/login')
      }
      const orderInfo = {
        _id: _id,
        size: size,
        price: price,
        quantity: 1
      }
      const response = await axios.post(`${url}/user/add-cart`,
        orderInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen my-10 '>
      <ToastContainer />
      {
        product &&
        <div className='flex flex-col sm:flex-row sm:justify-around sm:gap-0 gap-10 sm:items-center sm:px-6 px-2'>

          <div className='flex gap-6 flex-col items-center'>
            <div className=' h-[334px] py-5'>
              <img className=' h-full object-cover rounded-md' src={`${url}/uploads/${slImg}`} alt="Product_image" />
            </div>
            <div className=' flex h-28 justify-evenly sm:justify-center md:h-36 w-full sm:border-none border border-blue-300 overflow-hidden gap-2 sm:gap-4 sm:bg-blue-200 p-2 sm:p-3 rounded-lg'>
              <img onClick={() => setSlImg(product.imgUrl)} className={` ${slImg === product.imgUrl && 'p-4 border border-green-400'} object-contain rounded-md transition-all`} src={`${url}/uploads/${product.imgUrl}`} alt="image" />
              <img onClick={() => setSlImg(product.img2Url)} className={` ${slImg === product.img2Url && 'p-4 border border-green-400'} object-contain rounded-md transition-all`} src={`${url}/uploads/${product.img2Url}`} alt="image" />
              <img onClick={() => setSlImg(product.img3Url)} className={` ${slImg === product.img3Url && 'p-4 border border-green-400'} object-contain rounded-md transition-all`} src={`${url}/uploads/${product.img3Url}`} alt="image" />
            </div>
          </div>

          <div className='flex justify-center'>
            <div className=' text-2xl flex flex-col gap-2'>
              <pre>Name      : {product.type}</pre>
              {product.discount > 0 && <pre className=' flex'>Old Price : <p>{product.oldPrice} tk</p></pre>}
              <pre className=' flex '>Discount  : <p>{product.discount} %</p></pre>
              <div className=' sm:text-xl font-medium flex justify-center gap-5 my-4 cursor-default'>
                <h2 onClick={() => { setSize('M') }} className={`${size === 'M' && 'bg-blue-500 text-white border-none'} border-2 border-blue-300 rounded-md px-3 py-1 transition-all`}>M</h2>
                <h2 onClick={() => { setSize('L') }} className={`${size === 'L' && 'bg-blue-500 text-white border-none'} border-2 border-blue-300 rounded-md px-4 py-1 transition-all`}>L</h2>
                <h2 onClick={() => { setSize('XL') }} className={`${size === 'XL' && 'bg-blue-500 text-white border-none'} border-2 border-blue-300 rounded-md px-2 py-1 transition-all`}>XL</h2>
              </div>
              <pre className=' border-t-2 border-blue-300 flex '>Price     : <p>{product.currentPrice} tk</p></pre>
              <div className='flex flex-col items-center gap-2 sm:gap-5 my-3 sm:my-6 text-center text-white'>
                <button className='w-[80%] bg-indigo-600 py-1 transition-all sm:hover:w-[90%] rounded-lg' onClick={() => { addToCart(product._id, product.currentPrice) }}>Add to Cart</button>
                <Link to='#' className='w-[80%] bg-pink-400 py-1 transition-all sm:hover:w-[90%] rounded-lg'>Order Now</Link>
              </div>
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default SingleProduct