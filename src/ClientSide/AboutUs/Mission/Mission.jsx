import React from "react";

const Mission = () => {
  return (
    <>
      <section className="sectionGap md:mt-[90px]">
        <div className="row">
          <div className="text-center">
            <h1 className="mainHeader md:pb-[10px]">
              <span className="text-[#F6941E]">Student</span> Migration Mission
            </h1>
            <p className="mainPara text-[#1E1E1E]/[.8] max-w-[800px] mx-auto md:pb-[30px] font-helvetica font-normal">
              Empowering students for global education experiences
            </p>
          </div>
        </div>
        <div className="sectionGap">
          <div className="WhyStudyParent ">
            <div className="h-[500px]">
              <img
                src="/Mission.jpg"
                alt="Students traveling"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="chooseUsSamll">
                <span className="text-[#F6941E]">Our</span> Goal
              </h1>
              <p className="chooseUsParaText text-black/[0.8]">
                We aim to facilitate the smooth transition of students into new
                educational environments across the globe. Our mission is to
                provide support, resources, and guidance to ensure a successful
                migration experience.
              </p>
              <h2 className="font-bold text-[24px] leading-[28px] pt-[16px] text-[#1E1E1E]">
                Quick facts
              </h2>
              <ul className="chooseUsParaText custom-bullet list-disc font-normal text-[14px] leading-[21px]  pt-[10px] px-[32px]">
                <li className="pb-[6px]">Travel Assistance</li>
                <li className="pb-[6px]">Educational Integration</li>
                <li className="pb-[6px]">Accommodation Support</li>
                <li className="pb-[6px]">Language Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
