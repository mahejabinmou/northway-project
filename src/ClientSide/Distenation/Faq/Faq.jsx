const Faq = () => {
  return (
    <div
      className="mt-[250px] px-[16px]
  
    xs:mt-[250px] xs:px-[16px]
    
    md:mt-[200px] md:px-[32px]
   
    lg:px-[60px] lg:mt-[300px]
    
    xl:px-[150px] xl:mt-[300px]
    
    2xl:px-[150px] 2xl:mt-[300px];"
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
            <h1
              className="font-bold font-helvetica md:text-[48px] md:leading-[57.6px]
              text-[30px] leading-[36px] pb-[20px]"
            >
              Study in <span className="text-[#F6941E] ">USA FAQ's</span>
            </h1>
            <p
              className="font-normal md:text-[16px] md:leading-[24px]
               text-[14px] leading-[21px] text-black/[.8] pb-[30px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-plus join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium ">
                Can you work while studying in the United States?
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium">
                Can you work while studying in the United States?
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium">
                Can you work while studying in the United States?
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium">
                Can you work while studying in the United States?
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium">
                Can you work while studying in the United States?
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
