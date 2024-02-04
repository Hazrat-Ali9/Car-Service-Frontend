
import './App.css'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Footer from './components/Home/Footer'
import Navbar from './components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
      <Navbar />
      <Login />
      <Register />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  )
}


export default App
