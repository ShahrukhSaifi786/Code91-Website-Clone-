import React from "react";
import logo from "../Assest/logo.webp";
import { Link } from "react-router-dom";
import {
  FaBlogger,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  function handleScrollTo(){
    window.scroll(0,0);
  }
  return (
    <div className="w-full sm:px-8 sm:py-8 px-4 py-4 bg-gradient-to-t from-rose-100 to-teal-50 border">
      <div className="w-full grid sm:gap-6 gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:px-6 sm:py-6 px-3 py-3 border shadow-md rounded-lg">
        {/* col1 */}
        <div className="mb-3">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <div className="mb-5">
            {/* <img src={logo} className="w-[150px]" alt="" /> */}
            <Link to={'/'} onClick={handleScrollTo}>
              <img src={logo} className="w-[150px]" alt="" />
            </Link>
          </div>
          <div>
            <p className="text-sm">
              Code91 is an exceptional training institute located in Noida,
              which is widely regarded as one of the top online learning
              platforms and job-focused IT training centers in the Delhi NCR
              region.
            </p>
          </div>
        </div>
        {/* col2 */}
        <div className="mb-3">
          <h2 className="mb-4 text-2xl font-semibold">Navigation</h2>
          <ul>
            <li className="border-b border-b-black mb-2 pb-2 text-[16px] text-gray-600 cursor-pointer hover:text-black">
              <Link
                to={"/"}
                onClick={handleScrollTo}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-b-black mb-2 pb-2 text-[16px] text-gray-600 cursor-pointer hover:text-black">
              <Link
                to={"/courses"}
                onClick={handleScrollTo}
              >
                Courses
              </Link>
            </li>
            <li className="border-b border-b-black mb-2 pb-2 text-[16px] text-gray-600 cursor-pointer hover:text-black">
              <Link
                to={"/service"}
                onClick={handleScrollTo}
              >
                Service
              </Link>
            </li>
            <li className="border-b border-b-black mb-2 pb-2 text-[16px] text-gray-600 cursor-pointer hover:text-black">
              <Link
                to={"/about"}
                onClick={handleScrollTo}
              >
                About
              </Link>
            </li>
            <li className="border-b border-b-black mb-2 pb-2 text-[16px] text-gray-600 cursor-pointer hover:text-black">
              <Link
                to={"/contact"}
                onClick={handleScrollTo}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* col-3 */}
        <div className="flex flex-col gap-2 mb-3">
          <h2 className="mb-2 text-2xl font-semibold">Address</h2>
          <p className="text-sm">
            C94, Udhyog Marg, near Jaypee Outlet, C Block, Sector 8, Noida,
            Uttar Pradesh 201301
          </p>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Mobile : </h3>
            <Link to="tel:9717713724">9717713724</Link>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Email : </h3>
            <Link to="mailto:contact@code91.co">contact@code91.co</Link>
          </div>
        </div>
        {/* col-4 */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Social Media</h2>
          <ul>
            <li className="mb-3 pb-1 cursor-pointer text-gray-600 text-[16px] border-b border-b-black hover:text-black">
              {" "}
              <Link
                to={"https://www.instagram.com/code91_co/"}
                className="flex items-center gap-3"
              >
                <FaInstagram /> Instagram
              </Link>{" "}
            </li>
            <li className="mb-3 pb-1 cursor-pointer text-gray-600 text-[16px] border-b border-b-black hover:text-black">
              <Link
                to={"https://www.linkedin.com/company/code91foru/"}
                className="flex items-center gap-3"
              >
                <FaLinkedin /> Linkedin
              </Link>
            </li>
            <li className="mb-3 pb-1 cursor-pointer text-gray-600 text-[16px] border-b border-b-black hover:text-black">
              <Link
                to={"https://www.facebook.com/people/Code91/100093543467075/"}
                className="flex items-center gap-3"
              >
                <FaFacebook /> Facebook
              </Link>
            </li>
            <li className="mb-3 pb-1 cursor-pointer text-gray-600 text-[16px] border-b border-b-black hover:text-black">
              <Link
                to={"https://twitter.com/Code91Co"}
                className="flex items-center gap-3"
              >
                <FaTwitter /> Twitter
              </Link>
            </li>
            <li className="mb-3 pb-1 cursor-pointer text-gray-600 text-[16px] border-b border-b-black hover:text-black">
              <Link
                to={"https://code91co.blogspot.com/"}
                className="flex items-center gap-3"
              >
                <FaBlogger /> Blogger
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
