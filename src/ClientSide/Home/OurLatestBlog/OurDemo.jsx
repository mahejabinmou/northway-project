// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useMediaQuery } from "react-responsive";
// import { IoPersonOutline } from "react-icons/io5";
// import { LuMessagesSquare } from "react-icons/lu";

// const OurDemo = () => {
//   const is2XL = useMediaQuery({ minWidth: 1536 });
//   const isXl = useMediaQuery({ minWidth: 1366 });
//   const isLg = useMediaQuery({ minWidth: 1024 });
//   const isMd = useMediaQuery({ minWidth: 768 });

//   let slidesToShow = 1;
//   let slidesToScroll = 1;

//   if (is2XL) {
//     slidesToShow = 4;
//     slidesToScroll = 1;
//   } else if (isXl) {
//     slidesToShow = 3;
//     slidesToScroll = 2;
//   } else if (isLg) {
//     slidesToShow = 3;
//     slidesToScroll = 2;
//   } else if (isMd) {
//     slidesToShow = 2;
//     slidesToScroll = 1;
//   }

//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 100,
//     slidesToShow: slidesToShow,
//     slidesToScroll: slidesToScroll,
//   };
//   return (
//     <div className="sectionGap">
//       <div className="text-center">
//         <h1 className="mainHeader  pb-[20px] ">
//           Our Latest<span className="text-[#F6941E] "> Blog </span>
//         </h1>
//         <p
//           className="OurBlogPara text-black/[.8] xl:mx-[281px]2xl:mx-[281px]
//         lg:mx-[150px] md:mx-[50px]  pb-[50px] "
//         >
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       {/* ------slider */}

//       <div className="slider-container hidden md:block">
//         <Slider {...settings}>
//           <div className="  rounded-lg relative bg-white shadow-xl ">
//             <div className="h-[197px]">
//               <img
//                 className="w-full h-full  object-cover"
//                 src="https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp"
//                 alt=""
//               />
//             </div>
//             <div className="py-[30px] px-[20px]">
//               <div className="flex justify-items-center gap-x-[10px] mb-[14px] mt-[10px]">
//                 <div className="h-[19px] w-[17px] flex-shrink-0 text-black/[.8]">
//                   <img
//                     className="w-full h-full object-cover"
//                     src="https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp"
//                     alt="Icon"
//                   />
//                 </div>
//                 <p className="font-normal text-black/[.8] text-[16px] leading-[24px] font-helvetica">
//                   July 24, 2024
//                 </p>
//               </div>

//               <h1 className="font-bold text-[24px] leading-[36px]">
//                 Emotional Intelligence in Education Building
//               </h1>
//               <hr className="text-black" />

//               <div className="flex items-center justify-between">
//                 <div className="text-black/[.6] flex items-center gap-x-[10px]">
//                   <IoPersonOutline />
//                   <p>Back Theme</p>
//                 </div>
//                 <div className="text-black/[.6] flex items-center gap-x-[10px]">
//                   <LuMessagesSquare />
//                   <p>25 Comments</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default OurDemo;
