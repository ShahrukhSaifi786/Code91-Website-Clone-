import React from "react";
import HeaderBanner from '../Assest/Header-Banner.avif'
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div className="w-full  grid lg:grid-cols-2 grid-cols-1 items-center px-2 md:px-0 mb-1">
      <div className="ps-9 pr-6 py-4">
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#582c4f] mb-4">
          Transform Your Tech Career, Get High Paying Jobs! 
          <span className="text-[#E0115F] ps-2">PAY AFTER PLACEMENT</span>
        </h2>
        <button className="rounded-lg px-9 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black"><Link to={'/service'} onClick={()=>window.scrollTo(0,0)}>Explore More</Link></button>
      </div>
      <div className="lg:ps-6 md:block hidden">
        <img src={HeaderBanner} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
