import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  //   ----

  const contactUsDetails = [
    {
      img: "https://i.ibb.co.com/h1j23bC/frame-89-1-66dd4d9332eca.webp",
      title: "Email",
      dis: "info@northwayglobal.com.bd",
    },
    {
      img: "https://i.ibb.co.com/54ZydTH/frame-89-2-66dd4dc010735.webp",
      title: "Phone",
      dis: "+880 1607-002687",
    },
    {
      img: "https://i.ibb.co.com/02dwmHq/frame-89-3-66dd4ded194c7.webp",
      title: "Address",
      dis: "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)",
    },
  ];

  return (
    <div className=" flex flex-col-reverse md:flex-row justify-center items-center sectionGap gap-[68px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-[614px] w-full md:w-1/2 p-4  shadow-formShadow rounded-md "
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md h-32 bg-[#F5F5F5] outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="px-5 py-[10px] bg-[#F6941E] text-white p-2 rounded-md hover:bg-[#f6951ec0] transition"
        >
          Submit
        </button>
      </form>

      <div className="max-w-1/2 ">
        <div>
          <h4 className="text-[36px] font-semibold leading-[120%]">
            Contact Us
          </h4>
          <p className="text-[#1E1E1ECC] mt-[14px]">
            Get in touch today to learn how Edu Mandate can help your business.
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
                  <p className="text-[#1E1E1ECC] text-[16px]">{contact.dis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
