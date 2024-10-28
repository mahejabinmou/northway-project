import { useEffect, useRef, useState } from "react";

const Mission = () => {
  const missionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when it's not in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section className="sectionGap">
      <div className="WhyStudyParent">
        <div
          ref={missionRef}
          className={`animated-section-ltr ${isVisible ? "visible" : ""}`}
        >
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
