/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

import Navbar from "../../Shared/Navbar/Navbar";
import { MdArrowRightAlt } from "react-icons/md";
import HeroCard from "./HeroCard/HeroCard";

const HeroSection = () => {
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

  const officesData = [
    {
      name: "Experienced Consultants",
      image: "/Group.svg",
    },
    {
      name: "98.8% Success Rate",
      image: "/Frame.svg",
    },
    {
      name: "Positive And Timely Results",
      image: "/Frame (1).svg",
    },
    {
      name: "Seamless Procedures",
      image: "/Frame (2).svg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative ">
      <Navbar></Navbar>

      {/* mobile */}

      <div className="slider-container  md:hidden block overflow-hidden">
        <Slider {...settings}>
          {/* slider 1 */}
          <div className="  relative w-[100%] h-auto xs:h-[1100px]">
            <div>
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/qgrD8fG/uni1-671374a413d9c.webp"})`,
                  filter: "brightness(0.6)",
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
          mt-[100px]    xs:mt-[100px] px-[16px] 
          "
            >
              <h1 className="head1 text-white md:pb-[15px]  pb-[10px] max-w-[319px]">
                <span className="text-[#F6941E] ">Welcome</span> to Northway
                Global
              </h1>
              <p className="pb-[20px]  text-white  text-[14px] leading-[21px] font-helvetica font-normal max-w-[332px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button
                className="homeLargeAppoinMent flex items-center  justify-between
          gap-x-[10px]  
           bg-[#F6941E] px-[16px] py-[11.5px] "
              >
                <span className="">Start Your Journey</span> <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica  top-[420px] mx-[65px] 
        xs:top-[420px] xs:mx-[65px]   grid  grid-cols-1 gap-y-[24px] "
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>
          {/* slider 2 */}
          <div className="  relative w-[100%] h-auto xs:h-[1100px]">
            <div>
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/jrHYkGc/pexels-rdne-7713182.webp"})`,
                  filter: "brightness(0.6)",
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
          mt-[100px]    xs:mt-[100px] px-[16px] 
          "
            >
              <h1 className="head1 text-white md:pb-[15px]  pb-[10px] max-w-[319px]">
                <span className="text-[#F6941E] ">Welcome</span> to Northway
                Global
              </h1>
              <p className="pb-[20px]  text-white  text-[14px] leading-[21px] font-helvetica font-normal max-w-[332px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button
                className="homeLargeAppoinMent flex items-center  justify-between
          gap-x-[10px]  
           bg-[#F6941E] px-[16px] py-[11.5px] "
              >
                <span className="">Start Your Journey</span> <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica  top-[420px] mx-[65px] 
        xs:top-[420px] xs:mx-[65px]   grid  grid-cols-1 gap-y-[24px] "
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>
          {/* slider 3 */}
          <div className="  relative w-[100%] h-auto xs:h-[1100px]">
            <div>
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/RPvd4GN/pexels-keira-burton-6147276.webp"})`,
                  filter: "brightness(0.6)",
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
          mt-[100px]    xs:mt-[100px] px-[16px] 
          "
            >
              <h1 className="head1 text-white md:pb-[15px]  pb-[10px] max-w-[319px]">
                <span className="text-[#F6941E] ">Welcome</span> to Northway
                Global
              </h1>
              <p className="pb-[20px]  text-white  text-[14px] leading-[21px] font-helvetica font-normal max-w-[332px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button
                className="homeLargeAppoinMent flex items-center  justify-between
          gap-x-[10px]  
           bg-[#F6941E] px-[16px] py-[11.5px] "
              >
                <span className="">Start Your Journey</span> <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica  top-[420px] mx-[65px] 
        xs:top-[420px] xs:mx-[65px]   grid  grid-cols-1 gap-y-[24px] "
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>
        </Slider>
      </div>
      {/* big screen */}
      <div className="slider-container  hidden md:block ">
        <Slider {...settings}>
          <div className="relative">
            <div className=" ">
              <div
                style={{
                  backgroundImage: `url("https://i.ibb.co.com/qgrD8fG/uni1-671374a413d9c.webp")`,
                  filter: "brightness(0.6)",
                }}
                className="bg-no-repeat bg-center bg-cover w-full h-[914px] flex justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
        xl:mt-[200px]  mt-[200px]  md:mt-[150px]  xs:mt-[200px]
          xl:ml-[150px]  lg:mt-[150px]
          lg:ml-[60px] md:ml-[80px]  ml-[60px] xs:lg:ml-[150px]  "
            >
              <h1 className="homeHead max-w-[557px]">
                <span className="text-[#F6941E]">Welcome</span> to Northway
                Global
              </h1>
              <p className="homePara max-w-[485px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button className="homeButton flex items-center justify-between bg-[#F6941E]">
                Start Your Journey <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica 2xl:top-[597px] xl:top-[597px] lg:top-[597px] md:top-[550px]  xl:mx-[150px]   
         2xl:mx-[150px] lg:mx-[60px] md:mx-[80px]  grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px]  2xl:gap-x-[24px] lg:gap-x-[20px]
         md:gap-x-[10px]"
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div className=" ">
              <div
                style={{
                  backgroundImage: `url("https://i.ibb.co.com/jrHYkGc/pexels-rdne-7713182.webp")`,
                  filter: "brightness(0.6)",
                }}
                className="bg-no-repeat bg-center bg-cover w-full h-[914px] flex justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
        xl:mt-[200px]  mt-[200px]  md:mt-[150px]  xs:mt-[200px]
          xl:ml-[150px]  lg:mt-[150px]
          lg:ml-[60px] md:ml-[80px]  ml-[60px] xs:lg:ml-[150px]  "
            >
              <h1 className="homeHead max-w-[557px]">
                <span className="text-[#F6941E]">Welcome</span> to Northway
                Global
              </h1>
              <p className="homePara max-w-[485px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button className="homeButton flex items-center justify-between bg-[#F6941E]">
                Start Your Journey <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica 2xl:top-[597px] xl:top-[597px] lg:top-[597px] md:top-[550px]  xl:mx-[150px]   
         2xl:mx-[150px] lg:mx-[60px] md:mx-[80px]  grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px]  2xl:gap-x-[24px] lg:gap-x-[20px]
         md:gap-x-[10px]"
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div className=" ">
              <div
                style={{
                  backgroundImage: `url("https://i.ibb.co.com/RPvd4GN/pexels-keira-burton-6147276.webp")`,
                  filter: " brightness(0.6)",
                }}
                className="bg-no-repeat bg-center bg-cover w-full h-[914px] flex justify-center items-center"
              ></div>
            </div>

            <div
              className="absolute inset-0 font-helvetica  
        xl:mt-[200px]  mt-[200px]  md:mt-[150px]  xs:mt-[200px]
          xl:ml-[150px]  lg:mt-[150px]
          lg:ml-[60px] md:ml-[80px]  ml-[60px] xs:lg:ml-[150px]  "
            >
              <h1 className="homeHead max-w-[557px]">
                <span className="text-[#F6941E]">Welcome</span> to Northway
                Global
              </h1>
              <p className="homePara max-w-[485px]">
                Choose Open Window For Your Study Abroad Journey & Embark on An
                Exceptional Educational Experience That Combines Academic
                Excellence, Personalized Guidance, and a Seamless Transition to
                You.
              </p>
              <button className="homeButton flex items-center justify-between bg-[#F6941E]">
                Start Your Journey <MdArrowRightAlt />
              </button>
            </div>

            <div
              className="absolute inset-0 font-helvetica 2xl:top-[597px] xl:top-[597px] lg:top-[597px] md:top-[550px]  xl:mx-[150px]   
         2xl:mx-[150px] lg:mx-[60px] md:mx-[80px]  grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px]  2xl:gap-x-[24px] lg:gap-x-[20px]
         md:gap-x-[10px]"
            >
              {officesData.map((office) => (
                <HeroCard
                  key={office.name}
                  name={office.name}
                  image={office.image}
                ></HeroCard>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
