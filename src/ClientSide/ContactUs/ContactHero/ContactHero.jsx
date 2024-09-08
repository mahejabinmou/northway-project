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
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[250px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Contact Us
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
