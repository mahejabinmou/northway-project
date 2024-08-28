import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="sectionGap">
      <div className="chooseUsParent">
        <div
          className="relative w-full overflow-hidden chooseUsImgParent"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h1 className="chooseUsSamll">
            {" "}
            <span className="text-[#F6941E]">About</span> Us
          </h1>

          <p className="chooseUsParaText text-black/[0.8]">
            Discover the game-changer for Canadian Institutes: Edu Mandate! Our
            Indian-rooted strategy connects institutes with top agencies, fueled
            by human interaction and relentless expansion. With tailored
            support, unleash your potential and soar to new heights. Embrace
            excellence, partner with us, and embark on a transformative journey
            towards success. Contact us now!
          </p>
          <ul className="chooseUsParaText list-disc xl:pl-5 xl:space-y-2 text-black/[0.8]">
            <li>Expert Guidance.</li>
            <li>Seamless Transitions.</li>
            <li>Study Abroad Success.</li>
            <li>Academic Excellence.</li>
          </ul>

          <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
            Read More
            <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
