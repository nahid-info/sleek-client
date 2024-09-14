import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../store/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './User.css'

const User = () => {

  const name = useRef()
  const phone = useRef()
  const villageName = useRef()
  const postalCode = useRef()
  const upazila = useRef()
  const streetAddress = useRef()

  const { token, url, logout } = useContext(AuthContext)

  const [user, setUser] = useState()

  const navigate = useNavigate()

  const userInfo = async () => {
    try {
      const response = await axios.get(`${url}/user/userinfo`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.data.success) {
        const { userInfo } = response.data
        setUser(userInfo)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(
    () => {
      userInfo()
    }, []
  )

  const addInfo = async (e) => {
    e.preventDefault()
    const userData = {
      name: name.current.value,
      phone: phone.current.value,
      villageName: villageName.current.value,
      postalCode: postalCode.current.value,
      upazila: upazila.current.value,
      streetAddress: streetAddress.current.value,
    }
    const response = await axios.post(`${url}/user/update-info`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    if (response.data.success) {
      alert('Information updated successfully')
      setUser(response.data.userInfo)
    }
  }

  const handleLogout = () => {
    const confirmBox = confirm('Are you sure, You want to logout of this account?')
    if (confirmBox) {
      logout()
      navigate('/')
    }
  }


  return (
    <div className=' min-h-screen flex flex-col gap-10 my-10'>
      {
        !user && <div className=' flex flex-col justify-center items-center gap-4 my-20'>
          <h2 className=' text-gray-700 font-medium text-2xl sm:text-4xl mt-10 mb-5'>Signup or login</h2>
          <Link className='w-60 text-2xl h-12 flex justify-center items-center rounded-lg text-white bg-blue-400' to='/signup'>Signup</Link>
          <Link className='w-60 text-2xl h-12 flex justify-center items-center rounded-lg text-white bg-blue-400' to='/login'>Login</Link>
        </div>
      }
      {
        user &&
        <div className=' flex flex-col justify-center items-center text-gray-500 gap-5'>
          <h2 className=' sm:text-2xl'>Email : {user.username}</h2>
          <button onClick={handleLogout} className=' px-2 py-1 border-2 border-rose-400 rounded-lg sm:text-lg font-medium text-stone-600 hover:px-4 transition-all'>Logout</button>
        </div>
      }
      {
        user && user.name && user.phone &&
        < div className=' text-stone-700 flex items-center flex-col gap-5 sm:gap-10'>
          <div>
            <h2 className=' text-center my-4 text-xl sm:text-2xl'>Delivery Address</h2>
            <div className=' sm:text-2xl text-lg px-5 sm:px-10 flex flex-col gap-4 border-2 border-blue-400 sm:p-10 p-3 rounded-xl'>
              <div className=' sm:flex gap-10'>
                <h2>Name : {user.name}</h2>
                <h2>Phone: {user.phone}</h2>
              </div>
              <div>
                <h2>Postal code: {user.postalCode}</h2>
                <h2>Village: {user.villageName}</h2>
              </div>
              <div>
                <h2>Street Address: {user.streetAddress}</h2>
                <h2>Upazila: {user.upazila}</h2>
              </div>
            </div>
          </div>
          <button className='px-2 h-10 text-xl border-2 border-blue-400 hover:px-4 transition-all rounded-md text-gray-600'>Change Address</button>
        </div>
      }
      {
        user && !user.name && !user.phone &&
        <div className=' flex justify-center'>
          <form onSubmit={addInfo} className='bg-slate-200 border border-blue-400 py-4 sm:px-10 px-3 rounded-xl add-form w-[90vw] sm:w-[450px] flex flex-col gap-4'>
            <div>
              <input ref={name} type="text" id='name' placeholder='Reciever name' required />
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input ref={phone} type="number" id='number' placeholder='Phone number' required />
              <label htmlFor="number">Number</label>
            </div>
            <div>
              <input ref={postalCode} type="number" id='postal-code' placeholder='Postal code' required />
              <label htmlFor="postal-code">Postal Code</label>
            </div>
            <div>
              <input ref={villageName} type="text" id='village' placeholder='Village name' required />
              <label htmlFor="village">Village</label>
            </div>
            <div>
              <input ref={streetAddress} type="text" id='street' placeholder='Street Address (optional)' />
              <label htmlFor="street">Street Address</label>
            </div>
            <div>
              <input ref={upazila} type="text" id='upazila' placeholder='Upazila name' required />
              <label htmlFor="upazila">Upazila</label>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      }
    </div >
  )
}

export default User
