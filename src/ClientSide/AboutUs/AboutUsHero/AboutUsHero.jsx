import Navbar from "../../Shared/Navbar/Navbar";

const AboutUsHero = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[30px]  relative md:block hidden">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/F4rn2xk/banner-13-66dd6a899105b.webp"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[250px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Study In USA
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Study Distention / USA
          </p>
        </div>
      </div>

      <div className="mt-[30px]  relative md:hidden block">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/g96gD9Y/banner-14-66dd6b8e4b724.webp"})`,
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[250px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Study In USA
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Study Distention / USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
