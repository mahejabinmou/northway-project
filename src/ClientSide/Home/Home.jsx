import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import OurService from "./OurService/OurService";
import ChooseUs from "./ChooseUs/ChooseUs";
import StudyDestination from "./StudyDestination/StudyDestination";
import OurStudentSay from "./OurStudentSay/OurStudentSay";
import OurLatestBlog from "./OurLatestBlog/OurLatestBlog";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <OurService></OurService>
      <ChooseUs></ChooseUs>
      <StudyDestination></StudyDestination>
      {/* <OurVideo></OurVideo> */}
      <OurStudentSay></OurStudentSay>
      <OurLatestBlog></OurLatestBlog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
