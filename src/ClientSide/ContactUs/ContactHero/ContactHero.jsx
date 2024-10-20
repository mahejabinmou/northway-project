import Navbar from "../../Shared/Navbar/Navbar";

const ContactHero = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[30px]  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/dP2XMJt/banner-11-66dd37c46c585.webp"})`,
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[600px]  flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col gap-y-[20px] px-[60px] max-w-[850px] justify-center  lg:px-[150px]   lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold font-helvetica ">
            Contact Us
          </h1>
          <p className="text-xl  text-white mt-2 lg:mt-0 font-medium font-helvetica">
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

export default ContactHero;
