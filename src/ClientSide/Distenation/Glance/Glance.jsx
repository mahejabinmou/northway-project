const Glance = () => {
  return (
    <div className="sectionGap">
      <div className="text-center mx-auto">
        <h1
          className="font-bold lg:text-[48px] lg:leading-[57px]
        font-helvetica text-[30px] leading-[36px]"
        >
          <span className="text-[#F6941E]">USA </span> At a Glance
        </h1>
      </div>
      <div className="mt-[48px]">
        {/* large */}
        <div className="hidden lg:block">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-x-[6px]">
            {/* row1 */}
            <div>
              {/* Course Duration */}
              <div className="  text-center  ">
                <h3
                  className="font-bold xl:text-[14px] 
                2xl:text-[14px] lg:text-[10px] 
                 leading-[23px]    px-[69px] py-[23.5px]  bg-[#F6941E] text-white"
                >
                  Course Duration
                </h3>
                <p className="pt-[31px] pl-[73px] pr-[63px]  pb-[10px] font-helvetica font-normal text-[12px] leading-[24px]">
                  4 Years (Bachelor’s)
                </p>
                <p className="pb-[31px] pl-[80px] pr-[70px] font-helvetica font-normal text-[12px] leading-[24px]">
                  2 Years (Master’s)
                </p>
              </div>
              {/* Language Proficiency */}
              <div className=" text-center ">
                <h3
                  className="py-[23.5px] px-[46px] font-helvetica font-bold xl:text-[14px] 
                2xl:text-[14px] lg:text-[10px] 
            leading-[23.4px] bg-[#F6941E] text-white"
                >
                  Language Proficiency
                </h3>
                <p className="pt-[31px] pl-[63px] pr-[53px] font-helvetica font-normal xl:text-[12px] 2xl:text-[12px] lg:text-[10px] leading-[24px]">
                  IELTS- 6+, TOEFL-70+
                </p>
                <p className="pt-[10px] pb-[31px] pl-[18px] pr-[50.5] font-helvetica font-normal text-[12px] leading-[24px]">
                  Duolingo-90+, PTE-50+
                </p>
              </div>
              {/* Air Ticket */}
              <div className=" text-center">
                <h3
                  className="py-[23.5px] px-[99px] font-bold  xl:text-[12px] 
                2xl:text-[14px] lg:text-[5px] 
            leading-[23px] bg-[#F6941E] text-white"
                >
                  Air Ticket
                </h3>
                <p className="py-[48px] font-helvetica font-normal text-[12px] leading-[24px] ">
                  100000 To 150000 (BDT)
                </p>
              </div>
            </div>

            {/* row2 */}

            <div>
              {/* intak */}
              <div className="  text-center ">
                <h3 className="pl-[113.5px] pr-[113.5px] py-[23.5px] font-bold text-[14px] leading-[23px] bg-[#F6941E] text-white">
                  Intake
                </h3>
                <p className="pt-[31px] pl-[95px] pr-[85px] pb-[10px] font-helvetica font-normal xl:text-[12px] 2xl:text-[12px] lg:text-[12px] leading-[24px]">
                  January, May,
                </p>
                <p className="lg:pb-[55px] xl:pb-[31px] font-helvetica font-normal xl:text-[12px] 2xl:text-[12px] lg:text-[10px] leading-[24px]">
                  September
                </p>
              </div>
              {/* Tuition Fee (Yearly) */}
              <div className=" text-center">
                <h3
                  className="py-[23.5px] pl-[60px] pr-[60px] font-bold  xl:text-[14px] 
                2xl:text-[14px] lg:text-[10px] 
            leading-[23.4px]  bg-[#F6941E] text-white font-helvetica"
                >
                  Tuition Fee (Yearly)
                </h3>
                <p className="py-[48px] pl-[63px] pr-[53px] font-helvetica font-normal xl:text-[12px] 2xl:text-[12px] lg:text-[10px] leading-[24px]">
                  10000 To 55000 (USD)
                </p>
              </div>
              {/* Processing Time */}
              <div className=" text-center">
                <h3
                  className="py-[23.5px] px-[68px] font-bold xl:text-[14px] 
                2xl:text-[14px] lg:text-[10px] 
            leading-[23.4px] bg-[#F6941E] text-white"
                >
                  Processing Time
                </h3>
                <p className="py-[41px] font-helvetica font-normal text-[12px] leading-[24px]">
                  9-12 Months
                </p>
              </div>
            </div>

            {/* row3 */}
            <div>
              {/* Application Fee */}
              <div className="  text-center ">
                <h3 className=" py-[23.5px] px-[72.5px] font-bold xl:text-[14px] 2xl:text-[14px] lg:text-[10px] leading-[23px] bg-[#F6941E] text-white">
                  Application Fee
                </h3>
                <p className="pt-[48px] xl:pb-[48px] pb-[97px] pl-[85px] pr-[75px] font-helvetica font-normal xl:text-[12px] 2xl:text-[12px] lg:text-[7px] leading-[24px]">
                  40 To 200 (USD)
                </p>
              </div>

              {/* Living Cost (Yearly) */}

              <div className=" text-center">
                <h3
                  className=" py-[23.5px] px-[55.5px] font-bold xl:text-[14px] 2xl:text-[14px] lg:text-[10px]
            leading-[23.4px]  bg-[#F6941E] text-white font-helvetica"
                >
                  Living Cost (Yearly)
                </h3>
                <p
                  className="py-[48px] pl-[63px] pr-[53px] font-normal xl:text-[12px]
                  2xl:text-[12px] lg:text-[10px]
            leading-[24px] "
                >
                  10000 To 18000 (USD)
                </p>
              </div>

              {/* Part Time Work */}
              <div className=" text-center">
                <h3
                  className="py-[23.5px] px-[74px] font-bold  xl:text-[14px]
                  2xl:text-[14px] lg:text-[7px]
            leading-[23.4px] bg-[#F6941E] text-white"
                >
                  Part Time Work
                </h3>
                <p className="py-[41px] font-helvetica font-normal text-[12px] leading-[24px]">
                  20 Hrs (per Week)
                </p>
              </div>
            </div>

            {/* row4 */}
            <div>
              {/* Requirements */}
              <div className=" text-center">
                <h3 className="px-[80.5px] py-[23.5px] font-bold text-[14px] leading-[23px] bg-[#F6941E] text-white">
                  Requirements
                </h3>
                <p className="pt-[34px] pl-[40px] pr-[30px] font-normal font-helvetica text-[12px] leading-[25.6px] pb-[1px]">
                  GRE/GMAT + IELTS/TOEFL/
                </p>
                <p className="pb-[34px] pl-[40px] pr-[30px]  font-normal font-helvetica text-[12px] leading-[25.6px]">
                  PTE, Academics: Above 55%
                </p>
              </div>

              {/* Visa Application */}
              <div className=" text-center">
                <h3
                  className="py-[23.5px] px-[71px] font-bold  xl:text-[14px]
                  2xl:text-[14px] text-[10px]
            leading-[23.4px] bg-[#F6941E] text-white"
                >
                  Visa Application
                </h3>
                <p className=" pt-[29px] pl-[40px] pr-[30px] font-normal font-helvetica text-[12px] leading-[25.6px] pb-[10px]">
                  160 (USD)
                </p>
                <p className="pb-[29.5px] pl-[40px] pr-[30px] font-normal font-helvetica text-[12px] leading-[25.6px] ">
                  SEVIS Fee 350 (USD)
                </p>
              </div>
              {/* Post Study Work Permit */}
              <div className="text-center">
                <h3
                  className="py-[23.5px] px-[38.5px] font-bold  text-[12px]
            leading-[23.4px] bg-[#F6941E] text-white font-helvetica"
                >
                  Post Study Work Permit
                </h3>
                <p className="pl-[20px] pr-[10px] py-[8px] font-helvetica font-normal text-[12px] leading-[24px]">
                  12 Months for All Programs 12+ 24 Months Extension for STEM
                  (Science, Tech, Engg & Maths)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}

        <div className="lg:hidden block mx-[39px]">
          <div className="grid  grid-cols-1 gap-x-[6px]">
            {/* row1 */}

            {/* Course Duration */}
            <div className="  text-center  ">
              <h3
                className="font-bold text-[18px] xs:text-[18px] leading-[23px]
               px-[69px] py-[23.5px]  bg-[#F6941E] text-white "
              >
                Course Duration
              </h3>
              <p className="pt-[31px] pl-[73px] pr-[63px] text-[16px] xs:text-[16px] pb-[10px]   ">
                4 Years (Bachelor’s)
              </p>
              <p className="pb-[31px] pl-[80px] pr-[70px] text-[16px] xs:text-[16px]   ">
                2 Years (Master’s)
              </p>
            </div>
            {/* intak */}
            <div className="  text-center ">
              <h3
                className="pl-[113.5px] pr-[113.5px] py-[23.5px] font-bold text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Intake
              </h3>
              <p className="pt-[31px] pl-[95px] pr-[85px] pb-[10px] text-[16px] xs:text-[16px]  ">
                January, May,{" "}
              </p>
              <p className="pb-[31px] text-[16px] xs:text-[16px] ">September</p>
            </div>
            {/* Application Fee */}
            <div className="  text-center ">
              <h3
                className=" py-[23.5px] px-[72.5px] font-bold text-[18px] xs:text-[18px] leading-[23px]
            bg-[#F6941E] text-white"
              >
                Application Fee
              </h3>
              <p className="py-[48px] pl-[85px] pr-[75px] text-[16px] xs:text-[16px] ">
                40 To 200 (USD)
              </p>
            </div>
            {/* Requirements */}
            <div className=" text-center">
              <h3
                className="px-[80.5px] py-[23.5px] font-bold text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Requirements
              </h3>
              <p className="pt-[34px] pl-[40px] pr-[30px] font-normal font-helvetica text-[16px] xs:text-[16px] leading-[25.6px] pb-[1px]">
                GRE/GMAT + IELTS/TOEFL/
              </p>
              <p className="pb-[34px] pl-[40px] pr-[30px]  font-normal font-helvetica text-[16px] xs:text-[16px]  leading-[25.6px]">
                PTE, Academics: Above 55%
              </p>
            </div>
            {/* Language Proficiency */}
            <div className=" text-center ">
              <h3
                className="py-[23.5px] px-[46px] font-helvetica font-bold text-[18px] xs:text-[18px] leading-[23px]
            bg-[#F6941E] text-white"
              >
                Language Proficiency
              </h3>
              <p className="pt-[31px] pl-[63px] pr-[53px] text-[16px] xs:text-[16px] ">
                IELTS- 6+, TOEFL-70+
              </p>
              <p className="pt-[10px] pb-[31px] pl-[60.5px] pr-[50.5] text-[16px] xs:text-[16px] ">
                Duolingo-90+, PTE-50+
              </p>
            </div>

            {/* Tuition Fee (Yearly) */}
            <div className=" text-center">
              <h3
                className="py-[23.5px] pl-[60px] pr-[60px] font-bold text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white font-helvetica"
              >
                Tuition Fee (Yearly)
              </h3>
              <p className="py-[48px] pl-[63px] pr-[53px] text-[16px] xs:text-[16px] ">
                10000 To 55000 (USD)
              </p>
            </div>
            {/* Living Cost (Yearly) */}

            <div className=" text-center">
              <h3
                className=" py-[23.5px] px-[55.5px] font-bold text-[18px] xs:text-[18px] leading-[23px]
               bg-[#F6941E] text-white font-helvetica"
              >
                Living Cost (Yearly)
              </h3>
              <p
                className="py-[48px] pl-[63px] pr-[53px] font-normal text-[16px] xs:text-[16px] 
            leading-[24px] "
              >
                10000 To 18000 (USD)
              </p>
            </div>
            {/* Visa Application */}
            <div className=" text-center">
              <h3
                className="py-[23.5px] px-[71px] font-bold  text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Visa Application
              </h3>
              <p className=" pt-[29px] pl-[40px] pr-[30px] font-normal font-helvetica text-[16px] xs:text-[16px] leading-[25.6px] pb-[10px]">
                160 (USD)
              </p>
              <p className="pb-[29.5px] pl-[40px] pr-[30px] font-normal font-helvetica text-[16px] xs:text-[16px] ] leading-[25.6px] ">
                SEVIS Fee 350 (USD)
              </p>
            </div>
            {/* Air Ticket */}
            <div className=" text-center">
              <h3
                className="py-[23.5px] px-[99px] font-bold  text-[18px] xs:text-[18px] leading-[23px]
               bg-[#F6941E] text-white"
              >
                Air Ticket
              </h3>
              <p className="py-[41px] text-[16px] xs:text-[16px] ">
                100000 To 150000 (BDT)
              </p>
            </div>

            {/* row2 */}

            {/* Processing Time */}
            <div className=" text-center">
              <h3
                className="py-[23.5px] px-[68px] font-bold  text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Processing Time
              </h3>
              <p className="py-[41px] text-[16px] xs:text-[16px] ">
                9-12 Months
              </p>
            </div>

            {/* row3 */}

            {/* Part Time Work */}
            <div className=" text-center">
              <h3
                className="py-[23.5px] px-[74px] font-bold  text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Part Time Work
              </h3>
              <p className="py-[41px] text-[16px] xs:text-[16px] ">
                20 Hrs (per Week)
              </p>
            </div>

            {/* row4 */}

            {/* Post Study Work Permit */}
            <div className="text-center">
              <h3
                className="py-[23.5px] px-[38.5px] font-bold  text-[18px] xs:text-[18px] leading-[23px]
              bg-[#F6941E] text-white"
              >
                Post Study Work Permit
              </h3>
              <p className="pl-[20px] pr-[10px] py-[8px] text-[16px] xs:text-[16px] ">
                12 Months for All Programs 12+ 24 Months Extension for STEM
                (Science, Tech, Engg & Maths)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;
