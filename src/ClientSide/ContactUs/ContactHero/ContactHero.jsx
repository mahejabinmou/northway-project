import Navbar from "../../Shared/Navbar/Navbar";
import Topbar from "../../Shared/Navbar/TopBar";

const ContactHero = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>

      <div className="  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"/Contact-us.png"})`,
            filter: "brightness(.5)",
          }}
          className="bg-no-repeat bg-right bg-cover w-[100%] h-[485px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px]  text-left">
          <h1 className="xs:text-5xl lg:text-[80px] text-white font-helvetica font-bold text-center ">
            Contact Us
          </h1>
          {/* <p className="text-[16px] md:text-xl 2xl:text-2xl lg:text-base  text-white mt-2 lg:mt-0 font-medium font-helvetica">
            We strive to build a global community where quality higher education
            empowers curious learners and encourages them to transform their
            lives. We deploy cutting-edge technologies on the Northway platform
            to simplify students international education journeys. We blend
            technology and innovation to transform the higher education
            landscape with institutions, partners, and industry stakeholders.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
