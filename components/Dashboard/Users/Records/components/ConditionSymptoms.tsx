import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React from "react";
import MoreFillIcon from "remixicon-react/MoreFillIcon";

interface ConditionSymptomsProps {
  onClose: () => void;
}

const ConditionSymptoms: React.FC<ConditionSymptomsProps> = ({ onClose }) => {
  const cardData = [
    {
      title: "Flu & Cold",
      updatedAt: "Last updated: Jan 02, 2020 by Dr.Kay Adeola",
      details: "I have a runny or stuffy nose",
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
          Conditions & Symptoms
        </h1>

        {/* CURRENT */}
        <div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-base text-[#1E1F20] font-bold">Current</p>

            <button className="flex items-center gap-2 text-[#1E1F20] font-semibold text-sm">
              Add New
              <Image src={"/plus.png"} width={16} height={16} alt="icon" />
            </button>
          </div>

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
          <div className="flex items-center justify-between mt-4">
            <p className="text-base text-[#1E1F20] font-bold">Past</p>

            <button className="flex items-center gap-2 text-[#1E1F20] font-semibold text-sm">
              Add New
              <Image src={"/plus.png"} width={16} height={16} alt="icon" />
            </button>
          </div>

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
    </div>
  );
};

export default ConditionSymptoms;
