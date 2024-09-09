import { useState } from "react";

const OurOffices = () => {
  // Set "India" as the default hovered office
  const [hoveredOffice, setHoveredOffice] = useState("India");

  const officeData = [
    {
      flag: "https://i.ibb.co.com/SvjNNzW/image-14-66dd3a70578b1.webp",
      name: "India",
    },
    {
      flag: "https://i.ibb.co.com/PwcnccN/image-14-1-66dd3aa63071a.webp",
      name: "Nepal",
    },
    {
      flag: "https://i.ibb.co.com/JrX4XSz/image-14-2-66dd3adc09621.webp",
      name: "Sri Lanka",
    },
    {
      flag: "https://i.ibb.co.com/yP4VKMT/image-14-3-66dd3b0f1691c.webp",
      name: "Bangladesh",
    },
    { flag: "https://i.ibb.co.com/bHc4vCc/image-14-5.png", name: "Ghana" },
    {
      flag: "https://i.ibb.co.com/MGXrLbK/image-14-6-66dd4a3545443.webp",
      name: "Pakistan",
    },
    {
      flag: "https://i.ibb.co.com/YLrp8Zs/image-14-7-66dd4a760b58e.webp",
      name: "Philippines",
    },
    {
      flag: "https://i.ibb.co.com/2FmcyWz/image-14-8-66dd4ab221d98.webp",
      name: "Kenya",
    },
  ];

  const handleMouseEnter = (name) => {
    setHoveredOffice(name);
  };

  const handleMouseLeave = () => {
    setHoveredOffice(null);
  };

  return (
    <>
      <div className="sectionGap">
        <div className="mb-[50px]">
          <h2 className="text-[48px] font-semibold leading-[120%] text-center">
            Our <span className="text-[#F6941E]">offices</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[23px]">
          {officeData.map((office) => (
            <div
              key={office.name}
              onMouseEnter={() => handleMouseEnter(office.name)}
              onMouseLeave={handleMouseLeave}
              className={`py-5 flex items-center justify-center border-custom border-[1px] shadow-officeShadow transition-all duration-300 ${
                hoveredOffice === office.name ? "bg-white" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <img src={office.flag} alt={`Flag of ${office.name}`} />
                <p>{office.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurOffices;
