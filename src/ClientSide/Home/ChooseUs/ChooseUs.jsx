import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div
      className="  md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 
      xs:mt-[50px]"
    >
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co/XsjKQpK/4e5570afab2bc908ac5c505230f9bd33-66d3e7972bb5a.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[800px] h-[383px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h1 className="ChooseUsHead">
              Choose from 11+ University and College Scholarships
            </h1>
            <p className="ChooseUsPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to="/ContactUs">
              <button className="flex items-center justify-between joinUsBtn gap-x-[11.5px] hover:bg-[#F6941E] hover:text-white">
                join us <MdArrowRightAlt />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
