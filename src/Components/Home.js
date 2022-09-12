import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const handleClick = ()=>{
    
  }
  return (
   <div className='home flex flex-col'>
  
    <div className='contact text-lg md:text-2xl font-bold text-pink-500 my-8 '>
      <h2>Our Contact Details</h2>
      <div className='md:flex md:justify-around my-4'>
      <div className='address flex items-center text-base my-4'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<h4 className=' text-gray-600'>Ogbomoro Uvwie, Warri delta state 
</h4>
      </div>
      <div className='phone flex items-center text-base my-4'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
<h4 className=' text-gray-600'><a href="tel:08129377761">08129377761</a></h4>

      </div>
      <div className='mail flex items-center text-base my-4'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
<h4 className=' text-gray-600'><a href="mailto:Oputahsophia84@gmail.com">Oputahsophia84@gmail.com</a></h4>

      </div>
      </div>

    </div>

    <div className='available flex flex-col gap-y-2'>
      <h2 className='text-lg md:text-2xl font-bold text-pink-500 my-8'>We are Available on</h2>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Monday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Tuesday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Wednesday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Thursday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Friday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Saturday

        </div>
        <div className='time'>
          9:00AM - 5:00PM

        </div>

      </div>
      <div className='days flex justify-between text-gray-600 font-medium'>
        <div className='day font-bold'>
          Sunday

        </div>
        <div className='time'>
          Closed

        </div>

      </div>


    </div>
    <div className='services  my-8'>
      <h2 className='text-lg md:text-2xl font-bold text-pink-500 my-8'>Our Services</h2>
      <div className='gbox grid grid-cols-2 gap-8 md:grid-cols-4 font-bold'>
        <div className='service bg-pink-500 text-white font-medium flex items-center justify-center rounded-sm h-24'>
          Lashes

        </div>
        <div className='service bg-pink-500 text-white font-medium flex items-center justify-center rounded-sm h-24'>
          Brows

        </div>
        <div className='service bg-pink-500 text-white font-medium flex items-center justify-center rounded-sm h-24'>
          Hard Waxing

        </div>
        <div className='service bg-pink-500 text-white font-medium flex items-center justify-center rounded-sm h-24'>
          Sugar Waxing

        </div>
      </div>
      <div className='work-pics my-8'>
        <div className='pic1 h-4/6 my-4'>
          <img src='oyemphoto1.jpg' className='w-full h-auto' />
        </div>
        <div className='pic1 h-4/6 my-4'>
          <img src='oyemphoto2.jpg' className='w-full h-auto' />
        </div>
      </div>

    </div>
    <div className='Policy grid gap-2 text-red-600 font-bold'>
      <p className='text-lg md:text-2xl font-bold  my-8 '>POLICY</p>
<p>50% deposit is required to successfully book an appointment </p>

<p>Deposits are not refundable </p>

<p>Rescheduling is only available for the next 24hrs after the end of your initial appointment date and time</p>
    </div>
    <div className='book mt-12 mb-4 flex justify-center sticky bottom-0 bg-white p-8'>
    <NavLink to='/appointment' className='w-full flex justify-center'>
      <button className='w-11/12 md:w-8/12 bg-pink-500 h-16 rounded-lg text-white font-bold text-2xl' onClick={handleClick}> BOOK APPOINTMENT </button>
      </NavLink>
    </div>
 
   </div>
  )
}

export default Home