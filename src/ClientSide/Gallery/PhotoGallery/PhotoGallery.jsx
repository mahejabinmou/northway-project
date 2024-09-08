import { MdArrowRightAlt } from "react-icons/md";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images

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
    <div>
      <Navbar></Navbar>

      <div className="mt-[30px]  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/cvpHG8Y/banner-7-66dc11de39f57.webp"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[250px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Photo Gallery
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Gallery / Photo gallery
          </p>
        </div>
      </div>

      <div
        className="sectionGap grid grid-cols-1 md:grid-cols-3 justify-center items-center
      lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
      >
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp"
            alt=""
          />
        </div>
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp"
            alt=""
          />
        </div>
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp"
            alt=""
          />
        </div>
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp"
            alt=""
          />
        </div>
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp"
            alt=""
          />
        </div>
        <div className="h-[221px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp"
            alt=""
          />
        </div>
      </div>

      <div className="sectionGap mt-10">
        <div className="flex justify-center items-center gap-x-[30px] mb-[50px]">
          <button className="text-center px-[20px] py-[13.5px] bg-[#F6941E] text-white font-helvetica text-[18px] leading-[23.4px] font-bold ">
            All
          </button>
          <button className="text-center  px-[20px] py-[13.5px] text-black/[.8] font-helvetica text-[18px] leading-[23.4px] font-bold ">
            Gallery Item
          </button>
        </div>
        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div key={index} className="h-[221px]">
                <img
                  className="h-full w-full"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="flex justify-center items-center mx-auto mt-4 
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
