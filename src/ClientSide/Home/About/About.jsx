import { MdArrowRightAlt } from "react-icons/md";

const About = () => {
  return (
    <div className="sectionGap">
      <div className="chooseUsParent">
        <div>
          <div
            className="relative w-full overflow-hidden chooseUsImgParent"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className=" xl:pt-[24px] xl:gap-x-[20px] 2xl:pt-[24px]   
          2xl:gap-x-[20px] lg:pt-[24px] lg:gap-x-[10px] md:pt-[24px] md:gap-x-[16px] flex justify-between items-center font-helvetica font-bold"
          >
            <div className=" ">
              <h1
                className="xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px] lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
              >
                800+
              </h1>
              <p
                className="xl:text-[16px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
          md:leading-[14px] text-center"
              >
                Global niversity Tips
              </p>
            </div>
            <div className=" text-center">
              <h1
                className="xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px] lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
              >
                65+
              </h1>
              <p
                className="xl:text-[16px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
         md:leading-[14px] text-center"
              >
                Office Across The Globe
              </p>
            </div>
            <div className=" text-center">
              <h1
                className="xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px] lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
              >
                25+
              </h1>
              <p
                className="xl:text-[16px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
          md:leading-[14px] text-center"
              >
                Years Industry Presence
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="chooseUsSamll">
            {" "}
            <span className="text-[#F6941E]">About</span> Us
          </h1>

          <p className="chooseUsParaText text-black/[0.8]">
            Discover the game-changer for Canadian Institutes: Edu Mandate! Our
            Indian-rooted strategy connects institutes with top agencies, fueled
            by human interaction and relentless expansion. With tailored
            support, unleash your potential and soar to new heights. Embrace
            excellence, partner with us, and embark on a transformative journey
            towards success. Contact us now!
          </p>
          <ul
            className="chooseUsParaText list-disc xl:pl-5 xl:space-y-2
          2xl:pl-5 2xl:space-y-2 lg:pl-5 lg:space-y-2 md:pl-5 md:space-y-2 text-black/[0.8]"
          >
            <li>Expert Guidance.</li>
            <li>Seamless Transitions.</li>
            <li>Study Abroad Success.</li>
            <li>Academic Excellence.</li>
          </ul>

          <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
            Read More
            <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
