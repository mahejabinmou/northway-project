import { useState } from "react";
import OurServiceCard from "./OurServiceCard/OurServiceCard";

const OurService = () => {
  const officesData = [
    {
      name: "Study Abroad",
      image: "/Frame (3).svg",
    },
    {
      name: "Immigration",
      image: "/Frame (6).svg",
    },
    {
      name: "Scholarship",
      image: "/Frame (4).svg",
    },
    {
      name: "Easy Application",
      image: "/Frame (5).svg",
    },
  ];

  return (
    <div>
      {/* mobile */}
      <div className="md:hidden block sectionGap   bg-[#F5F5F5]">
        <div
          className="md:mr-[70px] lg:mr-[500px] xl:mr-[563px] 2xl:mr-[563px]
        mr-[16px] xs:text-center text-center md:text-left
      "
        >
          <h1 className="serviceHomeHead">
            <span className="text-[#F6941E]"> Our</span> {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="serviceHomePara ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="gridParent  ">
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
            ></OurServiceCard>
          ))}
        </div>
      </div>

      {/* large */}
      <div className="hidden md:block  sectionGap   pt-[50px] bg-[#F6941E]/[.03]">
        <div
          className="md:mr-[70px] lg:mr-[500px] xl:mr-[563px] 2xl:mr-[563px]
        mr-[16px] xs:text-center text-center md:text-left
      "
        >
          <h1 className="serviceHomeHead">
            <span className="text-[#F6941E]"> Our</span> {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="serviceHomePara ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="gridParent  ">
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
            ></OurServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
