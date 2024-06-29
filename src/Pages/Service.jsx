import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PlacementData } from "../Assest/Placement";
import { ProgramData } from "../Assest/AssistanceProgram";
import { Trainingdata } from "../Assest/Training";
import { InterShipData } from "../Assest/InternShip";
import {ProjectConsultancy} from '../Assest/ProjectConsultancy'
import {ManpowerData} from '../Assest/ServiceManpower'
import {CorporateTraining} from '../Assest/CorporateTraining'
const Service = () => {
  const [placement, setPlacement] = useState(null);
  const [program, setProgram] = useState(null);
  const [training, setTraining] = useState(null);
  const [internship, setInternShip] = useState(null);
  const [consultancy,setConsultancy] = useState(null);
  const [manpower,setManpower] = useState(null);
  const [cotraining,setCotraining] = useState(null);
  const placementoggle = (i) => {
    if (placement === i) {
      return setPlacement(null);
    }
    setPlacement(i);
  };
  const programtoggle = (i) => {
    if (program === i) {
      return setProgram(null);
    }
    setProgram(i);
  };
  const trainingToggle = (i) => {
    if (training === i) {
      return setTraining(null);
    }
    setTraining(i);
  };
  const InternshipToggle = (i) => {
    if (internship === i) {
      return setInternShip(null);
    }
    setInternShip(i);
  };
  const ConsultancyToggle = (i) => {
    if (consultancy === i) {
      return setConsultancy(null);
    }
    setConsultancy(i);
  };
  const ManpowerToggle = (i) => {
    if (manpower === i) {
      return setManpower(null);
    }
    setManpower(i);
  };
  const CorporateTrainingToggle = (i) => {
    if (cotraining === i) {
      return setCotraining(null);
    }
    setCotraining(i);
  };
  return (
    <div className="w-full px-5 py-3">
      <div className="w-full h-[150px]  mb-14  flex items-end justify-center bgimage">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-[#582c4f] mb-3 ">
          SERVICE /
          <Link to={"/"} onClick={()=>{window.scrollTo(0,0)}}>
            <FaHome />
          </Link>
        </h2>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
          PAY AFTER PLACEMENT
        </h2>
        {PlacementData.map((item, i) => (
          <div className="mb-5">
            <div   onClick={() => placementoggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{placement === i ? "-" : "+"}</span>
            </div>
            <div
              className={`md:px-7 md:py-5 px-3 py-3 ${placement === i ? "block" : "hidden"}`}
            >
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
          <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
          PLACEMENT ASSISTANCE PROGRAM
        </h2>
        {ProgramData.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => programtoggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{program === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${program === i ? "block" : "hidden"}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
        TECHNICAL TRAINING
        </h2>
        {Trainingdata.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => trainingToggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{training === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${training === i ? "block" : "hidden"}`}>
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
        PAID INTERNSHIP
        </h2>
        {InterShipData.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => InternshipToggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{internship === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${internship === i ? "block" : "hidden"}`}>
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
        GOVERNMENT PROJECTS CONSULTANCY
        </h2>
        {ProjectConsultancy.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => ConsultancyToggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{consultancy === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${consultancy === i ? "block" : "hidden"}`}>
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
        CONSULTANCY SERVICES FOR MANPOWER
        </h2>
        {ManpowerData.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => ManpowerToggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{manpower === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${manpower === i ? "block" : "hidden"}`}>
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
      <div className="w-full border shadow-lg rounded-lg px-5 py-5 mb-10">
        <h2 className="text-center text-[#582c4f] sm:text-4xl text-2xl font-semibold mb-5 mt-3">
        CORPORATE TRAINING
        </h2>
        {CorporateTraining.map((item, i) => (
          <div className="mb-5">
            <div
              onClick={() => CorporateTrainingToggle(i)}
              className="px-5 py-4 rounded-xl flex items-center justify-between bg-rose-50 cursor-pointer"
            >
              <h2>{item.question}</h2>
              <span>{cotraining === i ? "-" : "+"}</span>
            </div>
            <div className={`md:px-7 md:py-5 px-3 py-3 ${cotraining === i ? "block" : "hidden"}`}>
              <p className="text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="px-7 py-3 bg-[#582c4f] text-white hover:bg-[#E0115F] hover:text-black rounded-md">
            <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Request a Callback</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
