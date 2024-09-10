import { MdArrowRightAlt } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div
      className="  md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px]
    mt-[50px]  xs:mt-[50px]"
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
            <button className="flex items-center justify-between joinUsBtn gap-x-[11.5px]">
              join us <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
