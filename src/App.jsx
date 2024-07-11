import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <div className='z-0 px-2 md:px-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
