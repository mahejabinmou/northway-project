import { MdArrowRightAlt } from "react-icons/md";

const StudyDestination = () => {
  return (
    <div className="sectionGap">
      {/* mobile */}
      <div className="md:hidden block ">
        <h1
          className=" text-[#1E1E1E]
           xs:text-[30px] xs:leading-[36px]
         xs:pb-[20px] font-helvetica font-bold text-center"
        >
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>
        <p
          className=" text-[#1E1E1E]/[.8]   xs:pb-[30px]
          text-center font-normal font-helvetica 
          xs:text-[14px] xs:leading-[21px] "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* large */}
      <div className="hidden md:block">
        <h1
          className=" studyDestinationHeading
         
          lg:pb-[20px] md:pb-[20px] xl:pb-[20px]  pb-[20px] xs:pb-[20px] text-[#1E1E1E]  "
        >
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>

        <p
          className=" text-[#1E1E1E]/[.8] xl:mr-[563px] lg:mr-[320px]
        md:mr-[120px] xl:pb-[50px]  pb-[50px] xs:pb-[50px] EveryPara"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p
          className="md:hidden block text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px]
        md:mr-[120px] xl:pb-[50px] 2xl:pb-[50px] pb-[50px] xs:pb-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* large */}
      <div className="hidden md:block">
        <div
          className="grid   
      md:grid-cols-3   grid-cols-1   md:gap-x-[23px]   "
        >
          {/* div1 */}
          <div className="">
            <div className="relative group w-full h-[267px] ">
              <img
                src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>

            <div className="relative group w-full h-[267px] ">
              <img
                src="https://i.ibb.co.com/RHxvvgD/image-9-2-66e0a645da6ff.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] ">
              <img
                src="https://i.ibb.co.com/K6LgdRy/image-7-1-66e0a55e7f832.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>
            <div className="relative group w-full h-[267px]">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/fpvNZgt/image-10-66e0a70c2518c.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] ">
              <img
                src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>
            <div className="relative group w-full h-[267px] ">
              <img
                src="https://i.ibb.co.com/1KHNkQ1/image-11-66e0a757ad7d1.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden block">
        <div
          className="grid   
        grid-cols-1   xs:grid-cols-1   "
        >
          {/* div1 */}
          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>

            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/K6LgdRy/image-7-1-66e0a55e7f832.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/RHxvvgD/image-9-2-66e0a645da6ff.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/fpvNZgt/image-10-66e0a70c2518c.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/1KHNkQ1/image-11-66e0a757ad7d1.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <button className="flex items-center justify-center readMore  gap-x-[10px]">
                  Read more <MdArrowRightAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestination;
