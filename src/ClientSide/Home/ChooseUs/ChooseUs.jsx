import { MdArrowRightAlt } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div
      className="  md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px]
    mt-[50px]  xs:mt-[50px]"
    >
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co/XsjKQpK/4e5570afab2bc908ac5c505230f9bd33-66d3e7972bb5a.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[800px] h-[383px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-[156px] xs:py-[156px] xl:py-[156px] 2xl:py-[156px] lg:py-[156px] md:py-[156px] px-[16px] xs:px-[16px]">
            <h1
              className="text-white font-helvetica font-bold text-[30px] leading-[36px] px-[16px] xs:text-[30px] xs:leading-[36px] xs:px-[16px] xl:text-[48px] xl:leading-[57.6px] xl:px-[345px] 2xl:text-[48px] 2xl:leading-[57.6px] 2xl:px-[345px]
            lg:text-[35px] lg:leading-[45px] lg:px-[200px]  md:text-[30px] md:leading-[45px] md:px-[150px]"
            >
              Choose from 11+ University and College Scholarships
            </h1>
            <p
              className="text-white/[.8]  font-helvetica font-bold mt-4 text-[14px] px-[16px] leading-[21px]  xs:px-[16px] xs:text-[14px] xs:leading-[21px] xl:text-[16px] xl:leading-[24px]   xl:px-[449px] 2xl:text-[16px] 2xl:leading-[24px]   2xl:px-[449px] lg:text-[16px] lg:leading-[24px]   lg:px-[180px]
            md:text-[16px] md:leading-[24px]   md:px-[100px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="flex items-center justify-between text-[#F6941E] bg-white px-[16px] py-[11px] gap-x-[10px] mt-6 border border-[#F6941E] font-bold text-[18px] leading-[23px]">
              join us <MdArrowRightAlt className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
