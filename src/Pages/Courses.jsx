import React from "react";
import background from "../Assest/background.webp";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CourseData } from "../Assest/Courses";
import CourseDataShow from "../Component/CourseDataShow";
const Courses = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[150px] hidden mb-9  md:flex items-end justify-center bgimage">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-[#582c4f] mb-3 ">
          COURSES /
          <Link to={"/"} onClick={()=>{window.scrollTo(0,0)}}>
            <FaHome />
          </Link>
        </h2>
      </div>
      <div className="w-full md:px-9 md:py-7 px-3 py-5">
        {CourseData.map((item, i) => {
          return (
            <>
              <CourseDataShow
                url={item.URL}
                title={item.title}
                discription={item.discription}
                content={item.content}
                duration={item.duration}
                condition={i % 2 == 0 ? "flex-row" : "flex-row-reverse"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
