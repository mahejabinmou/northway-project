// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from "react";
// import {
//   FaFacebook,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AppContext } from "../../../store/AppContext";
// import useScrollTrickilyToTop from "../../../hooks/useScrollTrickilyToTop";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);
//   const openStudyDestination = useScrollTrickilyToTop(
//     isDropdown2Open,
//     setIsDropdown2Open
//   );
//   return (
//     <div className="bg-[#1E1E1E]  text-white/[.8] sectionGap">
//       {/* foooter content */}
//       <div className=" pt-[50px]">
//         <div className="md:hidden block ">
//           <div className=" pb-[25px] grid grid-cols-1 px-[51px]  gap-y-[50px]">
//             <div className="">
//               <div className="footerLogoparent mb-[30px]">
//                 <img
//                   className="h-full w-full object-cover "
//                   src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
//                   alt=""
//                 />
//               </div>

//               <div className=" ">
//                 <div className="flex   pb-[10px] gap-x-[10px]">
//                   <a
//                     href="https://www.linkedin.com/in/northwayglobal/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn size={18} className="footerSocailIcon " />
//                   </a>
//                   <a
//                     href="https://x.com/northwayglobalx"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaXTwitter size={18} className="footerSocailIcon" />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/northwayglobal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebookF size={18} className="footerSocailIcon" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/northwayglobal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram size={18} className="footerSocailIcon " />
//                   </a>

//                   <a
//                     href="https://wa.me/8801771860030"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaWhatsapp size={18} className="footerSocailIcon" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="text-white/[.8]">
//               <h2 className="footerMenuTextTitle ">Category</h2>
//               <Link to="/About">
//                 <p className="footerMenuText ">About Us</p>
//               </Link>
//               <Link onClick={openStudyDestination}>
//                 <p className="footerMenuText">Study Destination</p>
//               </Link>
//               <Link to="/photo-gallery">
//                 {" "}
//                 <p className="footerMenuText">Gallery</p>
//               </Link>
//               <Link to="/blogs">
//                 {" "}
//                 <p className="footerMenuText">Blogs</p>
//               </Link>
//               <Link to="/contactUs">
//                 <p className="footerMenuText">Contact Us</p>
//               </Link>
//             </div>

//             {/* <div className="text-white/[.8]">
//               <h2 className="footerMenuTextTitle">Latest Post</h2>
//               <p className="footerMenuText">Study in China</p>
//               <p className="footerMenuText">ulbright Scholarships in China</p>
//               <p className="footerMenuText">
//                 How to Apply to Foreign Universities
//               </p>
//             </div> */}

//             <div className="text-white/[.8]">
//               <h2 className="footerMenuTextTitle">Contact Us</h2>
//               <div className=" flex items-start gap-x-[10px]">
//                 <img
//                   className="h-[24px] w-[24px] object-cover"
//                   src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
//                   alt=""
//                 />
//                 <span className=" footerMenuText text-white/[.8]">
//                   Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212,
//                   (Near American Embassy)
//                 </span>
//               </div>
//               <div className="footerMenuText flex flex-row items-center gap-x-[10px] xs:ml-[30px] ">
//                 <p>
//                   {" "}
//                   <span className="font-bold">USA Office:</span> 37 -22 73 Rd St
//                   (2nd floor) ,Jackson Heights NY, 11372
//                 </p>
//                 <p>
//                   <span className="font-bold">Australia Office:</span> 3/4
//                   Nellie Ave Mitchell Park SA 5043
//                 </p>
//               </div>

//               <p className=" flex items-start gap-x-[10px]  mt-[10px]">
//                 <img
//                   className="h-[24px] w-[24px] object-cover"
//                   src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
//                   alt=""
//                 />
//                 <span className="text-[18px] flex gap-x-[10px]">
//                   <span className="font-bold">Dhaka Office:</span>{" "}
//                   <a
//                     href="tel:+8801771860030"
//                     target="_blank"
//                     className="underline"
//                   >
//                     +8801771860030
//                   </a>{" "}
//                 </span>
//               </p>
//               <p className="text-[18px] xs:ml-[35px] flex gap-x-[10px]">
//                 <span className="font-bold">USA office:</span>{" "}
//                 <a
//                   href="tel:+19179246493"
//                   target="_blank"
//                   className="underline"
//                 >
//                   +19179246493
//                 </a>{" "}
//               </p>
//               <p className="text-[18px] xs:mb-[35px] xs:ml-[35px] flex gap-x-[10px]">
//                 <span className="font-bold">Australia office:</span>{" "}
//                 <a
//                   href="tel:+61449615940"
//                   target="_blank"
//                   className="underline"
//                 >
//                   +61449615940
//                 </a>{" "}
//               </p>
//               <p className=" flex items-start gap-x-[10px]">
//                 <img
//                   className="h-[18px] w-[18px] "
//                   src="https://i.ibb.co/tKvY3Q7/group-2-66d945183a8b4.webp"
//                   alt=""
//                 />
//                 <span className="footerMenuText">
//                   info@northwayglobal.com.bd
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* large */}
//         <div className="hidden md:block px-[18px]   xs:px-[18px]  xl:px-[100px] md:px-[32px] lg:px-[60px] 2xl:px-[100px] ">
//           <div className=" pb-[25px] grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-[123px] gap-y-[123px]">
//             <div>
//               <div className="footerLogoparent mb-[10px]">
//                 <img
//                   className="h-full w-full object-cover "
//                   src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
//                   alt=""
//                 />
//               </div>

//               <div
//                 className="flex items-center
//           "
//               >
//                 <p className="text-[12px] leading-[18px] pb-[18px] font-helvetica font-normal">
//                   Copyright © Northway Global
//                 </p>
//               </div>

//               <div className=" ">
//                 <div className="flex   pb-[15px] gap-x-[5px]">
//                   <a
//                     href="https://www.linkedin.com/in/northwayglobal/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn size={18} className="footerSocailIcon " />
//                   </a>
//                   <a
//                     href="https://x.com/northwayglobalx"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaXTwitter size={18} className="footerSocailIcon" />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/northwayglobal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebookF size={18} className="footerSocailIcon" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/northwayglobal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram size={18} className="footerSocailIcon " />
//                   </a>

//                   <a
//                     href="https://wa.me/8801771860030"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaWhatsapp size={18} className="footerSocailIcon" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="text-white/[.8]">
//               <h2 className="footerMenuTextTitle ">Category</h2>
//               <Link to="/About">
//                 <p className="footerMenuText ">About Us</p>
//               </Link>
//               <Link onClick={openStudyDestination}>
//                 <p className="footerMenuText">Study Destination</p>
//               </Link>
//               <Link to="/photo-gallery">
//                 {" "}
//                 <p className="footerMenuText">Gallery</p>
//               </Link>
//               <Link to="/blogs">
//                 {" "}
//                 <p className="footerMenuText">Blogs</p>
//               </Link>
//               <Link to="/contactUs">
//                 <p className="footerMenuText">Contact Us</p>
//               </Link>
//             </div>

//             {/* <div className="text-white/[.8]">
//               <h2 className="footerMenuTextTitle">Latest Post</h2>
//               <p className="footerMenuText">Study in China</p>
//               <p className="footerMenuText">ulbright Scholarships in China</p>
//               <p className="footerMenuText">
//                 How to Apply to Foreign Universities
//               </p>
//             </div> */}

//             <div className="text-white/[.8] col-span-2">
//               <h2 className="footerMenuTextTitle">Contact Us</h2>
//               <p className=" flex items-start gap-x-[10px]">
//                 <img
//                   className="h-[24px] w-[24px] object-cover"
//                   src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
//                   alt=""
//                 />
//                 <span className=" footerMenuText text-white/[.8]">
//                   <span className="font-bold">Dhaka Office:</span> Kha-12/2,
//                   Shahjaspur, Gulshan, Dhaka-1212
//                 </span>
//               </p>
//               <div className="footerMenuText flex flex-row items-center gap-x-[10px] md:ml-[30px] xs:ml-0">
//                 <p>
//                   {" "}
//                   <span className="font-bold">USA Office:</span> 37 -22 73 Rd St
//                   (2nd floor) ,Jackson Heights NY, 11372
//                 </p>
//                 <p>
//                   <span className="font-bold">Australia Office:</span> 3/4
//                   Nellie Ave Mitchell Park SA 5043
//                 </p>
//               </div>

//               <p className=" text-[18px] flex items-start gap-x-[10px]">
//                 <img
//                   className="h-[18px] w-[24px] object-cover"
//                   src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
//                   alt=""
//                 />

//                 <span className="flex gap-x-[10px]">
//                   <span className="font-bold">Dhaka Office:</span>{" "}
//                   <a
//                     href="tel:+8801771860030"
//                     target="_blank"
//                     className="underline"
//                   >
//                     +8801771860030
//                   </a>{" "}
//                 </span>
//               </p>
//               <p className="text-[18px] md:ml-[35px] xs:ml-0 flex gap-x-[10px]">
//                 <span className="font-bold">USA office:</span>
//                 <a
//                   href="tel:+19179246493"
//                   target="_blank"
//                   className="underline"
//                 >
//                   +19179246493
//                 </a>{" "}
//               </p>
//               <p className="text-[18px] md:ml-[35px] xs:ml-0 mb-[10px] flex gap-x-[10px]">
//                 <span className="font-bold">Australia office: </span>{" "}
//                 <a
//                   href="tel:+61449615940"
//                   target="_blank"
//                   className="underline"
//                 >
//                   {" "}
//                   +61449615940
//                 </a>{" "}
//               </p>

//               <p className="footerMenuText flex items-start gap-x-[10px]">
//                 <img
//                   className="h-[18px] w-[18px] "
//                   src="https://i.ibb.co/tKvY3Q7/group-2-66d945183a8b4.webp"
//                   alt=""
//                 />

//                 <span> info@northwayglobal.com.bd </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <hr className="border-1 border-white/[.1]" />

//         <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
//           <div
//             className="flex justify-center items-center space-x-[40px]
//           "
//           >
//             <p className="footerMenuText ">
//               Designed and Developed By
//               <span>
//                 <Link
//                   to="https://www.ethicalden.com/"
//                   target="_blank"
//                   className="underline"
//                 >
//                   {""} Ethical Den
//                 </Link>
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useScrollTrickilyToTop from "../../../hooks/useScrollTrickilyToTop";
import { AppContext } from "../../../store/AppContext";

const Footer = () => {
  const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);
  const openStudyDestination = useScrollTrickilyToTop(
    isDropdown2Open,
    setIsDropdown2Open
  );
  return (
    <div className="bg-[#1E1E1E] text-white/[.8] sectionGap">
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
                  <a
                    href="https://www.linkedin.com/in/northwayglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={16} className="footerSocailIcon " />
                  </a>
                  <a
                    href="https://x.com/northwayglobalx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.facebook.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.instagram.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={16} className="footerSocailIcon " />
                  </a>

                  <a
                    href="https://wa.me/8801771660030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={16} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle ">Category</h2>
              <Link to="/About">
                <p className="footerMenuText ">About Us</p>
              </Link>
              <Link onClick={openStudyDestination}>
                <p className="footerMenuText">Study Destination</p>
              </Link>
              <Link to="/photo-gallery">
                {" "}
                <p className="footerMenuText">Gallery</p>
              </Link>
              <Link to="/blogs">
                {" "}
                <p className="footerMenuText">Blogs</p>
              </Link>
              <Link to="/contactUs">
                <p className="footerMenuText">Contact Us</p>
              </Link>
            </div>

            {/* <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Latest Post</h2>
              <p className="footerMenuText">Study in China</p>
              <p className="footerMenuText">ulbright Scholarships in China</p>
              <p className="footerMenuText">
                How to Apply to Foreign Universities
              </p>
            </div> */}

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <div className="flex flex-row justify-between gap-x-[10px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    <a
                      href="tel:+8801771660030"
                      target="_blank"
                      className="underline"
                    >
                      +8801771660030
                    </a>
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-between  gap-x-[15px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    37 -22 73 Rd St (2nd floor), Jackson <br /> Heights NY,
                    11372
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    <a
                      href="tel:+19179246493"
                      target="_blank"
                      className="underline"
                    >
                      +19179246493
                    </a>
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-between  gap-x-[40px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    3/4 Nellie Ave Mitchell, Park SA, <br /> 5043
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline"
                    >
                      {" "}
                      +61449615940
                    </a>
                  </span>
                </p>
              </div>

              <p className="footerMenuText flex items-start gap-x-[10px]">
                <img
                  className="h-[16px] w-[16px] "
                  src="https://i.ibb.co/tKvY3Q7/group-2-66d945163a8b4.webp"
                  alt=""
                />

                <span> info@northwayglobal.com.bd</span>
              </p>
            </div>
          </div>
        </div>

        {/* large */}
        <div className="hidden md:block px-[16px] xs:px-[16px] xl:px-[100px] md:px-[32px] lg:px-[60px] 2xl:px-[100px]">
          <div className="pb-[25px] grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-[120px] gap-y-[123px]">
            <div>
              <div className="footerLogoparent mb-[10px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
                  alt=""
                />
              </div>

              <div className="flex items-center">
                <p className="text-[12px] leading-[16px] pb-[16px] font-helvetica font-normal">
                  Copyright © Northway Global
                </p>
              </div>

              <div className=" ">
                <div className="flex pb-[15px] gap-x-[10px]">
                  <a
                    href="https://www.linkedin.com/in/northwayglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={16} className="footerSocailIcon " />
                  </a>
                  <a
                    href="https://x.com/northwayglobalx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.facebook.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.instagram.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={16} className="footerSocailIcon " />
                  </a>

                  <a
                    href="https://wa.me/8801771660030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={16} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Category</h2>
              <Link to="/About">
                <p className="footerMenuText">About Us</p>
              </Link>
              <Link onClick={openStudyDestination}>
                <p className="footerMenuText">Study Destination</p>
              </Link>
              <Link to="/photo-gallery">
                {" "}
                <p className="footerMenuText">Gallery</p>
              </Link>
              <Link to="/blogs">
                {" "}
                <p className="footerMenuText">Blogs</p>
              </Link>
              <Link to="/contactUs">
                <p className="footerMenuText">Contact Us</p>
              </Link>
            </div>

            <div className="text-white/[.8] col-span-2">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <div className="flex flex-row justify-between gap-x-[10px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    <a
                      href="tel:+8801771660030"
                      target="_blank"
                      className="underline"
                    >
                      +8801771660030
                    </a>
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-between  gap-x-[15px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    37 -22 73 Rd St (2nd floor), Jackson <br /> Heights NY,
                    11372
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    <a
                      href="tel:+19179246493"
                      target="_blank"
                      className="underline"
                    >
                      +19179246493
                    </a>
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-between  gap-x-[40px]">
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    3/4 Nellie Ave Mitchell, Park SA, <br /> 5043
                  </span>
                </p>
                <p className="flex items-start gap-x-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <span className=" footerMenuText text-white/[.8]">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline"
                    >
                      {" "}
                      +61449615940
                    </a>
                  </span>
                </p>
              </div>

              <p className="footerMenuText flex items-start gap-x-[10px]">
                <img
                  className="h-[16px] w-[16px] "
                  src="https://i.ibb.co/tKvY3Q7/group-2-66d945163a8b4.webp"
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
              Designed and Developed By
              <span>
                <Link
                  to="https://www.ethicalden.com/"
                  target="_blank"
                  className="underline"
                >
                  {""} Ethical Den
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
