/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Faq.css";

const Faq = ({ countryName }) => {
  const faqs = [
    {
      question: "Academic powers",
      answer:
        "The USA is home to some of the best universities in the world, most of the USA universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The US is home to 33 of the top 100 universities. ",
    },
    {
      question: "Excellent international student support system",
      answer:
        "American colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
    },

    {
      question: "Successful post-college career",
      answer:
        "The fact that American jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in American colleges.",
    },
    {
      question: "Career opportunities",
      answer:
        "Starting salaries for graduates from the top colleges in the USA are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null); // Track active index

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active item
  };

  return (
    <div
      className="mt-[250px] px-[16px]
    xs:mt-[290px] xs:px-[16px]
    
    md:mt-[200px] md:px-[32px]
   
    lg:px-[60px] lg:mt-[300px]
    
    xl:px-[150px] xl:mt-[300px] 
    2xl:px-[150px] 2xl:mt-[300px]"
    >
      <div className="flex 2xl:pt-[50px] pt-[70px] flex-col md:flex-row-reverse gap-x-[68px] items-center">
        <div className="w-full md:w-1/2 h-[370px] lg:h-[506px] pb-[30px] lg:pb-0">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/0sc8rCK/faq-66dc00ae9d778.webp"
            alt="faqimage"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="py-4">
            <h1 className="faqHead leading-[36px] pb-[20px] text-[#1E1E1E] text-nowrap">
              Study in{" "}
              <span className="text-[#F6941E]">{countryName} FAQ's</span>
            </h1>
            <p className="font-normal md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] text-[#1E1E1E]/[.8] pb-[30px]">
              Studying in the {countryName} can offer a variety of benefits,
              making it an attractive destination for international students.
              Here are some reasons why study in {countryName} is a popular
              choice.
            </p>
          </div>

          <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`mb-[16px] bg-white collapse collapse-plus join-item border ${
                  activeIndex === index ? "border-[#F6941E]" : "border-base-300"
                }`}
              >
                <div
                  className="collapse-title text-lg md:text-xl font-medium text-[#1E1E1E] cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "\u2212" : "\u002B"}</span>
                </div>
                {activeIndex === index && (
                  <div className=" px-4 pb-4  ">
                    <p className="text-sm md:text-base text-[#1E1E1E]/[.8]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
