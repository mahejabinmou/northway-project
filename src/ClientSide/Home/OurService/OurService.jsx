import OurServiceCard from "./OurServiceCard/OurServiceCard";

const OurService = () => {
  const officesData = [
    {
      name: "Study Abroad",
      image: "/Frame (3).svg",
      description:
        "Our comprehensive study abroad services, assisting students in finding the right educational institutions and ensuring a smooth transition to their desired study destinations.",
    },
    {
      name: "Immigration",
      image: "/Frame (6).svg",
      description:
        "Our comprehensive immigration and work permit services to help our clients navigate the complex process of living and working abroad. From visa applications to work permit renewals.",
    },
    {
      name: "Scholarship",
      image: "/Frame (4).svg",
      description:
        "Our dedicated team helps students explore and apply for scholarships, providing valuable resources and guidance to maximize their chances of securing funding for their education.",
    },
    {
      name: "Easy Application",
      image: "/Frame (5).svg",
      description:
        "From initial consultation to document preparation and submission, our streamlined approach guarantees efficient and accurate applications to your desired educational institutions.",
    },
  ];

  return (
    <div>
      {/* mobile */}
      <div className="md:hidden block sectionGap   bg-[#F5F5F5]">
        <div
          className="md:mr-[70px] lg:mr-[500px] xl:mr-[563px] 2xl:mr-[563px]
        mr-[16px] xs:text-center text-center md:text-left
      "
        >
          <h1 className="serviceHomeHead">
            <span className="text-[#F6941E]"> Our</span> {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="serviceHomePara ">We Provide The Best Services</p>
        </div>

        <div className="gridParent  ">
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
              description={office.description}
            ></OurServiceCard>
          ))}
        </div>
      </div>

      {/* large */}
      <div className="hidden md:block  sectionGap   pt-[50px] bg-[#F6941E]/[.03]">
        <div
          className="md:mr-[70px] lg:mr-[500px] xl:mr-[563px] 2xl:mr-[563px]
        mr-[16px] xs:text-center text-center md:text-left
      "
        >
          <h1 className="serviceHomeHead">
            <span className="text-[#F6941E]"> Our</span> {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="serviceHomePara ">We Provide The Best Services</p>
        </div>

        <div className="gridParent  ">
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
              description={office.description}
            ></OurServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
