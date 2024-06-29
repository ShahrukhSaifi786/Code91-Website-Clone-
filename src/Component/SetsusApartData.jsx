import React from 'react'

const SetsusApartData = (props) => {
  return (
    <div className='border shadow-md px-4 py-7 h-full'>
      <div className='flex items-center justify-center mb-3'>
        <img src={props.url} alt="" className='w-[70px]' />
      </div>
      <div className='text-center mb-3'>
        <h2 className='text-2xl font-bold text-[#582c4f]'>{props.title}</h2>
      </div>
      <div className='text-center'>
        <p className='text-xl'>{props.discription}</p>
      </div>
    </div>
  )
}

export default SetsusApartData
