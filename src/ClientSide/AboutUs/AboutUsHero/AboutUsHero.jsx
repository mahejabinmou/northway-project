import Navbar from "../../Shared/Navbar/Navbar";

const AboutUsHero = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className=" 2xl:relative  md:relative md:block hidden">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/vYB2PxM/pexels-fauxels-3184394.webp"})`,
            filter: "brightness(.7) ",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[914px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col px-[60px] max-w-[850px] 2xl:max-w-[1200px] gap-y-[20px] justify-center   lg:px-[150px]  lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            About Us
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

      <div className="  relative md:hidden block">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/vYB2PxM/pexels-fauxels-3184394.webp"})`,
            filter: "brightness(.6) ",
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[485px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px]  text-left ">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            About Us
          </h1>
          <p className="text-[16px] md:text-xl 2xl:text-2xl lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
            We strive to build a global community where quality higher education
            empowers curious learners and encourages them to transform their
            lives. We deploy cutting-edge technologies on the Northway platform
            to simplify students international education journeys. We blend
            technology and innovation to transform the higher education
            landscape with institutions, partners, and industry stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
