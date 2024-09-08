import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentImg = [
  {
    image: "https://i.ibb.co/BnWhcpK/download-66d695a226739.webp",
  },
  {
    image: "https://i.ibb.co/DkWH6bf/download-66d583ff6a650.webp",
  },
  {
    image: "https://i.ibb.co/r3NCnLk/download-66d69759dc9f1.webp",
  },
];

const OurVideo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="hidden lg:block lg:pb-[100px] ">
        <div
          className="relative bg-cover bg-center min-h-[400px] items-center bg-fixed my-24"
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/R6Q4WKP/studentbg-66dbe8ed9b77d.webp"})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div>
            <div className="xl:mx-[432px]  lg:mx-[200px]  text-center py-8 z-10 relative text-white">
              <h1 className="font-bold font-helvetica text-[48px] leading-[57.6px] pb-[20px]">
                Our <span className="text-[#F6941E]">Video</span>
              </h1>
              <p className="font-normal text-[16px] leading-[24px] text-white/[.8]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <Slider
              {...settings}
              className=" absolute mt-10 max-w-6xl mx-auto left-[150px] right-[150px]"
            >
              {StudentImg.map((StudentImg, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="relative">
                      <img
                        src={StudentImg?.image}
                        alt={StudentImg.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.96V6.96a.75.75 0 011.13-.65l5.25 3.04a.75.75 0 010 1.3l-5.25 3.04a.75.75 0 01-1.13-.65z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="lg:hidden block md:pb-[80px] pb-[80px]">
        <div
          className="relative bg-cover bg-center min-h-[400px] items-center bg-fixed my-24"
          style={{
            backgroundImage: `url("https://i.ibb.co/R6Q4WKP/studentbg-66dbe8ed9b77d.webp")`,
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

          {/* Text and Content */}
          <div className="relative z-10">
            <div className="mx-auto max-w-[432px] text-center py-8 text-white">
              <h1 className="font-bold font-helvetica text-[30px] leading-[36px] pb-[20px]">
                Student <span className="text-[#F6941E]">Speaks</span>
              </h1>
              <p className="font-normal text-[14px] leading-[21px] text-white/[.8]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Slider */}
            <Slider
              {...settings}
              className="absolute bottom-[-400px] md:left-[16px] md:right-[16px] left-[16px] right-[16px] max-w-sm mx-auto"
            >
              {StudentImg.map((StudentImg, index) => (
                <div key={index} className=" ">
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="relative">
                      <img
                        src={StudentImg?.image}
                        alt={StudentImg.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.96V6.96a.75.75 0 011.13-.65l5.25 3.04a.75.75 0 010 1.3l-5.25 3.04a.75.75 0 01-1.13-.65z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl">{StudentImg.name}</h3>
                      <p className="text-gray-500">{StudentImg.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="ml-[50%] mr-[50%] absolute bottom-[-50px] right-4 z-10 bg-orange-500 rounded-full p-2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="ml-[50%] mr-[50%] absolute  bottom-[-50px] left-4 z-10 bg-orange-500 rounded-full p-2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default OurVideo;
