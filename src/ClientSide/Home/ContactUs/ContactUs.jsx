import { img } from "../../../../constant/images"
import ContactUsDetails from "../../../components/ContactUsDetails"
import ContactUsForm from "../../../components/ContactUsForm"
import OurOffices from "../../../components/OurOffices"
import Footer from "../../Shared/Footer/Footer"
import Hero from "../../Shared/Hero/Hero"
import Navbar from "../../Shared/Navbar/Navbar"

const ContactUs = () => {
    return (
        <div>
            <Navbar textClr={"rgba(30, 30, 30, 0.80)"} absolute={false} />
            <Hero
                bg={[img.contactUsBgUrl, img.contactUsBgPhone]}
                pageName="Contact Us"
            />
            <div className="px-4 mb-[150px] mt-[75px]">
                <OurOffices />
                <div className="flex flex-col-reverse md:flex-row items-center mx-auto max-w-[1140px] mt-[150px] gap-[65px]">
                    <ContactUsForm />
                    <ContactUsDetails />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
