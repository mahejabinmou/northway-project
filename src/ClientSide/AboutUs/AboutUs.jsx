import OurService from "../Home/OurService/OurService";
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay";
import Footer from "../Shared/Footer/Footer";
import AboutUsHero from "./AboutUsHero/AboutUsHero";
import WhoAreU from "./WhoAreU/WhoAreU";

const AboutUs = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutUsHero></AboutUsHero>
      <WhoAreU></WhoAreU>
      <OurService></OurService>
      <OurStudentSay></OurStudentSay>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
