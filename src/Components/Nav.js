import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav w-12/12 flex flex-col'>
      <div className='w-12/12 m-auto'><img src='oyemlogo.jpg' /></div>
        <div className='nav-1 flex justify-center my-8 text-center'>
            <div className='home w-6/12 '>
                <NavLink to="/"  className={({ isActive })=>(isActive ? "text-pink-500 font-bold border-b-2 border-pink-500" : "text-pink-400")}> Home</NavLink>
                
            </div>
            <div className='Appointment w-6/12 '>
                <NavLink to="/appointment"  className={({ isActive })=>(isActive ? "text-pink-500 font-bold border-b-2 border-pink-500" : "text-pink-400")}>Book Appointment</NavLink>
                
            </div>

        </div>
    </div>
  )
}

export default Nav