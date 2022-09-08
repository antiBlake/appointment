import { gridLayer } from 'leaflet'
import React, {useState} from 'react'
import Data, {brows, waxing} from './Data'


const Appointment = () => {
  const [items, setItems] = useState({})
  const [count, setCount] = useState(0)
  const styles = {
    backgroundColor: 'gray',
    color: 'black'
  }
  const buttonclick = (e) =>{
    e.preventDefault()
    setItems({
      ...items,
      [e.target.name]: e.target.value

    })
    setCount(prevCount=> prevCount + 1)
    console.log(count);

  }
  const list = Data.map(item=>{
    return(
      <div className='each-service flex justify-between my-4 border-b-2 py-2'>
      <div className='title text-pink-500 font-bold w-4/12 text-sm md:text-base'>
        {item.title}
      </div>
      <div className='price font-bold text-gray-600'>
      ₦{item.price}
      </div>
      <div className='add w-3/12 text-center'>
        <button style={styles} className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.price} onClick={buttonclick}>Add</button>
      </div>

    </div>

    )
  })

  const browslist = brows.map(item=>{
    return(
      <div className='each-service flex justify-between my-4 border-b-2 py-2'>
      <div className='title text-pink-500 font-bold w-4/12 text-sm md:text-base'>
        {item.title}
      </div>
      <div className='price font-bold text-gray-600'>
      ₦{item.price}
      </div>
      <div className='add w-3/12 text-center'>
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.price} onClick={buttonclick}>Add</button>
      </div>

    </div>

    )
  })

  const waxinglist = waxing.map(item=>{
    return(
      <div className='each-service flex justify-between my-4 border-b-2 py-2'>
      <div className='title text-pink-500 font-bold w-4/12 text-sm md:text-base'>
        {item.title}
      </div>
      <div className='price font-bold text-gray-600'>
      ₦{item.price}
      </div>
      <div className='add w-3/12 text-center'>
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.price} onClick={buttonclick}>Add</button>
      </div>

    </div>

    )
  })
  return (
    <div className='appointment py-8'>
      {list}
      {browslist}
      {waxinglist}
      <div className='book mt-12 mb-4 flex justify-center sticky bottom-0 bg-white p-8'>
      <div className='flex relative'>
      <div className='rounded-full w-5 h-4 bg-red-500 text-center text-white font-bold text-xs ml-4 absolute top-1.5'>{count}</div>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-500 mr-8 mt-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

</div>

      <button className='w-10/12 md:w-8/12 bg-pink-500 h-16 rounded-lg text-white font-bold text-2xl'> BOOK NOW </button>
    </div>
 

    </div>
  )
}

export default Appointment