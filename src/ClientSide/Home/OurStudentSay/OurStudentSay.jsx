import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./OurStudentSay.css";

const OurStudentSay = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 4;
    slidesToScroll = 1;
  } else if (isXl) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isLg) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isMd) {
    slidesToShow = 2;
    slidesToScroll = 1;
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };
  return (
    <div className="sectionGap ">
      {/* mobile */}
      <div className="md:hidden block text-center">
        <h1 className="xs:text-[30px] xs:leading-[36px] text-[#1E1E1E] font-helvetica font-bold  pb-[20px]">
          <span className="text-[#F6941E] ">What’s</span> Our student say
        </h1>
        <p className="text-[14px] leading-[21px] font-normal font-helvetica text-[#1E1E1E]/[.8]  pb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* large */}
      <div className="hidden md:block">
        <h1 className="mainHeader  pb-[20px] ">
          <span className="text-[#F6941E] ">What’s</span> Our student say
        </h1>
        <p className="mainPara text-[#1E1E1E]/[.8]  pb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ------slider */}

      <div className="slider-container md:pb-[50px] pb-0 ">
        <Slider {...settings}>
          <div className="mt-10  max-w-[95%] pt-[72px] pb-[30px] px-[16px] rounded-lg relative bg-white shadow-xl">
            <FaQuoteLeft
              className="absolute text-3xl mx-2 text-[#F6941E] pb-[20px]  bottom-0  top-[30px] 
            left-0"
            />
            <div>
              <p>
                We are the representatives of more than 30+ universities in
                Australian countries and our admission
              </p>
              <div className="flex pb-[20px] pt-[10px] items-center text-[#F6941E]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src="https://i.ibb.co.com/ky0v7Tt/ellipse-2-66de88e4a83a5.webp"
                  alt=""
                />
              </div>
              <div className="ml-[12px]">
                <p className="font-semibold text-xl">Lisa Dowen</p>
                <p className="font-mono">Student</p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[95%] pt-[72px] pb-[30px] px-[16px] rounded-lg relative bg-white shadow-xl">
            <FaQuoteLeft
              className="absolute text-3xl mx-2 text-[#F6941E] pb-[20px]  bottom-0  top-[30px] 
            left-0"
            />
            <div>
              <p>
                We are the representatives of more than 30+ universities in
                Australian countries and our admission
              </p>
              <div className="flex pb-[20px] pt-[10px] items-center text-[#F6941E]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src="https://i.ibb.co.com/cwJdJC1/ellipse-2-1-66de891717afd.webp"
                  alt=""
                />
              </div>
              <div className="ml-[12px]">
                <p className="font-bold text-[18px] leading-[23px]">
                  Lisa Dowen
                </p>
                <p className="font-normal text-[16px] leading-[24px]">
                  Student
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[95%] pt-[72px] pb-[30px] px-[16px] rounded-lg relative bg-white shadow-xl">
            <FaQuoteLeft
              className="absolute text-3xl mx-2 text-[#F6941E] pb-[20px]  bottom-0  top-[30px] 
            left-0"
            />
            <div>
              <p>
                We are the representatives of more than 30+ universities in
                Australian countries and our admission
              </p>
              <div className="flex pb-[20px] pt-[10px] items-center text-[#F6941E]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src="https://i.ibb.co.com/vQ9GGh8/ellipse-2-2-66de8946734b1.webp"
                  alt=""
                />
              </div>
              <div className="ml-[12px]">
                <p className="font-semibold text-xl">Lisa Dowen</p>
                <p className="font-mono">Student</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurStudentSay;
