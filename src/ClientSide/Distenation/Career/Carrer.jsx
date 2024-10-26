import { countryDetailsDestructor } from "../../../utils/CountryDetails";
const Carrer = ({ countryName }) => {
  const countryDetails = countryDetailsDestructor(countryName);

  return (
    <div className=" ">
      {/* <div className=" md:hidden block sectionGap">
        <div className=" h-[223px] ">
          <img
            className="w-full h-full object-cover"
            src="/career.webp"
            alt=""
          />
        </div>

        <div>
          <h1 className="faqHead pb-[10px]  pt-[30px] ">
            {" "}
            Careers<span className="text-[#F6941E]"> & Industry </span>
          </h1>

          <p className="font-normal text-[14px] leading-[21px] text-black/[0.8]">
            {countryDetails?.destinsionCareer}
          </p>

         
        </div>
      </div> */}

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="WhyStudyParent ">
          <div>
            <h1 className="chooseUsSamll">
              {" "}
              Careers<span className="text-[#F6941E]"> & Industry </span>
            </h1>

            <p className="chooseUsParaText text-[#1E1E1E]/[0.8]">
              {countryDetails?.destinsionCareer}
            </p>
          </div>

          <div>
            <div className=" h-[447px] ">
              <img
                className="w-full h-full object-cover"
                src="/career.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
