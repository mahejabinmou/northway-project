import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
    </div>
  );
};

export default Home;
