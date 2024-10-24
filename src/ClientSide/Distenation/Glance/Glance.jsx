/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { tableData } from "../../../Constants/exports";
import useGetMatcResult from "../../../hooks/useGetMatcResult";

const Glance = ({ countryName }) => {
  const data = tableData.filter(
    (item) => item.country.toLowerCase() === countryName.toLowerCase()
  );

  console.log("Filtered Data:", data);
  if (!data.length) return null; // Ensure data exists

  // Function to handle rendering text with red pointers and arrows
  const renderTextWithFormat = (text) => {
    // Check if text is an array or a string
    if (Array.isArray(text)) {
      return text.map((item, index) => {
        if (typeof item === "string") {
          const arrowIndex = item.search(/[►➤]/); // Find the position of the first arrow symbol

          return (
            <div key={index}>
              {arrowIndex > -1 && (
                <span style={{ color: "red" }}>{item.charAt(arrowIndex)}</span>
              )}
              <span>{item.slice(arrowIndex + 1)}</span>{" "}
              {/* Correctly slice from the next character */}
            </div>
          );
        } else {
          console.error("Invalid item type:", item); // Log invalid item type
          return null; // Return null for invalid types
        }
      });
    } else if (typeof text === "string") {
      const arrowIndex = text.search(/[►➤]/);

      return (
        <div>
          {arrowIndex > -1 && (
            <span style={{ color: "red" }}>{text.charAt(arrowIndex)}</span>
          )}
          <span>{text.slice(arrowIndex + 1)}</span>
        </div>
      );
    }
    console.error("Unsupported type for rendering:", text); // Log unsupported types
    return null; // Fallback if the type is not supported
  };

  return (
    <div className=" ">
      <h1
        className="font-bold lg:text-[48px] lg:leading-[57px]
                font-helvetica text-[30px] leading-[36px] text-[#1E1E1E] mb-[30px] mt-[100px] text-center"
      >
        <span className="text-[#F6941E] ">{countryName}</span> At a Glance
      </h1>
      <div
        className="overflow-x-auto   bg-[#FFF8E5]       xs:py-[100px]
md:py-[80px]
lg:py-[80px]
xl:py-[150px]
2xl:py-[150px]
md:px-[32px]
lg:px-[60px]
xl:px-[150px]
2xl:px-[150px]"
      >
        <table className="min-w-full  table-auto border-collapse">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 text-left text-red-500">Factors</th>
              <th className="px-4 py-2 text-left text-red-500">
                {countryName}
              </th>
            </tr>
          </thead>
          <tbody>
            {data[0]?.details?.map((row, index) => (
              <tr key={index} className="">
                <td className="border-b text-[20px] text-[#272727] px-4 py-2 font-medium">
                  {row.factor}
                </td>
                <td className="border-b text-[#464646] text-[16px] px-4 py-2 whitespace-normal break-words">
                  {renderTextWithFormat(row.country)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Glance;
