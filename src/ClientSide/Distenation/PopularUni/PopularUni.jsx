import { MdArrowRightAlt } from "react-icons/md";

const PopularUni = () => {
  return (
    <div
      className=" w-full text-center mt-[100px] xs:mt-[100px]
       md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px] relative bg-cover bg-center h-auto md:min-h-[750px] items-center bg-fixed flex flex-col"
      style={{
        backgroundImage: `url(${"https://i.ibb.co.com/6F4jS3x/unibg-66db347170e15.webp"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 ">
        <div className="text-white md:my-10 my-10 mt-8 flex justify-center font-bold md:text-[48px] md:leading-[57px] xs:text-[35px] xs:leading-[57px] xxs:text-[30px] xxs:leading-[57px]">
          <h1>
            <span className="text-[#F6941E] ">Popular</span> Universities
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-8">
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              className="w-[70px]"
              src="https://i.ibb.co.com/d23LGHN/uni1-66db36043eb12.webp"
              alt="UniLogo"
            />
            <h4 className="font-bold">
              University of Connecticut, Connecticut (Public Ivy)
            </h4>
          </div>
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              className="w-[70px]"
              src="https://i.ibb.co.com/r0F2P81/uni2-66db364355225.webp"
              alt="UniLogo"
            />
            <h4>Arizona State University, Phoenix, Arizona</h4>
          </div>
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              className="w-[70px]"
              src="https://i.ibb.co.com/9GZGLMx/uni3-66db368f59e38.webp"
              alt="UniLogo"
            />
            <h4>University of California, Riverside, California</h4>
          </div>
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              className="w-[70px]"
              src="https://i.ibb.co.com/r0F2P81/uni2-66db364355225.webp"
              alt="UniLogo"
            />
            <h4>Arizona State University, Phoenix, Arizona</h4>
          </div>
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co.com/d23LGHN/uni1-66db36043eb12.webp"
              alt="UniLogo"
            />
            <h4>University of Connecticut, Connecticut (Public Ivy)</h4>
          </div>
          <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
            <img
              className="w-[70px]"
              src="https://i.ibb.co.com/9GZGLMx/uni3-66db368f59e38.webp"
              alt="UniLogo"
            />
            <h4>University of California, Riverside, California</h4>
          </div>
        </div>
        <div className=" mt-10 gap-x-[10px] flex justify-center items-center pb-[77px]   font-bold">
          <button className=" flex justify-center items-center text-[18px] leading-[23px] px-[20px] py-[13px] text-white border border-white">
            View More <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularUni;
