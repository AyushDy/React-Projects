import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

const Mainlayout = () => {
  return (
    <>
    <Header />
    <div className='my-30 mt-0'>
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Mainlayout