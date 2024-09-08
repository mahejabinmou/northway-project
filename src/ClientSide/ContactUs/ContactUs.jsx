import ContactHero from "./ContactHero/ContactHero";
import ContactForm from "./ContactUsForm/ontactUsForm";
import OurOffices from "./OurOffices/OurOffices";

const ContactUs = () => {
  return (
    <div className=" bg-[#F5F5F5]">
      <ContactHero></ContactHero>
      <OurOffices></OurOffices>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
