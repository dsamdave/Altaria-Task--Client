import React from 'react';
import Image from 'next/image';
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";


interface MyRecordProp{
    basicInfo: ()=>void;
    healthMatrics: ()=>void;
    condition: ()=>void;
    treatmentHistory: ()=>void;
    medications: ()=>void;
    labResults: ()=>void;
}

const MyRecords:React.FC<MyRecordProp> = ({basicInfo, healthMatrics, condition, treatmentHistory, medications, labResults}) => {
    const myRecordsData = [
        {
          imgSrc: "/mr2.svg",
          title: "Basic Information",
          number: "",
          action: basicInfo,
        },
        {
          imgSrc: "/mr3.svg",
          title: "Health Metrics",
          number: "",
          action: healthMatrics
        },
        {
          imgSrc: "/mr4.svg",
          title: "Conditions & Symptoms",
          number: "2",
          action: condition
        },
        {
          imgSrc: "/mr5.svg",
          title: "Clinical Vitals",
          number: "0",
        },
        {
          imgSrc: "/mr6.svg",
          title: "Allergies",
          number: "1",
        },
        {
          imgSrc: "/mr7.svg",
          title: "Immunization",
          number: "0",
        },
        {
          imgSrc: "/mr8.svg",
          title: "Lab Results",
          number: "4",
          action: labResults
        },
        {
          imgSrc: "/mr9.svg",
          title: "Medications",
          number: "2",
          action: medications
        },
        {
          imgSrc: "/mr10.svg",
          title: "Treatment History",
          number: "0",
          action: treatmentHistory
        },
      ];
  return (
    <div>
              {/* Top Section */}
              <div className="flex flex-col items-center justify-center">
                  <Image
                    src={"/mr1.png"}
                    width={112}
                    height={112}
                    alt="User image"
                    className="rounded-lg"
                  />

                  <h1 className="text-base text-[#1E1F20] font-bold text-center mt-1">
                    Princewill Iroka
                  </h1>
                  {/* Progress Bar */}
                  <div className="w-full sm:w-[162px] h-2 bg-[#F0F0F0] rounded mt-3">
                    <div className="bg-[#12B2B3] h-2 w-[50%] rounded" />
                  </div>
                  <p className="text-xs text-[#1E1F20] font-normal text-center mt-1">
                    Completed 78% basic profile.
                  </p>
                </div>
                {/* Top Section eds */}

                <div className="flex items-start justify-center gap-6 flex-wrap mt-10">
                  {/* Left Side */}
                  <div className="w-full sm:w-[327px]">
                    {myRecordsData.map((data, index) => (
                      <div
                      key={index}
                        className="flex items-center justify-between my-4 cursor-pointer"
                        onClick={data.action}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={data.imgSrc}
                            width={40}
                            height={40}
                            alt="icon"
                          />
                          <p className="text-base text-[#1E1F20] font-normal">
                            {data.title}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <p className="text-base text-[#9393AA] font-normal">
                            {data.number}
                          </p>
                          <ArrowRightSLineIcon size={24} color="#9393AA" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Left side ends here */}

                  {/* Right side */}
                  <div className="w-full sm:w-[327px]">
                    <div className="mt-7 pt-5 border-t border-[#F6F6F6]">
                      <h4 className="font-semibold text-[#1E1F20]">
                        Sync with Health Services
                      </h4>
                      <p className="text-gray-500 text-sm mt-5">
                        By importing your health data from Smart Devices, Doctor
                        can better help you.
                      </p>
                      <button className="flex items-center justify-center p-2 sm:p-3 w-full gap-2 border border-[#E0E0E0] rounded-xl mt-4">
                        <Image
                          src="/health.png"
                          width={24}
                          height={24}
                          alt="attach icon"
                          className=""
                        />
                        <span className="text-base text-[#9393AA] font-bold">
                          Select Health Data
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Right side ends here */}
                </div>
    </div>
  )
}

export default MyRecords