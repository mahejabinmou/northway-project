// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E]  text-white/[.8]">
      {/* foooter content */}
      <div className=" pt-[50px]">
        <div className="md:hidden block ">
          <div className=" pb-[25px] grid grid-cols-1 px-[51px]  gap-y-[50px]">
            <div className="">
              <div className="footerLogoparent mb-[30px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
                  alt=""
                />
              </div>

              <div className=" ">
                <div className="flex   pb-[10px] gap-x-[10px]">
                  <a href="">
                    <FaFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a href="">
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>

                  <a href="">
                    <FaWhatsapp size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle ">Category</h2>
              <Link to="/About">
                <p className="footerMenuText ">About Us</p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText">Study Destination</p>
              </Link>
              <Link to="/membership">
                {" "}
                <p className="footerMenuText">Gallery</p>
              </Link>
              <Link to="/event">
                {" "}
                <p className="footerMenuText">Blogs</p>
              </Link>
              <Link to="/contact">
                <p className="footerMenuText">Contact Us</p>
              </Link>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Latest Post</h2>
              <p className="footerMenuText">Study in China</p>
              <p className="footerMenuText">ulbright Scholarships in China</p>
              <p className="footerMenuText">
                How to Apply to Foreign Universities
              </p>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[24px] w-[24px] object-cover"
                  src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                  alt=""
                />
                <span className=" footerMenuText text-white/[.8]">
                  Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212,
                  (Near American Embassy)
                </span>
              </p>

              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[24px] w-[24px] object-cover"
                  src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                  alt=""
                />
                <span className="footerMenuText">+880 1607-002687</span>
              </p>
              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[16px] w-[16px] "
                  src="https://i.ibb.co/tKvY3Q7/group-2-66d945203a8b4.webp"
                  alt=""
                />
                <span className="footerMenuText">
                  info@northwayglobal.com.bd
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* large */}
        <div
          className="hidden md:block px-[16px]
 xs:px-[16px]  xl:px-[150px]
md:px-[32px] lg:px-[60px] 2xl:px-[150px]"
        >
          <div className=" pb-[25px] grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-[123px] gap-y-[123px]">
            <div>
              <div className="footerLogoparent mb-[30px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
                  alt=""
                />
              </div>

              <div className=" ">
                <div className="flex   pb-[15px] gap-x-[10px]">
                  <a href="">
                    <FaFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a href="">
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>

                  <a href="">
                    <FaWhatsapp size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle ">Category</h2>
              <Link to="/About">
                <p className="footerMenuText ">About Us</p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText">Study Destination</p>
              </Link>
              <Link to="/membership">
                {" "}
                <p className="footerMenuText">Gallery</p>
              </Link>
              <Link to="/event">
                {" "}
                <p className="footerMenuText">Blogs</p>
              </Link>
              <Link to="/contact">
                <p className="footerMenuText">Contact Us</p>
              </Link>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Latest Post</h2>
              <p className="footerMenuText">Study in China</p>
              <p className="footerMenuText">ulbright Scholarships in China</p>
              <p className="footerMenuText">
                How to Apply to Foreign Universities
              </p>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[24px] w-[24px] object-cover"
                  src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                  alt=""
                />
                <span className=" footerMenuText text-white/[.8]">
                  Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212,
                  (Near American Embassy)
                </span>
              </p>

              <p className="footerMenuText flex items-start gap-x-[10px]">
                <img
                  className="h-[20px] w-[24px] object-cover"
                  src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                  alt=""
                />

                <span> +880 1607-002687</span>
              </p>
              <p className="footerMenuText flex items-start gap-x-[10px]">
                <img
                  className="h-[16px] w-[16px] "
                  src="https://i.ibb.co/tKvY3Q7/group-2-66d945203a8b4.webp"
                  alt=""
                />

                <span> info@northwayglobal.com.bd</span>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-1 border-white/[.1]" />

        <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
          <div
            className="flex justify-center items-center space-x-[40px]
          "
          >
            <p className="footerMenuText ">
              Designed and Developed By Ethical Den
              {/* <span>
                <Link
                  to="https://www.ethicalden.com/"
                  target="_blank"
                  className="underline"
                >
                  Ethical Den
                </Link>
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
