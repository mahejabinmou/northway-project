/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const tableData = [
  {
    factor: "Course Duration",
    country: "4 Years (Bachelor’s)\n2 Years (Master’s)",
  },
  {
    factor: "Intake",
    country: "January, May,\nSeptember",
  },
  {
    factor: "Application Fee",
    country: "40 To 200 (USD)",
  },
  {
    factor: "Requirements",
    country: "GRE/GMAT + IELTS/TOEFL/PTE,\nAcademics: Above 55%",
  },
  {
    factor: "Language Proficiency",
    country: "IELTS- 6+, TOEFL-70+\nDuolingo-90+, PTE-50+",
  },
  {
    factor: "Tuition Fee (Yearly)",
    country: "10000 To 55000 (USD)",
  },
  {
    factor: "Living Cost (Yearly)",
    country: "10000 To 18000 (USD)",
  },
  {
    factor: "Visa Application",
    country: "160 (USD),\nSEVIS Fee 350 (USD)",
  },
  {
    factor: "Air Ticket",
    country: "100000 To 150000 (BDT)",
  },
  {
    factor: "Processing Time",
    country: "9-12 Months",
  },
  {
    factor: "Part Time Work",
    country: "20 Hrs (per Week)",
  },
  {
    factor: "Post Study Work Permit",
    country:
      "12 Months for All Programs\n12+24 Months Extension for STEM (Science, Tech, Engg & Maths)",
  },
];
const Glance = ({ countryName }) => {
  return (
    <div className="sectionGap ">
      <h1
        className="font-bold lg:text-[48px] lg:leading-[57px]
      font-helvetica text-[30px] leading-[36px] text-[#1E1E1E] mb-[30px] mt-[100px] text-center"
      >
        <span className="text-[#F6941E] ">{countryName}</span> At a Glance
      </h1>
      <div className="overflow-x-auto mx-auto max-w-[1140px]  bg-[#FFF8E5] p-[30px]">
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b">
            <tr>
              <th className=" px-4 py-2 text-left text-red-500">Factors</th>
              <th className=" px-4 py-2 text-left text-red-500">
                {countryName}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="">
                <td className="border-b text-[20px] text-[#272727] px-4 py-2 font-medium">
                  {row.factor}
                </td>
                <td className="border-b text-[#464646] text-[16px] px-4 py-2 whitespace-pre-line">
                  {row.country}
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
