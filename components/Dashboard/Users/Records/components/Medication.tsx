import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface MedicationProps {
  onClose: () => void;
}

const Medication: React.FC<MedicationProps> = ({ onClose }) => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts or changes
  }, [showComponent]);

  const generalInfoData = [
    {
      label: "Paracetamol",
      value: "2 / dose",
    },
    {
      label: "White capsule",
      value: "1/ usage",
    },
    {
      label: "Paracetamol",
      value: "2 / dose",
    },
  ];

  const advancedInfoData = [
    {
      label: "Tetanus Injection",
      value: "1/ day",
    },
    {
      label: "Cancer Injection",
      value: "1/ 2 days",
    },
    {
      label: "Tetanus Injection",
      value: "1/ 2 days",
    },
    {
      label: "Tetanus Injection",
      value: "1/ 2 days",
    },
  ];
  return (
    <div className="mt-8 ">
      <Image
        src={"/mra.svg"}
        width={40}
        height={40}
        alt="icon"
        onClick={onClose}
        className="sm:ml-28 mb-6"
      />
      {showComponent ? (
        <div className="w-full sm:w-[327px] mx-auto">
          <h1 className="text-2xl text-[#1E1F20] font-bold">Medication</h1>
          <p className="text-xs text-[#1E1F20] font-normal">
            Last updated: 01:29 PM Jan 04, 2020
          </p>

          <div className="mt-40">
            <Image
              src={"/no-icon.svg"}
              width={80}
              height={67}
              alt="no icon"
              className="mx-auto"
            />
            <p className="text-xs text-[#9393AA] font-normal text-center">
              You currently don’t have any medication
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-center gap-8 flex-wrap">
          {/* Left side */}
          <div className="w-full sm:w-[327px]">
            <h1 className="text-2xl text-[#1E1F20] font-bold">Medication</h1>
            <p className="text-xs text-[#1E1F20] font-normal">
              Last updated: 01:29 PM Jan 04, 2020
            </p>
            <p className="text-xs text-[#1E1F20] font-normal">
              You currently have 10 Medication
            </p>

            {/* Bsic Info */}
            <div className="mt-5">
              <div className="flex items-center  gap-4 ">
                <Image src={"/hm1.svg"} width={32} height={32} alt="icon" />
                <p className="text-base text-[#1E1F20] font-semibold">
                  General Medication
                </p>
              </div>
              {/* INPUT AREA */}

              <div className="mt-5">
                {generalInfoData.map((data, index) => (
                  <CustomInput
                    key={index}
                    label={data.label}
                    placeholder={""}
                    type={"text"}
                    value={data.value}
                    onChange={() => {}}
                    className="mt-3"
                    className2="w-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full sm:w-[327px]">
            <div>
              <div className="flex items-center  gap-4 ">
                <Image src={"/hm2.svg"} width={32} height={32} alt="icon" />
                <p className="text-base text-[#1E1F20] font-semibold">
                  Advance Information
                </p>
              </div>

              {/* INPUT AREA */}

              <div className="mt-5">
                {advancedInfoData.map((data, index) => (
                  <CustomInput
                    key={index}
                    label={data.label}
                    placeholder={""}
                    type={"text"}
                    value={data.value}
                    onChange={() => {}}
                    className="mt-3"
                    className2="w-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medication;
