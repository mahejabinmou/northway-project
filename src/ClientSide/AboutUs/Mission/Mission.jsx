import { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    const mission = document.getElementById("mission");

    setTimeout(() => {
      mission.classList.add("visible");
    }, 500);
  }, []);

  return (
    <section className="sectionGap">
      <div className="WhyStudyParent relative">
        <div id="stroke-line" className="stroke-line"></div>
        <div id="dot" className="dot"></div>
        <div id="mission" className="animated-section-ltr">
          <h1 className="chooseUsSamll">
            <span className="text-[#F6941E]">Our</span> Mission
          </h1>
          <p className="chooseUsParaText text-black/[0.8]">
            We aim to facilitate the smooth transition of students into new
            educational environments across the globe. Our mission is to provide
            support, resources, and guidance to ensure a successful migration
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
