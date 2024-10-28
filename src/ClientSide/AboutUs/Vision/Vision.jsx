import { useEffect } from "react";

const Vision = () => {
  useEffect(() => {
    const vision = document.getElementById("vision");

    setTimeout(() => {
      vision.classList.add("visible");
    }, 1000);
  }, []);

  return (
    <section className="sectionGap">
      <div className="WhyStudyParent mt-[-75px]">
        <div id="vision" className="animated-section-rtl text-right">
          <h1 className="chooseUsSamll text-right">
            <span className="text-[#F6941E]">Our</span> Vision
          </h1>
          <p className="chooseUsParaText text-black/[0.8]">
            Our long-term vision is to establish a globally connected
            educational ecosystem. We are dedicated to fostering innovation,
            inclusivity, and sustainability in education, ensuring every student
            has the opportunity to thrive in a dynamic world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
