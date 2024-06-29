import React from "react";
import { FaStar } from "react-icons/fa";
const TestimonialsDataShow = (props) => {
  return <div className="px-5 py-5 h-full border shadow-lg rounded-xl overflow-hidden">
       <div className="w-full h-[200px]  flex items-center justify-center mb-5">
       <div className="w-[200px] h-[200px]">
          <img src={props.url} className="w-full h-full object-fill" alt="" />
        </div>
       </div>
        <div className="flex flex-col gap-5 items-center mb-5">
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <div className="flex gap-2">
            <FaStar className="text-2xl text-[green]"/>
            <FaStar className="text-2xl text-[green]"/>
            <FaStar className="text-2xl text-[green]"/>
            <FaStar className="text-2xl text-[green]"/>
            <FaStar className="text-2xl text-[green]"/>
          </div>
        </div>
        <div className="px-3 mb-2">
          <p>{props.discription}</p>
        </div>
  </div>;
};

export default TestimonialsDataShow;
