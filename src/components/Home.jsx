import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yuvraj Sharma
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8992b0]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#8992b0] py-4 max-w-[700px]">
          specializing in web development, user interface design, HTML, and
          ReactJS. Currently, I'm focused on building backend web application.
        </p>
        <div className="flex space-x-3">
          <Link to="project" smooth={true} duration={500}>
            <button className="text-white border-2 group px-6 py-3 my-2 flex item-center hover:bg-blue-300 hover:border-blue-300">
              View Work
              <span
                className="group-hover:rotate-90
            duration-300"
              >
                {" "}
                <HiArrowNarrowRight className="ml-2 mt-1" />
              </span>
            </button>
          </Link>
          <a href="https://drive.google.com/file/d/1yllGgAKM9HiiqocT1g39v61k4KCnUzpL/view?usp=share_link">
            <button className="text-white border-2 group px-6 py-3 my-2 flex item-center hover:bg-blue-300 hover:border-blue-300">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
