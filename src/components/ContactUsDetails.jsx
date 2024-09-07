import contactUsDetails from "../../constant/contactUsDetailsData"

const ContactUsDetails = () => {
    return (
        <div className="max-w-1/2">
            <div>
                <h4 className="text-[36px] font-semibold leading-[120%]">
                    Contact Us
                </h4>
                <p className="text-[#1E1E1ECC] mt-[14px]">
                    Get in touch today to learn how Edu Mandate can help your
                    business.
                </p>
            </div>
            <div>
                <div className="max-w-[464px]">
                    {contactUsDetails.map((contact, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#F6941E] rounded-full p-2">
                                <img
                                    src={contact.img}
                                    alt="contact icon"
                                    className="w-full"
                                />
                            </div>
                            <div className="max-w-[322px]">
                                <h4 className="text-[18px] font-semibold text-[#1E1E1E]">
                                    {contact.title}
                                </h4>
                                <p className="text-[#1E1E1ECC] text-[16px]">
                                    {contact.dis}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUsDetails
