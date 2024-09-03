// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

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
// b
const OurDemo = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  var settingsLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <div className="sectionGap">
      <div className="text-center">
        <h1 className="mainHeader  pb-[20px] ">
          Our Latest<span className="text-[#F6941E] "> Blog </span>
        </h1>
        <p
          className="OurBlogPara text-black/[.8] xl:mx-[230px] 2xl:mx-[281px]
        lg:mx-[150px] md:mx-[50px]  pb-[50px] "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ------slider */}

      {/* large slider  */}
      <div className="slider-container hidden md:block">
        <Slider {...settingsLarge}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="  rounded-lg relative bg-white shadow-xl ">
                <div className="h-[197px]">
                  <img
                    className="w-full h-full  object-cover"
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
      </div>

      {/* mobile slider  */}

      <div className="slider-container md:hidden block">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="  rounded-lg relative bg-white shadow-xl ">
                <div className="h-[197px]">
                  <img
                    className="w-full h-full  object-cover"
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
      </div>
    </div>
  );
};

export default OurDemo;
