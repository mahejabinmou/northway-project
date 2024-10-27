// import { useState } from "react";
// import ContactForm from "../ContactUsForm/ContactUsForm";

// const OurOffices = () => {
//   const [hoveredOffice, setHoveredOffice] = useState("Bangladesh");
//   const [selectedOffice, setSelectedOffice] = useState(null);

//   const officeData = [
//     {
//       flag: "https://i.ibb.co.com/yP4VKMT/image-14-3-66dd3b0f1691c.webp",
//       name: "Bangladesh",
//       email: "info@northwayglobalBd.com.bd",
//       phone: "+880 1607-002687",
//       address:
//         "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)",
//     },
//     {
//       flag: "https://i.ibb.co.com/M84ddsf/uae-6717451c3c4e4.webp",
//       name: "Dubai",
//       email: "info@northwayglobalDubai.com.bd",
//       phone: "+55 1607-002687",
//       address:
//         "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near  Dubai Embassy)",
//     },
//     {
//       flag: "https://i.ibb.co.com/JrX4XSz/image-14-2-66dd3adc09621.webp",
//       name: "USA",
//       email: "info@northwayglobalUsa.com.bd",
//       phone: "+1607-00268",
//       address:
//         "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near USA Embassy)",
//     },
//   ];

//   const handleMouseEnter = (name) => {
//     setHoveredOffice(name);
//   };

//   const handleMouseLeave = () => {
//     setHoveredOffice(null);
//   };

//   const handleOfficeClick = (office) => {
//     setSelectedOffice(office);
//   };

//   return (
//     <>
//       <div className="sectionGap">
//         <div className="mb-[50px]">
//           <h2 className="text-[48px]  leading-[120%] text-center font-helvetica font-bold">
//             Our <span className="text-[#F6941E]">Offices</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-[23px]">
//           {officeData.map((office) => (
//             <div
//               key={office.name}
//               onMouseEnter={() => handleMouseEnter(office.name)}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleOfficeClick(office)}
//               className={`py-5 px-8 flex items-center justify-self-center  shadow-officeShadow transition-all duration-300 cursor-pointer ${
//                 hoveredOffice === office.name
//                   ? " bg-[#F6941E]/[1.5]"
//                   : "bg-white"
//               }`}
//             >
//               <div className="flex  items-center justify-center gap-2">
//                 <img
//                   className="h-[15px] w-[25px]"
//                   src={office.flag}
//                   alt={`Flag of ${office.name}`}
//                 />
//                 <p className="font-helvetica font-bold">{office.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pass the selected office data to the ContactForm component */}
//       {selectedOffice && <ContactForm selectedOffice={selectedOffice} />}
//     </>
//   );
// };

// export default OurOffices;

import { useState } from "react";
import ContactForm from "../ContactUsForm/ContactUsForm";

const OurOffices = () => {
  const [selectedOffice, setSelectedOffice] = useState("Bangladesh");

  const officeData = [
    {
      flag: "https://i.ibb.co.com/yP4VKMT/image-14-3-66dd3b0f1691c.webp",
      name: "Bangladesh",
      email: "info@northwayglobalBd.com.bd",
      phone: "+880 1607-002687",
      address:
        "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)",
    },
    {
      flag: "https://i.ibb.co.com/M84ddsf/uae-6717451c3c4e4.webp",
      name: "Dubai",
      email: "info@northwayglobalDubai.com.bd",
      phone: "+55 1607-002687",
      address: "(Near Dubai Embassy)",
    },
    {
      flag: "/flag/usa.png",
      name: "USA",
      email: "info@northwayglobalUsa.com.bd",
      phone: "+1607-00268",
      address: "(Near USA Embassy)",
    },
  ];

  const handleMouseEnter = (name) => {
    setHoveredOffice(name);
  };

  const handleMouseLeave = () => {
    setHoveredOffice(null);
  };

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
  };

  return (
    <>
      <div className="sectionGap ">
        <div className="mb-[30px]">
          <h2 className="text-[48px]  leading-[120%] text-center font-helvetica font-bold">
            Our <span className="text-[#F6941E]">Offices</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
          {officeData.map((office) => (
            <div
              key={office.name}
              onMouseEnter={() => handleMouseEnter(office.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleOfficeClick(office)}
              className={`py-[90px] px-[100px] flex items-center justify-center gap-[20px] shadow-officeShadow transition-all duration-300 cursor-pointer hover:bg-[#F6941E]/[1.5]
          bg-white`}
            >
              <div className="flex text-[30px] items-center justify-center gap-[20px]">
                <img
                  className="h-[22px] w-[30px]"
                  src={office.flag}
                  alt={`Flag of ${office.name}`}
                />
                <p className="font-helvetica font-bold">{office.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pass the selected office data to the ContactForm component */}
      <ContactForm selectedOffice={selectedOffice} />
    </>
  );
};

export default OurOffices;
