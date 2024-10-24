import { MdArrowRightAlt } from "react-icons/md";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images
  const [activeButton, setActiveButton] = useState("All");

  const images = [
    "https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp",
    "https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp",
    "https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp",
    "https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp",
    "https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp",
    "https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp",
    // Add more image URLs here
  ];

  const visibleImages = showAll ? images : images.slice(0, 6); // Step 2: Show only 6 images initially

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar></Navbar>

      <div className="  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/HpJMVbW/students-back-school-2024-beautiful-school-buildings-2.webp"})`,
            filter: "brightness(.5)",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[914px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col px-[60px] max-w-[850px] 2xl:max-w-[1280px] gap-y-[20px] justify-center   lg:px-[150px]   lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Photo Gallery
          </h1>
          <p className="text-xl 2xl:text-2xl lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
            We strive to build a global community where quality higher education
            empowers curious learners and encourages them to transform their
            lives. We deploy cutting-edge technologies on the Northway platform
            to simplify students international education journeys. We blend
            technology and innovation to transform the higher education
            landscape with institutions, partners, and industry stakeholders.
          </p>
        </div>
      </div>

      <div
        className="sectionGap grid grid-cols-1 md:grid-cols-3 justify-center items-center
      lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
      >
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp"
            alt=""
          />
        </div>
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp"
            alt=""
          />
        </div>
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp"
            alt=""
          />
        </div>
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp"
            alt=""
          />
        </div>
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp"
            alt=""
          />
        </div>
        <div className="xl:h-[221px]  2xl:h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp"
            alt=""
          />
        </div>
      </div>

      <div
        className="sectionGap mt-10  xl:pb-[150px] 2xl:pb-[150px] lg:pb-[80px]
      md:pb-[80px] pb-[100px] xs:pb-[100px]"
      >
        <div className="flex justify-center items-center gap-x-[30px] mb-[50px]">
          <button
            className={`text-center px-[20px] py-[13.5px] font-helvetica text-[18px] leading-[23.4px] font-bold 
          ${
            activeButton === "All"
              ? "bg-[#F6941E] text-white"
              : "bg-transparent text-[#1E1E1E]/[.8]"
          }
        `}
            onClick={() => setActiveButton("All")}
          >
            All
          </button>
          <button
            className={`text-center px-[20px] py-[13.5px] font-helvetica text-[18px] leading-[23.4px] font-bold 
          ${
            activeButton === "gallery"
              ? "bg-[#F6941E] text-white"
              : "bg-transparent text-[#1E1E1E]/[.8]"
          }
        `}
            onClick={() => setActiveButton("gallery")}
          >
            Gallery Item
          </button>
        </div>

        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div key={index} className="xl:h-[221px]  2xl:h-[300px]">
                <img
                  className="h-full w-full"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="flex justify-center items-center mx-auto mt-[50px] 
            border border-[#F6941E] text-[#F6941E] font-helvetica
             font-bold text-[18px] leading-[23px] py-[13px] px-[20px]"
            onClick={() => setShowAll(!showAll)} // Step 3: Toggle between showing all and limited images
          >
            {showAll ? "Show Less" : "See All"}{" "}
            <MdArrowRightAlt className="ml-2" />
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PhotoGallery;
