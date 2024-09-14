import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react'

function App() {

  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=' cursor-default min-h-screen'>
      <Navbar />
      <Header />
      <div className='z-0 px-2 md:px-16 lg:px-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
