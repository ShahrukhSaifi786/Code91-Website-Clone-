import React from "react";
import { TestimonialsData } from "../Assest/Testimonal";
import TestimonialsDataShow from "./TestimonialsDataShow";

const Testimonials = () => {
  return (
    <div className="w-full mb-10">
      <h2 className="mb-12 text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#582c4f]">
        TESTIMONIALS
      </h2>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 items-center px-3">
       {
        TestimonialsData.map((item,i)=>{
          return <>
          <TestimonialsDataShow 
          url = {item.URL}
          title= {item.title}
          discription={item.discription}
          />
          </>
        })
       }
      </div>
    </div>
  );
};

export default Testimonials;
