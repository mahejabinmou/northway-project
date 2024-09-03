import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import OurService from "./OurService/OurService";
import ChooseUs from "./ChooseUs/ChooseUs";
import StudyDestination from "./StudyDestination/StudyDestination";
import OurVideo from "./OurVideo/OurVideo";
import OurStudentSay from "./OurStudentSay/OurStudentSay";
import OurLatestBlog from "./OurLatestBlog/OurLatestBlog";

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
    </div>
  );
};

export default Home;
