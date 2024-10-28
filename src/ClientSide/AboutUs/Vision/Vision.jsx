const Vision = () => {
  return (
    <>
      <section className="sectionGap md:mt-[90px]">
        <div className="row">
          <div className="text-center">
            <h1 className="mainHeader md:pb-[10px]">
              <span className="text-[#F6941E]">Long-Term</span> Vision
            </h1>
            <p className="mainPara text-[#1E1E1E]/[.8] max-w-[800px] mx-auto md:pb-[30px] font-helvetica font-normal">
              Shaping a sustainable future for global education
            </p>
          </div>
        </div>
        <div className="sectionGap">
          <div className="WhyStudyParent">
            <div>
              <h1 className="chooseUsSamll">
                <span className="text-[#F6941E]">Our</span> Vision
              </h1>
              <p className="chooseUsParaText text-black/[0.8]">
                Our long-term vision is to establish a globally connected
                educational ecosystem. We are dedicated to fostering innovation,
                inclusivity, and sustainability in education, ensuring every
                student has the opportunity to thrive in a dynamic world.
              </p>
              <h2 className="font-bold text-[24px] leading-[28px] pt-[16px] text-[#1E1E1E]">
                Core Values
              </h2>
              <ul className="chooseUsParaText custom-bullet list-disc font-normal text-[14px] leading-[21px] pt-[10px] px-[32px]">
                <li className="pb-[6px]">Innovation in Education</li>
                <li className="pb-[6px]">Inclusivity and Diversity</li>
                <li className="pb-[6px]">Sustainability and Growth</li>
                <li className="pb-[6px]">Global Connectivity</li>
              </ul>
            </div>
            <div className="h-[500px]">
              <img
                src="/Vision.jpg"
                alt="Future Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
