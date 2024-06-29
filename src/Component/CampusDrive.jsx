import React from "react";
import CampusDrivee from '../Assest/CampusDrive.webp'
const CampusDrive = () => {
  return (
    <div className="w-full mb-10">
      <h2 className="text-center my-10  lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#582c4f]">BE A PART OF OUR UPCOMING CAMPUS DRIVE!</h2>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div>
            <img src={CampusDrivee} alt="" />
        </div>
        <div className="flex flex-col gap-4  px-7">
            <div className="mb-2">
                <input type="text" placeholder="Enter your Name" className="border w-full px-4 py-4 rounded-lg shadow-lg" />
            </div>
            <div>
                <input type="text" placeholder="Enter your Phone Number" className="border w-full  px-4 py-4 rounded-lg shadow-lg" />
            </div>
            <div className="text-center">
                <button className="px-7 py-2 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CampusDrive;
