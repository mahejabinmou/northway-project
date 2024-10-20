import { distensionInfo } from "../constants/exports";

export const countryDetailsDestructor = (countryName) => {
  const [countryDetails] = distensionInfo.filter(
    (country) => country.country === countryName
  );
  return countryDetails;
};
