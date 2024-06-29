import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AboutData } from "../Assest/About";
import Aboutdata from "../Component/Aboutdata";
import { MissionData } from "../Assest/Mission";
const About = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[150px]  mb-14  flex items-end justify-center bgimage">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-[#582c4f] mb-3 ">
          ABOUT /
          <Link to={"/"} onClick={()=>{window.scrollTo(0,0)}}>
            <FaHome />
          </Link>
        </h2>
      </div>
      <div>
        <h2 className="text-[#582c4f] text-center mb-10 lg:text-4xl md:text-3xl text-2xl  font-semibold">EMPOWERING EXCELLENCE</h2>
      </div>
      <div className="w-full px-6 py-5 sm:px-3 sm:py-3">
          {
            AboutData.map((item,i)=>{
              return <>
              <Aboutdata
              url={item.URL}
              content={item.content}
              condition={i%2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
              />
              </>
            })
          }
      </div>
      <div>
        <h2 className="text-[#582c4f] text-center mb-8 lg:text-4xl md:text-3xl text-2xl  font-semibold">UNLEASHING POTENTIAL, ENRICHING LIVES</h2>
      </div>
      <div className="w-full px-6 py-5 sm:px-3 sm:py-3">
          {
            MissionData.map((item,i)=>{
              return <>
              <Aboutdata
              url={item.URL}
              content={item.content}
              condition={i%2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
              />
              </>
            })
          }
      </div>
    </div>
  );
};

export default About;
