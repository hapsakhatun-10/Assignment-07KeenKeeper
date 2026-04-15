import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navber from '../shared/Navber'

const RouteLayout = () => {
  return (
    <>
      <Navber />
      {/* dynamic content */}
      <Outlet />
      <Footer />
    </>
  )
}

export default RouteLayout;