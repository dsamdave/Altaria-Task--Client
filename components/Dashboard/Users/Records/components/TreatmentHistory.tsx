import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MoreFillIcon from "remixicon-react/MoreFillIcon";

interface TreatmentHistoryProps {
  onClose: () => void;
}

const TreatmentHistory: React.FC<TreatmentHistoryProps> = ({ onClose }) => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts or changes
  }, [showComponent]);

  const cardData = [
    {
      title: "Malaria",
      updatedAt: "Last updated: Jan 02, 2020 by Dr.Joe Abba ",
      details: "I was having serious malaria",
    },
    {
      title: "Muscle Pain",
      updatedAt: "Last updated: Jan 01, 2020 by Myself",
      details:
        "Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.",
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
        <h1 className="text-2xl text-[#1E1F20] font-bold mt-8">
          Treatment History
        </h1>

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
            You currently don’t have any
            treatment hsitory
            </p>
          </div>
        ) : (
          <div>
            {/* CURRENT */}
            <div className="mt-4">
              <p className="text-base text-[#1E1F20] font-bold">Current</p>

              {/* CARDS */}
              {cardData.map((data, index) => (
                <div key={index} className="shadow-md mt-4 p-2">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-[#1E1F20] font-semibold">
                      {data.title}
                    </p>
                    <MoreFillIcon size={24} color="#9393AA" />
                  </div>
                  <p className="text-xs text-[#9393AA] font-normal my-1">
                    {data.updatedAt}
                  </p>
                  <p className="text-sm text-[#1E1F20] font-normal my-1">
                    {data.details}
                  </p>
                </div>
              ))}
            </div>

            {/* PAST */}

            <div className="mt-5">
              <p className="text-base text-[#1E1F20] font-bold">Past</p>

              <div className="mt-5">
                <Image
                  src={"/no-icon.svg"}
                  width={80}
                  height={67}
                  alt="no icon"
                  className="mx-auto"
                />
                <p className="text-xs text-[#9393AA] font-normal text-center">
                  No conditions & symptoms
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentHistory;
