import React from 'react'
import { Link } from 'react-router-dom'

const TrendingData = (props) => {
  return (
    <div className='h-full w-full border shadow-md rounded-lg overflow-hidden relative '>
      <div className='w-full h-[200px]'>
        <img src={props.url} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='px-3 py-4 min-h-[130px] mb-2'>
        <h2 className='text-[17px] mb-3 font-semibold'>{props.title}</h2>
        <p className='text-[13px]'>{props.discription}</p>
      </div>
      <div className='px-3 mb-5'>
      <button className="px-7 py-2 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md"><Link to={'/courses'} onClick={()=>{window.scrollTo(0,0)}}>Read More</Link></button>
      </div>
    </div>
  )
}

export default TrendingData
