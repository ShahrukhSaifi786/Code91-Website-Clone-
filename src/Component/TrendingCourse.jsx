import React from 'react'
import TrendingData from './TrendingData'
import { TrendingCourseData } from '../Assest/TrendingData'
const TrendingCourse = () => {
  return (
    <div className='w-full mb-10'>
    <h2 className='mb-12 text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#582c4f]'>TRENDING COURSES</h2>
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 items-center px-3'>
    {
        TrendingCourseData.map((item,i)=>{
            return <>
            <TrendingData
            url={item.URL}
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

export default TrendingCourse
