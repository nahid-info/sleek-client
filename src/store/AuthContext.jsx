import { createContext, useState } from "react";


export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  const url = `http://localhost:4500`

  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null)
  // console.log(token)

  const login = (token) => {
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token))
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, url }}>
      {children}
    </AuthContext.Provider>
  )
}