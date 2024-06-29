import React from "react";
import { Link } from "react-router-dom";

const CourseDataShow = (props) => {
  return (
    <div
      className={`w-full border-2 rounded-2xl shadow-xl md:px-8 md:py-16 px-4 py-7 lg:flex  lg:items-center lg:justify-center gap-5 mb-8 ${props.condition} `}
    >
      <div className=" lg:basis-[50%] basis-[100%]  flex justify-center">
        <img
          src={props.url}
          className="lg:w-[70%] lg:mb-0 mb-5 rounded-lg"
          alt=""
        />
      </div>
      <div className="lg:basis-[50%] basis-[100%]">
        <h2 className="lg:text-4xl mg:text-2xl text-xl sm:mb-6 mb-3 font-semibold text-[#582c4f]">
          {props.title}
        </h2>
        <h3 className="sm:text-2xltext-xl sm:mb-4 mb-2 font-semibold">
          COURSE DURATION :{" "}
          <span className="sm:text-[18px] text-sm">{props.duration}</span>
        </h3>
        {props.content.map((item) => {
          return (
            <>
              <p className="mb-2 font-[500]">{item}</p>
            </>
          );
        })}
        <div className="md:px-2 mt-6">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link
              to={"/contact"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Request a Callback
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDataShow;
