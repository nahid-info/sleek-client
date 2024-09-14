import React, { useContext, useRef, useState } from 'react'
import './Login.css'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { login, url } = useContext(AuthContext)

  const navigate = useNavigate()

  const [invalidCred, setInvalidCred] = useState(null)

  let username = useRef('')
  let password = useRef('')

  async function checkLogin() {
    const userData = {
      username: username.current.value.toLowerCase(),
      password: password.current.value
    }
    try {
      const response = await axios.post(`${url}/user/login`, userData)
      if (response.data.success && response.data.token) {
        setInvalidCred(null)
        login(response.data.token)
        console.log(response.data.token)
        navigate(-1)
      } else if (!response.data.success) {
        setInvalidCred(response.data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    checkLogin()
  }

  return (
    <div className=' user-login-page-container flex justify-center items-center bg-blue-400 bg-opacity-80'>
      <form onSubmit={handleSubmit} className=' flex flex-col items-center bg-sky-400 border-green-300 border-[1px] rounded-2xl p-2 text-white justify-center gap-4'>
        <h2 className=' mb-5 text-xl text-stone-600'>Login to your account !</h2>
        <input ref={username} type="email" placeholder='Enter your e-mail' required />
        <input ref={password} type="password" placeholder='password' required />
        {invalidCred && <p className=' text-rose-800 text-md'>{invalidCred}</p>}
        <button type='submit' className=' bg-indigo-400 font-bold rounded-lg'>Login</button>
      </form>
    </div>
  )
}

export default Login