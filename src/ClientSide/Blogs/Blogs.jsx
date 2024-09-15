import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Blogs = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images

  const images = [
    {
      imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      LgImg: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      LgImg: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      LgImg: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      LgImg: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      LgImg: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      LgImg: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      LgImg: "https://i.ibb.co/0ZWkn9Z/image-12-1-66d6d885e3d32.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      LgImg: "https://i.ibb.co/WpsNC35/image-12-2-66d6d8ce4500f.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
    {
      imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
      icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
      date: "July 24, 2024",
      title: "Emotional Intelligence in Education Building",
      subtitle: "Back Theme",
      extendedSubtitle: "25 Comments",
    },
  ];

  const visibleImages = showAll ? images : images.slice(0, 6); // Step 2: Show only 6 images initially

  return (
    <div className="bg-[#F5F5F5]">
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
          <h1 className="text-2xl lg:text-4xl text-white font-bold">Blog</h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Blogs
          </p>
        </div>
      </div>

      <div
        className="sectionGap mt-10  xl:pb-[150px] 2xl:pb-[150px] lg:pb-[80px]
      md:pb-[80px] pb-[100px] xs:pb-[100px]"
      >
        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className=" relative bg-white shadow-xl">
                  <div className="h-[197px]">
                    <img
                      className="w-full h-full object-cover"
                      src={image.LgImg}
                      alt={image.LgImg}
                    />
                  </div>
                  <div className="py-[30px] px-[20px]">
                    <div className="flex justify-items-center gap-x-[10px] mb-[14px] mt-[10px]">
                      <div className="h-[19px] w-[17px] flex-shrink-0 text-[#1E1E1E]/[.8]">
                        <img
                          className="w-full h-full object-cover"
                          src={image.icon}
                          alt={image.icon}
                        />
                      </div>
                      <p className=" text-[#1E1E1E]/[.8] font-normal text-[16px] leading-[24px] font-helvetica">
                        {image.date}
                      </p>
                    </div>
                    <h1
                      className="font-bold xl:text-[24px] xl:leading-[36px] 2xl:text-[24px] 2xl:leading-[36px]
                 lg:text-[20px] lg:leading-[30px]  pb-[20px] text-[24px] leading-[36px]"
                    >
                      {image.title}
                    </h1>
                    <hr className="text-black " />
                    <div className="flex items-center justify-between pt-[20px]">
                      <div
                        className="text-black/[.6]  font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[12px] lg:leading-[24px] lg:gap-x-[10px] 
                   md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                      >
                        <IoPersonOutline />
                        <p>{image.subtitle}</p>
                      </div>
                      <div
                        className="text-black/[.6]
                    font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[12px] lg:leading-[24px] lg:gap-x-[10px] 
                  md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                      >
                        <LuMessagesSquare />
                        <p>{image.extendedSubtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="flex justify-center items-center mx-auto mt-[50px]
            border border-[#F6941E] text-[#F6941E] font-helvetica
             font-bold text-[18px] leading-[23px] py-[13px] px-[20px]"
            onClick={() => setShowAll(!showAll)} // Step 3: Toggle between showing all and limited images
          >
            {showAll ? "Load Less" : "Load More"}{" "}
            <MdArrowRightAlt className="ml-2" />
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Blogs;
