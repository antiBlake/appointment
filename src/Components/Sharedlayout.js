import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Sharedlayout = () => {
  return (
    <>
    <Nav />

    <Outlet />
    </>
  )
}

export default Sharedlayout