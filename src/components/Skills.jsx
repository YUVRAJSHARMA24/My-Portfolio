import React from "react";
import C from "../assets/c.svg";
import HTML from "../assets/html-5.svg";
import CSS from "../assets/css.svg";
import JAVASCRIPT from "../assets/javascript.svg";
import REACT from "../assets/react.svg";
import TAILWIND from "../assets/Tailwind_CSS_Logo.svg.png";
import GIT from "../assets/git.svg";
import GITHUB from "../assets/github.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-cenyer w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 py-1 border-blue-400">
            Tools & Technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 pb-2">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={C} alt="C++ icon" />
            <p className="font-bold my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="C++ icon" />
            <p className="font-bold my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="C++ icon" />
            <p className="font-bold my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={JAVASCRIPT} alt="C++ icon" />
            <p className="font-bold my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={REACT} alt="C++ icon" />
            <p className="font-bold my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={TAILWIND} alt="C++ icon" />
            <p className="font-bold my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={GIT} alt="C++ icon" />
            <p className="font-bold my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={GITHUB} alt="C++ icon" />
            <p className="font-bold my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
