import React from "react";
import Gif from "../assets/a37oR.gif";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full pb-12">
      <img className="h-80 m-auto mt-3" src={Gif} alt="" />
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-14 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold pb-14">
            <p>Hi, I'm Yuvraj, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="font-sans">
              Interested in the role of a Software Engineer and web developer
              where I can contribute my skills and knowledge acquired by
              pursuing my degree in Bachelor of Engineering . Looking for a
              dynamic and progressive company where my skills are utilized in
              the maximum way possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
