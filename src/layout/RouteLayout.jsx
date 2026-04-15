import React from 'react'
import { Outlet } from 'react-router'
Navber
import Footer from '../shared/Footer'
import Navber from '../shared/Navber'
export const RouteLayout = () => {
  return (
  <>
<Navber/>
  {/* {daynamic} */}
  <Outlet />
<Footer/> 
</>
  )
}
