import Navbar from "../../Shared/Navbar/Navbar";

const AboutUsHero = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[30px]  lg:mt-[50px] ">
        <div className="h-[250px] lg:h-[300px]">
          <img
            className="h-full w-full "
            src="https://i.ibb.co/m6cK8sy/banner-1-66d94f5f486eb.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
