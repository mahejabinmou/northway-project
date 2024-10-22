import { MdArrowRightAlt } from "react-icons/md";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";

const VideoGallery = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images

  const images = [
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",
    "https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0",

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
            backgroundImage: `url(${"https://i.ibb.co.com/Hhr3Ccy/banner-16-66e6962f88170.webp"})`,
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[600px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex gap-y-[20px] px-[60px] max-w-[850px] lg:px-[150px] flex-col  justify-center  lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Video Gallery
          </h1>
          <p className="text-xl  lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
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
        className="sectionGap mt-10  xl:pb-[150px] 2xl:pb-[150px] lg:pb-[80px]
      md:pb-[80px] pb-[100px] xs:pb-[100px]"
      >
        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[221px] overflow-hidden chooseUsImgParent"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={image}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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

export default VideoGallery;
