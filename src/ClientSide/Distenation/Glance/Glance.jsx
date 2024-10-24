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
    console.log("Rendering Text:", text); // Log the text being rendered

    // Check if text is an array or a string
    if (Array.isArray(text)) {
      return text.map((item, index) => {
        console.log("Array Item:", item); // Log each item in the array
        if (typeof item === "string") {
          return (
            <div key={index}>
              {item.includes("►") && (
                <span style={{ color: "red" }}>{item.slice(0, 1)}</span>
              )}
              {item.includes("➤") && (
                <span style={{ color: "red" }}>{item.slice(0, 1)}</span>
              )}
              {item.slice(1)}
            </div>
          );
        } else {
          console.error("Invalid item type:", item); // Log invalid item type
          return null; // Return null for invalid types
        }
      });
    } else if (typeof text === "string") {
      return (
        <div>
          {text.includes("►") && (
            <span style={{ color: "red" }}>{text.slice(0, 1)}</span>
          )}
          {text.includes("➤") && (
            <span style={{ color: "red" }}>{text.slice(0, 1)}</span>
          )}
          {text.slice(1)}
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
                <td className="border-b text-[#464646] text-[16px] px-4 py-2 whitespace-pre-line">
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
