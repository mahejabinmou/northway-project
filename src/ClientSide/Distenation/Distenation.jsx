import OurLatestBlog from "../Home/OurLatestBlog/OurLatestBlog";
import OurService from "../Home/OurService/OurService";
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay";
import Footer from "../Shared/Footer/Footer";
import Application from "./Application/Application";
import Carrer from "./Career/Carrer";
import CostOfEducation from "./CostOfEducation/CostOfEducation";
import HeroStudyDistenation from "./DistenationBanner/DistenationBanner";
import Faq from "./Faq/Faq";
import Glance from "./Glance/Glance";
import PopularUni from "./PopularUni/PopularUni";
import StudentSpeak from "./StudentSpeak/StudentSpeak";
import WhyStudy from "./WhyStudy/WhyStudy";

const Distenation = () => {
  return (
    <div>
      <HeroStudyDistenation></HeroStudyDistenation>
      <Application></Application>
      <WhyStudy></WhyStudy>
      <OurService></OurService>
      <OurStudentSay></OurStudentSay>
      <Carrer></Carrer>
      <PopularUni></PopularUni>
      <CostOfEducation></CostOfEducation>
      <Glance></Glance>
      <OurStudentSay></OurStudentSay>
      <StudentSpeak></StudentSpeak>
      <Faq></Faq>
      <OurLatestBlog></OurLatestBlog>
      <Footer></Footer>
    </div>
  );
};

export default Distenation;
