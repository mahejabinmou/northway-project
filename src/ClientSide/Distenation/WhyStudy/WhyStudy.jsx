import { MdArrowRightAlt } from "react-icons/md";
import "./WhyStudy.css";

const WhyStudy = () => {
  return (
    <div className=" ">
      <div className=" md:hidden block sectionGap">
        <div className=" h-[223px] ">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/GVsXHnn/image-15.png"
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

          <button
            className="pl-[16px] pr-[11px] py-[11px] flex items-center justify-between
          text-[18px] leading-[23px] bg-[#F6941E] gap-x-[10px] text-white font-helvetica font-bold"
          >
            Read More
            <MdArrowRightAlt size={21} />
          </button>
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="WhyStudyParent ">
          <div>
            <div className=" h-[447px] ">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co/GVsXHnn/image-15.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <h1 className="chooseUsSamll">
              {" "}
              Why Study <span className="text-[#F6941E]">in USA? </span>
            </h1>

            <p className="chooseUsParaText text-black/[0.8]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-
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

            <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
              Read More
              <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
