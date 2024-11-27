import ChooseUs from "../Home/ChooseUs/ChooseUs";
import OurService from "../Home/OurService/OurService";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Topbar from "../Shared/Navbar/TopBar";
import ServiceHero from "./ServiceHero/ServiceHero";

const Service = () => {
  return (
    <div className="GlobalBg">
      <Topbar></Topbar>
      <Navbar></Navbar>
      <ServiceHero></ServiceHero>
      <OurService></OurService>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Service;
