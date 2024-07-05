import Image from "next/image";
import React from "react";

const BlessedPatients = () => {
  const cardData = [
    {
      imgSrc: "/bp1.png",
      bg: "bg-[#10BEDA]",
      content: "Heart Doctor",
      border: "border-0 border-transparent",
    },
    {
      imgSrc: "/bp2.png",
      bg: "bg-transparent",
      content: "Clinicians",
      border: "border border-gray-200",
    },
    {
      imgSrc: "/bp3.png",
      bg: "bg-transparent",
      content: "Midwifery",
      border: "border border-gray-200",
    },
  ];
  return (
    <div className="px-4 lg:px-20  bg-white pt-10 pb-20">
      <div className="bg-white flex items-center justify-center xl:justify-between -mt-24 lg:-mt-40 xl:p-10 p-5  flex-wrap rounded-3xl shadow-xl ">
        {/* Section 1 */}
        <div className="w-full sm:w-[462px]">
          <h1 className="text-[32px] text-[#003647] font-semibold">
            Health care for our blessed patients
          </h1>
          <p className="text-lg text-[#727272] font-normal my-3">
            Here are some of our doctor specialists who are very reliable and
            very experienced in their field
          </p>
        </div>
        {/* Section 2 */}
        <div className="flex items-center justify-center flex-wrap sm:mt-0 gap-4">
          {cardData.map((data, index) => (
            <div key={index} className="w-[174px] h-auto">
              <div
                className={`w-auto h-[152px] flex items-center justify-center  rounded-3xl ${data.bg} ${data.border}`}
              >
                <Image
                  src={data.imgSrc}
                  width={72}
                  height={72}
                  alt="BP images"
                />
              </div>
              <p className="text-lg text-[#727272] font-normal mt-5 text-center">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlessedPatients;
