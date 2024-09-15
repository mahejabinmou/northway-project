import { useSearchParams } from "react-router-dom"
import OurLatestBlog from "../Home/OurLatestBlog/OurLatestBlog"
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay"
import Footer from "../Shared/Footer/Footer"
import Application from "./Application/Application"
import Carrer from "./Career/Carrer"
import CostOfEducation from "./CostOfEducation/CostOfEducation"
import HeroStudyDistenation from "./DistenationBanner/DistenationBanner"
import Faq from "./Faq/Faq"
import Glance from "./Glance/Glance"
import PopularUni from "./PopularUni/PopularUni"
import StudentSpeak from "./StudentSpeak/StudentSpeak"
import WhyStudy from "./WhyStudy/WhyStudy"

const Distenation = () => {
    const [location] = useSearchParams()
    const countryName = location.get("country")
    return (
        <div className="bg-[#F5F5F5]">
            <HeroStudyDistenation
                countryName={countryName}
            ></HeroStudyDistenation>
            <Application></Application>
            <WhyStudy></WhyStudy>
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
    )
}

export default Distenation
