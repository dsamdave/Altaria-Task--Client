import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MoreFillIcon from "remixicon-react/MoreFillIcon";

interface LabResultsProps {
  onClose: () => void;
}

const LabResults: React.FC<LabResultsProps> = ({ onClose }) => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts or changes
  }, [showComponent]);

  const cardData = [
    {
      title: "Chest -Ray",
      updatedAt: "Conducted: Jan 02, 2020 by Dr.Joe Abba ",
      details: "Your chest is too wide...",
      lab: "ALA Lab",
      imgSrc: "/lab1.png",
    },
    {
      title: "CBC Test",
      updatedAt: "Conducted: Jan 02, 2020 by Dr.Joe Abba ",
      details: "Your chest is too wide...",
      lab: "ALA Lab",
      imgSrc: "/lab1.png",
    },
    {
      title: "Hemoglobin A1C",
      updatedAt: "Conducted: Jan 02, 2020 by Dr.Joe Abba ",
      details: "You are taking too much sugar, resulting to...",
      lab: "FUA Lab",
      imgSrc: "",
    },
    {
      title: "Lipid Panel",
      updatedAt: "Conducted: Jan 02, 2020 by Dr.Joe Abba ",
      details: "You are taking too much sugar, resulting to...",
      lab: "FUA Lab",
      imgSrc: "",
    },
    {
      title: "Urinalysis",
      updatedAt: "Conducted: Jan 01, 2020 by Dr.Kay",
      details:
        "Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.",
      lab: "",
      imgSrc: "",
    },
  ];
  return (
    <div className="mt-8 flex items-start justify-center ">
      <div className="w-full sm:w-[375px] mx-auto">
        <Image
          src={"/mra.svg"}
          width={40}
          height={40}
          alt="icon"
          onClick={onClose}
          className=""
        />
        <h1 className="text-2xl text-[#1E1F20] font-bold mt-8">Lab Results</h1>
        <p className="text-xs text-[#1E1F20] font-normal">
          Last updated: 01:29 PM Jan 04, 2020
        </p>

        {showComponent ? (
          <div className="mt-40">
            <Image
              src={"/no-icon.svg"}
              width={80}
              height={67}
              alt="no icon"
              className="mx-auto"
            />
            <p className="text-xs text-[#9393AA] font-normal text-center">
              You currently don’t have any lab result
            </p>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-base text-[#1E1F20] font-bold">Current</p>

            {/* CARDS */}
            {cardData.map((data, index) => (
              <div key={index} className="shadow-md mt-4 p-2">
                <div className="flex items-center justify-between">
                  <p className="text-base text-[#1E1F20] font-semibold">
                    {data.title}
                  </p>
                  <p className="text-sm text-[#1E1F20] font-normal">
                    {data.lab}
                  </p>
                </div>
                <p className="text-xs text-[#9393AA] font-normal my-1">
                  {data.updatedAt}
                </p>
                <p className="text-sm text-[#1E1F20] font-normal my-1">
                  {data.details}
                </p>
                {data.imgSrc === "" ? null : (
                  <Image
                    src={data.imgSrc}
                    width={287}
                    height={64}
                    alt="img upload"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LabResults;
