import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, Outlet } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (
    <div>
      <img
        src={assets.logo}
        alt=""
        className='w-32 sm:w-40 cursor-pointer'
        onClick={() => navigate('/')}
      />

      <button
        onClick={logout}
        className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
      >
        Logout
      </button>
    </div>
  )
}

export default Layout