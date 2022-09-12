import React, {useState} from 'react'
import Data, {brows, waxing, sugar} from './Data'
import FadeInOut from './FadeInOut';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Appointment = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false)
  const [value, onChange] = useState(new Date());
  // const [styles, setStyles] = useState({
  //   backgroundColor: '',
  //   color: ''
  // })
  const togglebutton = (e) =>{
    e.preventDefault();
    setShow(!show)
  }
  const buttonclick = (e) =>{
    e.preventDefault()
    setItems([
      ...items,
      e.target.value
    ])

  }
  const cancelclick =(e)=>{
    e.preventDefault()
    itemlist.forEach((item, index, arr) => {
      if (item == item) {
        arr.splice(index, 1);
      }
    });
   

  }
  const itemlist = []
  items.forEach((data) => {
    itemlist.push(<ul> <li className='mb-4  text-xs sm:text-sm font-medium text-pink-500'>{data} <span className='ml-6 font-bold'  onClick={cancelclick}> x </span></li></ul>)
  })


  if (items.length >= 5){
    items.splice(4, 1)
    alert("only 4 Appointments or less daily")
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
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.title} onClick={buttonclick}>Add</button>
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
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.title} onClick={buttonclick}>Add</button>
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
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.title} onClick={buttonclick}>Add</button>
      </div>

    </div>

    )
  })
  const sugarlist = sugar.map(item=>{
    return(
      <div className='each-service flex justify-between my-4 border-b-2 py-2'>
      <div className='title text-pink-500 font-bold w-4/12 text-sm md:text-base'>
        {item.title}
      </div>
      <div className='price font-bold text-gray-600'>
      ₦{item.price}
      </div>
      <div className='add w-3/12 text-center'>
        <button className='w-6/12 md:w-5/12 bg-pink-500  h-6 md:h-8 rounded text-white font-medium text-sm' name={item.title} value={item.title} onClick={buttonclick}>Add</button>
      </div>

    </div>

    )
  })

  return (
    <div className='appointment py-8'>
      <div>
        <h2 className='text-pink-500 text-3xl my-8 font-bold'>Lashes</h2>
        {list}</div>
        <div>
        <h2 className='text-pink-500 text-3xl my-8 font-bold'>Brows</h2>{browslist}</div>
        <div>
        <h2 className='text-pink-500 text-3xl my-8 font-bold'>Waxing</h2>{waxinglist}</div>
        <div>
        <h2 className='text-pink-500 text-3xl my-8 font-bold'>Sugar Waxing</h2>{sugarlist}</div>

      <div className='book  mt-12 mb-4 flex justify-center sticky bottom-0 bg-white p-8'>

        <FadeInOut show={show} duration={500} >
         <div className='w-auto mr-8 transition-all'>{itemlist} </div> 
         </FadeInOut>
      <div className='flex relative'>
      {items.length > 0 && <div className='rounded-full w-5 h-4 bg-red-500 text-center text-white font-bold text-xs ml-4 absolute top-1.5'>{items.length}</div>}
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-500 mr-8 mt-4" onClick={togglebutton}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

</div>
<a className='w-10/12 md:w-8/12 bg-pink-500 h-16 rounded-lg text-white font-bold text-2xl flex justify-center items-center' href={`https://api.whatsapp.com/send?phone=2348129377761&text=Hello%20I%20would%20like%20to%20get%20${items}%20lashes%20on ${value}`}> BOOK NOW 
  </a>

      
      <Popup
    trigger={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-pink-500 mt-2 ml-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
  }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close text-pink-500 text-2xl font-bold" onClick={close}>
          &times;
        </button>
        <div className="header text-pink-500 font-bold m-4"> Select Booking Date</div>
        <div className='m-auto'><Calendar onChange={onChange} value={value} /></div>
        <div className="actions">
          <button
            className="button bg-pink-500 w-24 h-8 rounded-md m-auto md:m-none text-white text-xs m-4 font-bold mt-4"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Select Date
          </button>
        </div>
      </div>
    )}
  </Popup>
    </div>
 

    </div>
  )
}

export default Appointment