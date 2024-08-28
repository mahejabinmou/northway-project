/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./hero.css";

import Navbar from "../../Shared/Navbar/Navbar";
import { MdArrowRightAlt } from "react-icons/md";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar></Navbar>
      {/* mobile */}
      {/* Slider Container */}
      <div className=" md:hidden block ">
        <div className="relative ">
          <div
            style={{
              backgroundImage: `url(${"https://i.ibb.co/svGKkkx/frame-58-66cecf6f5b40e.webp"})`,
            }}
            className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] md:h-[80vh]   lg:h-[100vh] 2xl:h-[100vh]"
          ></div>
        </div>
      </div>

      {/* Slider Container big screen*/}
      <div className="  hidden md:block ">
        <div className="relative ">
          <div
            style={{
              backgroundImage: `url(${"https://i.ibb.co/svGKkkx/frame-58-66cecf6f5b40e.webp"})`,
            }}
            className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]   md:h-[70vh] lg:h-[70vh]  xl:h-[100vh] 2xl:h-[100vh]"
          ></div>
          <div className="absolute inset-0 font-helvetica xl:top-[200px] xl:ml-[150px] xl:mr-[733px]">
            <h1 className="text-white xl:text-[64px] font-bold xl:leading-[77px] xl:pb-[15px]">
              <span className="text-[#F6941E]">Welcome</span> to Northway Global
            </h1>
            <p className="text-white xl:pb-[30px] font-helvetica font-normal xl:text-[24px] xl:leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
              Start Your Journey <MdArrowRightAlt />
            </button>
          </div>

          <div className="absolute inset-0 font-helvetica xl:top-[597px] xl:bottom-[177px] xl:mx-[150px] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px]">
            <div className="bg-white/[0.15] flex items-center xl:gap-x-[16px] xl:px-[28px] xl:py-[34px] xl:w-[267px] xl:h-[140px] border  border-white/[0.2]  text-white">
              <img
                className="xl:w-[50px] xl:h-[50px]"
                src="https://i.ibb.co/Hx6q9Ns/vector-3-66cf81d0282e5.webp"
                alt=""
              />
              <p className="herocardText">Experienced Consultants</p>
            </div>

            <div className="bg-white/[0.15]  border-b-[#F6941E] border-b-2 flex items-center xl:gap-x-[16px] xl:px-[28px] xl:py-[34px] xl:w-[267px] xl:h-[140px]">
              <img
                className="xl:w-[50px] xl:h-[50px]"
                src="https://i.ibb.co/QcBSbWw/frame-1-66cf82241ae84.webp"
                alt=""
              />
              <p className="herocardText text-[#F6941E]">98.8% Success Rate</p>
            </div>

            <div className="bg-white/[0.15] flex items-center xl:gap-x-[16px]  xl:px-[28px] xl:py-[34px] xl:w-[267px] xl:h-[140px]  border  border-white/[0.2]  text-white">
              <img
                className="xl:w-[50px] xl:h-[50px]"
                src="https://i.ibb.co/kJn5cHY/group-66cf8262e596a.webp"
                alt=""
              />
              <p className="herocardText2">Positive And Timely Results</p>
            </div>
            <div className="bg-white/[0.15] flex items-center xl:gap-x-[16px] xl:px-[28px] xl:py-[34px] xl:w-[267px] xl:h-[140px] border  border-white/[0.2]  text-white">
              <img
                className="xl:w-[50px] xl:h-[50px]"
                src="https://i.ibb.co/F8ZfMfM/frame-2-66cf82a790568.webp"
                alt=""
              />
              <p className="herocardText">Seamless Procedures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
