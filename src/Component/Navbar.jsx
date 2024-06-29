import React from "react";
import logo from "../Assest/logo.webp";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-[100%] sticky top-0 z-[1000]">
      <nav className="w-full bg-gradient-to-t from-rose-50 to-teal-50  shadow-sm  shadow-gray-400 px-6 py-3 md:py-5">
        {/* Big Devices */}
        <div className="xl:max-w-[1400px] lg:max-w-[1000px] md:max-w-[800px] flex items-center  justify-between mx-auto mb-4 md:mb-0">
          <div>
            <Link
              to={"/"}
              onClick={() => {
                scrollTo(0, 0);
              }}
            >
              <img src={logo} className="w-[150px] cursor-pointer" alt="" />
            </Link>
          </div>
          <ul className="hidden md:flex gap-5">
            <li className="font-semibold sm:text-[16px]  text-[#582c4f] text-xs">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li className="font-semibold sm:text-[16px]  text-[#582c4f] text-xs">
              <Link
                to={"/courses"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Courses
              </Link>
            </li>
            <li className="font-semibold sm:text-[16px]  text-[#582c4f] text-xs">
              <Link
                to={"/service"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Service
              </Link>
            </li>
            <li className="font-semibold sm:text-[16px]  text-[#582c4f] text-xs">
              <Link
                to={"/about"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                About
              </Link>
            </li>
            <li className="font-semibold sm:text-[16px]  text-[#582c4f] text-xs">
              <Link
                to={"/contact"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <Link to="tel:9717713724">
              <VscCallOutgoing className="w-[25px] h-[25px] text-[#582c4f]" />
            </Link>
            <Link target="_blank" to="https://wa.me/919717713724">
              <FaWhatsapp className="w-[25px] h-[25px] text-[#582c4f]" />
            </Link>
          </div>
        </div>
        {/* Small devicex */}
        <ul className="flex  justify-between sm:text-xl text-xs  md:hidden">
          <li className="font-semibold  sm:text-[16px] text-[#582c4f]  text-xs">
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>
          <li className="font-semibold  sm:text-[16px] text-[#582c4f]  text-xs">
            <Link
              to={"/courses"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Courses
            </Link>
          </li>
          <li className="font-semibold  sm:text-[16px] text-[#582c4f]  text-xs">
            <Link
              to={"/service"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Service
            </Link>
          </li>
          <li className="font-semibold  sm:text-[16px] text-[#582c4f]  text-xs">
            <Link
              to={"/about"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              About
            </Link>
          </li>
          <li className="font-semibold  sm:text-[16px] text-[#582c4f]  text-xs">
            <Link
              to={"/contact"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
