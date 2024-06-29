import React from 'react'
import { ApartData } from '../Assest/Apart'
import SetsusApartData from './SetsusApartData'

const SetsUsApart = () => {
  return (
    <div className='w-full mb-5'>
        <h2 className='mb-8 text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#582c4f]'>WHAT SETS US APART</h2>
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 mb-10  gap-4 items-center px-3'>
        {
            ApartData.map((item,i)=>{
                return <>
                <SetsusApartData
                url={item.url}
                title={item.title}
                discription={item.discription}
                />
                </>
            })
        }
        </div>
    </div>
  )
}

export default SetsUsApart
