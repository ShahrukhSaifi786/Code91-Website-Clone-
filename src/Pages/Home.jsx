import React from 'react'
import HomeBanner from '../Component/HomeBanner'
import CampusDrive from '../Component/CampusDrive'
import SetsUsApart from '../Component/SetsUsApart'
import TrendingCourse from '../Component/TrendingCourse'
import Testimonials from '../Component/Testimonials'
import CorporatePartners from '../Component/CorporatePartners'

const Home = () => {
  return (
    <>
      <HomeBanner/>
      <CampusDrive/>
      <SetsUsApart/>
      <TrendingCourse/>
      <Testimonials/>
      <CorporatePartners/>
    </>
  )
}

export default Home
