import OurService from "../Home/OurService/OurService";
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay";
import Footer from "../Shared/Footer/Footer";
import AboutUsHero from "./AboutUsHero/AboutUsHero";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import WhoAreU from "./WhoAreU/WhoAreU";

const AboutUs = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutUsHero></AboutUsHero>
      <WhoAreU></WhoAreU>
      <OurService></OurService>
      <div className="sm:flex sm:flex-wrap">
        <Mission></Mission>
        <Vision></Vision>
      </div>
      <OurStudentSay></OurStudentSay>
      {/* Here you new component for mission and vision */}
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
