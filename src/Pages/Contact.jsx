import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Map from "../Component/Map";

const Contact = () => {
  return (
    <>
    <div className="w-full mb-6">
      <div className="w-full h-[150px]  mb-8  flex items-end justify-center bgimage">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-[#582c4f] mb-3 ">
          CONTACT /
          <Link to={"/"} onClick={()=>{window.scrollTo(0,0)}}>
            <FaHome />
          </Link>
        </h2>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 py-4 flex items-center flex-col lg:flex-row lg:gap-10 ">
        <div className="lg:basis-[50%] ">
          <h2 className="text-3xl font-semibold text-[#582c4f] mb-3">
            CONTACT US
          </h2>
          <div>
            <p className="mb-4">
              We welcome your inquiries and feedback. Feel free to reach out to
              us with any questions or concerns you may have. We are here to
              assist you promptly and provide the support you need.
            </p>
          </div>
          <p className="mb-2">C-94, Sector 8, Noida</p>
          <p className="mb-2">+91 971-771-3724</p>
          <p className="mb-2">hr@code91.co</p>
        </div>
        <div className="w-full lg:basis-[50%]">
          <div className="w-full py-2">
            <input
              type="text"
              className="border w-full px-3 py-[10px] rounded-md shadow-lg"
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full  py-2">
            <input
              type="email"
              className="border w-full px-3 py-[10px] rounded-md shadow-lg"
              placeholder="Email address"
              required
            />
          </div>
          <div className="w-full  py-2">
            <input
              type="text"
              className="border w-full px-3 py-[10px] rounded-md shadow-lg"
              placeholder="Enter your number"
              required
            />
          </div>
          <div className="w-full  py-2">
            <textarea
              name=""
              id=""
              rows="2"
              className="w-full border px-3 py-2 shadow-lg rounded-md resize-none"
              placeholder="Message "
              required
            ></textarea>
          </div>
          <div>
            <button className="px-10 py-3 bg-[#582c4f] rounded-lg text-white hover:bg-[#E0115F] hover:text-black">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <Map/>
    </>
  );
};

export default Contact;
