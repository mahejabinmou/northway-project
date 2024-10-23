import Navbar from "../../Shared/Navbar/Navbar";

const AboutUsHero = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="mt-[30px]  md:block hidden">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/vYB2PxM/pexels-fauxels-3184394.webp"})`,
            filter: "brightness(.5) ",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[600px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col px-[60px] max-w-[850px] gap-y-[20px] justify-center   lg:px-[150px]  lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            About Us
          </h1>
          <p className="text-xl lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
            We strive to build a global community where quality higher education
            empowers curious learners and encourages them to transform their
            lives. We deploy cutting-edge technologies on the Northway platform
            to simplify students international education journeys. We blend
            technology and innovation to transform the higher education
            landscape with institutions, partners, and industry stakeholders.
          </p>
        </div>
      </div>

      <div className="mt-[30px]  relative md:hidden block">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/g96gD9Y/banner-14-66dd6b8e4b724.webp"})`,
            filter: "brightness(20) ",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[450px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            About Us
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / About Us / USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
