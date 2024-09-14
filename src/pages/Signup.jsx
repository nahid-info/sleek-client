import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const { url, login } = useContext(AuthContext)

  const username = useRef()
  const password = useRef()

  const [errorMsg, setErrorMsg] = useState()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = {
        username: username.current.value,
        password: password.current.value
      }

      const response = await axios.post(`${url}/user/signup`, userData)

      if (response.data.success) {
        login(response.data.token)
        navigate(-1)
      } else {
        setErrorMsg(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='bg-blue-400 h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className=' bg-sky-400 w-[300px] bg-opacity-80 py-12 px-5 flex items-center flex-col gap-5 rounded-xl border-2 border-white  '>
        <h2 className=' text-center text-2xl text-stone-600'>Create an account!</h2>
        <input type="email" ref={username} className='px-4 h-10 w-full outline-1 outline-blue-300 rounded-md' placeholder='Enter your email' required />
        <input type="password" ref={password} className='outline-blue-300 outline-1 rounded-md px-4 h-10 w-full' placeholder='Enter a password' required />
        {
          errorMsg && <p className=' text-rose-700 font-medium'>{errorMsg}</p>
        }
        <button type='submit' className='border border-white rounded-lg w-[60%] hover:w-[80%] transition-all h-10'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup