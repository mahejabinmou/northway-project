/* eslint-disable react/prop-types */
import { countryDetailsDestructor } from "../../../utils/CountryDetails";
import Navbar from "../../Shared/Navbar/Navbar";

const DistenationBanner = ({ countryName }) => {
  const countryDetails = countryDetailsDestructor(countryName); // if you go inside this file you will crashed your head so better no to go there...
  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[30px]  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/2gBW6R9/banner-6-66d96fd9dcee5.webp"})`,
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[600px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col gap-y-[20px] px-[60px]  justify-center max-w-[850px]  lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white  font-bold">
            Study In {countryName}
          </h1>
          <p className="text-xl lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
            {countryDetails.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistenationBanner;
