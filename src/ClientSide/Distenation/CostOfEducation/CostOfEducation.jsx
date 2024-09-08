import "./CostOfEducation.css";
const CostOfEducation = () => {
  return (
    <div className=" ">
      <div className=" md:hidden block sectionGap">
        <div className="  h-[322px]">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co.com/Wfbyzpx/image-15-2-66db3d2ca2a1d.webp"
            alt=""
          />
        </div>

        <div>
          <h1 className="font-helvetica font-bold pb-[10px] text-[30px] leading-[36px] pt-[30px]">
            {" "}
            Why Study <span className="text-[#F6941E]">in USA? </span>
          </h1>

          <p className="font-normal text-[14px] leading-[21px] text-black/[0.8]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-
          </p>
          <h1 className="font-bold text-[24px] leading-[28px] pt-[16px]">
            Quick facts
          </h1>
          <ul className="chooseUsParaText custom-bullet list-disc font-normal text-[14px] leading-[21px] text-black/[0.8] pt-[10px] px-[32px]">
            <li className="pb-[6px]">Expert Guidance.</li>
            <li className="pb-[6px]">Seamless Transitions.</li>
            <li className="pb-[6px]">Study Abroad Success.</li>
            <li className="pb-[6px]">Academic Excellence.</li>
          </ul>
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="WhyStudyParent ">
          <div>
            <div className=" md:h-[447px] ">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/Wfbyzpx/image-15-2-66db3d2ca2a1d.webp"
                alt=""
              />
            </div>
          </div>

          <div>
            <h1 className="chooseUsSamll">
              {" "}
              <span className="text-[#F6941E]">Cost </span>of education
            </h1>

            <p className="chooseUsParaText text-black/[0.8]">
              In the U.S., tuition fees vary based on the state, the university
              funding model, and the student’s country of origin. So, listing an
              average is a rather difficult task. However, thanks to the folks
              at College Board, they’ve rendered an estimate of last year’s
              average tuition costs, which will roughly reflect the next few
              years.
            </p>

            <ul className="chooseUsParaText  list-disc font-normal text-[14px] leading-[21px] text-black/[0.8] pt-[10px] px-[32px]">
              <li className="pb-[6px] text-[#F6941E] custom-bullet ">
                Total Expenses 41535
              </li>
              <li className="pb-[6px]">
                Tuition Fees for one-year (Indicative) 25000
              </li>
              <li className="pb-[6px]">Living and Accommodation 15000</li>
              <li className="pb-[6px]">Airfare from India to USA 1000</li>
              <li className="pb-[6px]">Visa Fees (Visa & SEVIS) 535</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfEducation;
