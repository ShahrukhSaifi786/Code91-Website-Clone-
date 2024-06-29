import React from 'react'

const Aboutdata = (props) => {
  return (
    <div className={`max-w-[1300px] mx-auto flex flex-col   ${props.condition} mb-10 lg:gap-14 gap-7` }>
      <div  className='basis-[100%] lg:basis-[40%]   flex justify-center '>
        <img src={props.url} className='lg:w-[100%] ' alt="" />
      </div>
      <div className='basis-[100%] lg:basis-[60%]   flex items-center justify-center '>
        <p className='text-[15px]'><span className='text-xl font-bold font-serif'>CODE91</span>{props.content}</p>
      </div>
    </div>
  )
}

export default Aboutdata
