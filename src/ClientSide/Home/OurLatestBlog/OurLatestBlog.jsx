// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const joyItems = [
  {
    imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
    LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
    icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
    date: "July 24, 2024",
    title: "Emotional Intelligence in Education Building",
    subtitle: "Back Theme",
    extendedSubtitle: "25 Comments",
  },
  {
    imgSrc: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
    LgImg: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
    icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
    date: "July 24, 2024",
    title: "Emotional Intelligence in Education Building",
    subtitle: "Back Theme",
    extendedSubtitle: "25 Comments",
  },
  {
    imgSrc: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
    LgImg: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
    icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
    date: "July 24, 2024",
    title: "Emotional Intelligence in Education Building",
    subtitle: "Back Theme",
    extendedSubtitle: "25 Comments",
  },
];

const OurLatestBlog = () => {
  var settings = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  var settingsLarge = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <div className="sectionGap bg-[#F5F5F5]">
      <div className="text-center">
        <h1 className="mainHeader pb-[20px] ">
          Our Latest<span className="text-[#F6941E] "> Blog </span>
        </h1>
        <p className="OurBlogPara text-black/[.8] xl:mx-[230px] 2xl:mx-[281px] lg:mx-[150px] md:mx-[50px] pb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Large slider */}
      <div className="slider-container hidden md:block">
        <Slider {...settingsLarge}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg relative bg-white shadow-xl">
                <div className="h-[197px]">
                  <img
                    className="w-full h-full object-cover"
                    src={item.LgImg}
                    alt={item.LgImg}
                  />
                </div>
                <div className="py-[30px] px-[20px]">
                  <div className="flex justify-items-center gap-x-[10px] mb-[14px] mt-[10px]">
                    <div className="h-[19px] w-[17px] flex-shrink-0 text-black/[.8]">
                      <img
                        className="w-full h-full object-cover"
                        src={item.icon}
                        alt={item.icon}
                      />
                    </div>
                    <p className=" text-black/[.8] font-normal text-[16px] leading-[24px] font-helvetica">
                      {item.date}
                    </p>
                  </div>
                  <h1
                    className="font-bold xl:text-[24px] xl:leading-[36px] 2xl:text-[24px] 2xl:leading-[36px]
                 lg:text-[20px] lg:leading-[30px]  pb-[20px]"
                  >
                    {item.title}
                  </h1>
                  <hr className="text-black " />
                  <div className="flex items-center justify-between pt-[20px]">
                    <div
                      className="text-black/[.6]  font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[16px] lg:leading-[24px] lg:gap-x-[10px] 
                   md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                    >
                      <IoPersonOutline />
                      <p>{item.subtitle}</p>
                    </div>
                    <div
                      className="text-black/[.6]
                    font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[16px] lg:leading-[24px] lg:gap-x-[10px] 
                  md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                    >
                      <LuMessagesSquare />
                      <p>{item.extendedSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Browse More Button */}
        <div className="mt-5 flex justify-center items-center">
          <button
            className="  px-[20px] text-[#F6941E] rounded border border-[#F6941E]
            font-bold text-[18px] leading-[23px] py-[13px] flex justify-center items-center gap-x-[10px]"
            onClick={() => alert("Navigate to more blogs")}
          >
            Browse More <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Mobile slider */}
      <div className="slider-container md:hidden block">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg relative bg-white shadow-xl">
                <div className="h-[197px]">
                  <img
                    className="w-full h-full object-cover"
                    src={item.LgImg}
                    alt={item.LgImg}
                  />
                </div>
                <div className="py-[30px] px-[20px]">
                  <div className="flex justify-items-center gap-x-[10px] mb-[14px] mt-[10px]">
                    <div className="h-[19px] w-[17px] flex-shrink-0 text-black/[.8]">
                      <img
                        className="w-full h-full object-cover"
                        src={item.icon}
                        alt={item.icon}
                      />
                    </div>
                    <p className="font-normal text-black/[.8] text-[16px] leading-[24px] font-helvetica">
                      {item.date}
                    </p>
                  </div>
                  <h1 className="font-bold text-[24px] leading-[36px] pb-[20px]">
                    {item.title}
                  </h1>
                  <hr className="text-black " />
                  <div className="flex items-center justify-between pt-[20px]">
                    <div className="text-black/[.6] flex items-center gap-x-[10px]">
                      <IoPersonOutline />
                      <p>{item.subtitle}</p>
                    </div>
                    <div className="text-black/[.6] flex items-center gap-x-[10px]">
                      <LuMessagesSquare />
                      <p>{item.extendedSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Browse More Button for Mobile */}
        <div className="text-center mt-5">
          <button
            className="px-4 py-2 text-[#F6941E] rounded border border-[#F6941E]"
            onClick={() => alert("Navigate to more blogs")}
          >
            Browse More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurLatestBlog;
