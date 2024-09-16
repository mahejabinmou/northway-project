import { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Faq = () => {
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
      <div className="flex flex-col md:flex-row-reverse gap-x-[68px] items-center">
        <div className="w-full md:w-1/2 h-[370px] lg:h-[506px] pb-[30px] lg:pb-0">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/0sc8rCK/faq-66dc00ae9d778.webp"
            alt="faqimage"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="p-4">
            <h1 className="faqHead leading-[36px] pb-[20px] text-[#1E1E1E]">
              Study in <span className="text-[#F6941E]">USA FAQ's</span>
            </h1>
            <p className="font-normal md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] text-[#1E1E1E]/[.8] pb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
