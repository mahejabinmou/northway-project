/* eslint-disable react/prop-types */
import { countryDetailsDestructor } from "../../../utils/CountryDetails";
import Navbar from "../../Shared/Navbar/Navbar";

const DistenationBanner = ({ countryName }) => {
  const countryDetails = countryDetailsDestructor(countryName); // if you go inside this file you will crashed your head so better no to go there...
  return (
    <div>
      <Navbar></Navbar>

      <div className="  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${countryDetails?.destentionImg})`,
            filter: "brightness(.5) ",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[485px]  flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute  inset-0 mt-[40px] flex flex-col gap-y-[20px] px-[60px]  justify-center items-center  lg:px-[150px]   lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white  font-bold text-center">
            Study In {countryName}
          </h1>
          <p className="text-[16px] font-helvetica font-normal max-w-[850px]  text-center mx-auto md:text-xl 2xl:text-2xl lg:text-base text-white mt-2 lg:mt-0 ">
            {countryDetails.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistenationBanner;
