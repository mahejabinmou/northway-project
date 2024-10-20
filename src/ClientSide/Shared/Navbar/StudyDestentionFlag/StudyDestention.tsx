import React from "react";
import { useNavigate } from "react-router-dom";
const distensionInfo = [
  {
    country: "USA",
    flag: "/flag/usa.png",
    id: 1,
    subTitle:
      "We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their  lives. We deploy cutting-edge technologies on the Northway platform  to simplify students international education journeys. We blend  technology and innovation to transform the higher education  landscape with institutions, partners, and industry stakeholders.",
  },
  {
    country: "Ireland",
    flag: "/flag/ireland.png",
    id: 2,
    subTitle:
      "We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their  lives. We deploy cutting-edge technologies on the Northway platform  to simplify students international education journeys. We blend  technology and innovation to transform the higher education  landscape with institutions, partners, and industry stakeholders.",
  },
  {
    country: "Europe",
    flag: "/flag/europe.png",
    id: 3,
    subTitle:
      "We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their  lives. We deploy cutting-edge technologies on the Northway platform  to simplify students international education journeys. We blend  technology and innovation to transform the higher education  landscape with institutions, partners, and industry stakeholders.",
  },
  {
    country: "Canada",
    flag: "/flag/canada.png",
    id: 4,
    subTitle:
      "We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their  lives. We deploy cutting-edge technologies on the Northway platform  to simplify students international education journeys. We blend  technology and innovation to transform the higher education  landscape with institutions, partners, and industry stakeholders.",
  },
  {
    country: "Australia",
    flag: "/flag/australia.png",
    id: 5,
    subTitle:
      "We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their  lives. We deploy cutting-edge technologies on the Northway platform  to simplify students international education journeys. We blend  technology and innovation to transform the higher education  landscape with institutions, partners, and industry stakeholders.",
  },
];
const StudyDestination = ({ toggleDropdown2 }) => {
  const navigatge = useNavigate();
  const handleNavigate = (location) => {
    navigatge(location);
    toggleDropdown2();
  };
  return (
    <div
      className="flex flex-col ml-5 mb-2 lg:mb-0 lg:ml-0 items-start gap-2 lg:gap-0
         lg:items-center lg:justify-between lg:flex-wrap lg:flex-row"
    >
      {distensionInfo.map((country) => (
        <div
          key={country.id}
          className="flex items-center justify-center bg-white cursor-pointer"
          onClick={() =>
            handleNavigate(`/studyDistention?country=${country.country}`)
          }
        >
          <img src={country.flag} alt={country.country} />
          <p className="text-[#1E1E1E] text-[18px] font-bold ml-[15px]">
            {country.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StudyDestination;
