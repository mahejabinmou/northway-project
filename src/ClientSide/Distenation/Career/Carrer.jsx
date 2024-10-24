import { MdArrowRightAlt } from "react-icons/md";

const Carrer = () => {
  return (
    <div className=" ">
      <div className=" md:hidden block sectionGap">
        <div className=" h-[223px] ">
          <img
            className="w-full h-full object-cover"
            src="/career.webp"
            alt=""
          />
        </div>

        <div>
          <h1 className="faqHead pb-[10px]  pt-[30px] ">
            {" "}
            Careers<span className="text-[#F6941E]"> & Industry </span>
          </h1>

          <p className="font-normal text-[14px] leading-[21px] text-black/[0.8]">
            One of the most technologically powerful and dynamic countries, USA
            is the largest & most dominant economy globally. Sectors that
            empower this world’s most productive economy include Healthcare,
            Technology, Construction, Retail, Manufacturing, Finance & Insurance
            and Real Estate. Top jobs with high remuneration prospects for
            international students include Medicine, Computer & Information
            Systems Managers, Architectural & Engineering Managers and Marketing
            & Financial Managers. Standard of living in the USA is among the
            highest in the world with high per capita income. This nation
            performs very well in many measures of well-being such as income &
            wealth, health status, jobs and earnings, education & skills and
            environmental quality.
          </p>

          {/* <button
            className="pl-[16px] pr-[11px] py-[11px] flex items-center justify-between
          text-[18px] leading-[23px] border border-[#F6941E] gap-x-[10px]  text-black font-helvetica font-bold mt-[30px]"
          >
            Read More
            <MdArrowRightAlt size={21} />
          </button> */}
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="WhyStudyParent ">
          <div>
            <h1 className="chooseUsSamll">
              {" "}
              Careers<span className="text-[#F6941E]"> & Industry </span>
            </h1>

            <p className="chooseUsParaText text-[#1E1E1E]/[0.8]">
              One of the most technologically powerful and dynamic countries,
              USA is the largest & most dominant economy globally. Sectors that
              empower this world’s most productive economy include Healthcare,
              Technology, Construction, Retail, Manufacturing, Finance &
              Insurance and Real Estate. Top jobs with high remuneration
              prospects for international students include Medicine, Computer &
              Information Systems Managers, Architectural & Engineering Managers
              and Marketing & Financial Managers. Standard of living in the USA
              is among the highest in the world with high per capita income.
              This nation performs very well in many measures of well-being such
              as income & wealth, health status, jobs and earnings, education &
              skills and environmental quality.
            </p>

            {/* <button
              className="homeLargeAppoinMent flex items-center justify-between 
            border border-[#F6941E]  text-black"
            >
              Read More
              <MdArrowRightAlt />
            </button> */}
          </div>

          <div>
            <div className=" h-[447px] ">
              <img
                className="w-full h-full object-cover"
                src="/career.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
