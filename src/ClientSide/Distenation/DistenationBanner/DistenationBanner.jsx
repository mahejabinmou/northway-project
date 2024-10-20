import Navbar from "../../Shared/Navbar/Navbar";

const DistenationBanner = ({ countryName }) => {
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

export default DistenationBanner;
