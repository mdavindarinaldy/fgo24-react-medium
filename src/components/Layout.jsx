import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 pb-10 bg-gray-100'>
        <NavBar/>
        <div className='h-[10svh]'></div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout