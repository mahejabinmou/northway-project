import Slider from "react-slick";
import "./OurVideo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const images = [
  {
    Lgimg: "https://i.ibb.co/BnWhcpK/download-66d695a226739.webp",
  },
  {
    Lgimg: "https://i.ibb.co/DkWH6bf/download-66d583ff6a650.webp",
  },
  {
    Lgimg: "https://i.ibb.co/r3NCnLk/download-66d69759dc9f1.webp",
  },
];

const OurVideo = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="mt-[60px] md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px]">
      <div className="relative">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co/TbgKwDG/download-66d57e16a71ad.webp")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[382px] flex justify-center items-center"
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-[156px]">
          <h1 className="text-white font-helvetica font-bold text-[20px] leading-[30px] px-[150px] xs:text-[20px] xs:leading-[30px] xl:text-[48px] xl:leading-[57.6px] 2xl:text-[48px] 2xl:leading-[57.6px] lg:text-[35px] lg:leading-[45px] md:text-[30px] md:leading-[45px]">
            Our <span className="text-[#F6941E]">Video</span>
          </h1>
          <p className="text-white/[.8] font-helvetica font-bold mt-4 xl:text-[16px] xl:leading-[24px] xl:px-[350px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:px-[432px] lg:text-[16px] lg:leading-[24px] lg:px-[180px] md:text-[16px] md:leading-[24px] md:px-[100px] text-[12px] leading-[20px] px-[20px] xs:text-[12px] xs:leading-[20px] xs:px-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={img.Lgimg} alt={`slide-${idx}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurVideo;
