import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  const url = `https://sleek-server-5hrf.onrender.com`

  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null)
  // console.log(token)

  const login = (token) => {
    console.log(token)
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token))
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }


  return (
    <AuthContext.Provider value={{ token, url, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}