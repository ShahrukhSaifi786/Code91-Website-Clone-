import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import carouselImage from "../Assest/p1.webp";
const CorporatePartners = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center mb-10 px-3 ">
      <h2 className="md:text-4xl text-2xl font-semibold text-[#582c4f]">OUR CORPORATE PARTNERS</h2>
      <div className="md:w-[750px] border flex items-center justify-between px-3 py-5">
        <div className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-gray-300 rounded-full cursor-pointer">
          <BsChevronCompactLeft />
        </div>
        <div className="flex items-center justify-center">
          <img src={carouselImage} className="md:h-[200px] md:w-full w-[50%] " alt="" />
        </div>
        <div className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-gray-300 rounded-full cursor-pointer">
          <BsChevronCompactRight />
        </div>
      </div>
    </div>
  );
};

export default CorporatePartners;
