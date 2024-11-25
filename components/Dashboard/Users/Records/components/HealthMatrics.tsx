import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React from "react";

interface HealthMatricsProps {
  onClose: () => void;
}

const HealthMatrics: React.FC<HealthMatricsProps> = ({ onClose }) => {
  const basicInfoData = [
    {
      label: "Current Height(ft in)",
      value: '5" 7"',
    },
    {
      label: "Current Weight (lbs)",
      value: "150",
    },
    {
      label: "Body Mass Index (BMI)",
      value: "20",
    },
  ];

  const advancedInfoData = [
    {
      label: "Blood Pressure (Systolic)",
      value: "N/A",
    },
    {
      label: "Total Cholesterol",
      value: "N/A",
    },
    {
      label: "LDL Cholesterol",
      value: "N/A",
    },
    {
      label: "HDL Cholesterol",
      value: "N/A",
    },
    {
      label: "Triglycerides",
      value: "N/A",
    },
    {
      label: "Cholesterol/HDL Ratio",
      value: "N/A",
    },
    {
      label: "Glucose",
      value: "N/A",
    },
  ];
  return (
    <div className="mt-8">
      <Image
        src={"/mra.svg"}
        width={40}
        height={40}
        alt="icon"
        onClick={onClose}
        className="sm:ml-28 mb-6"
      />
      <div className="flex items-start justify-center gap-8 flex-wrap">
        {/* Left side */}
        <div className="w-full sm:w-[327px]">
          <h1 className="text-2xl text-[#1E1F20] font-bold">Health Metrics</h1>
          <p className="text-xs text-[#1E1F20] font-normal">
            Last updated: 01:29 PM Jan 04, 2020
          </p>

          {/* Bsic Info */}
          <div className="mt-5">
            <div className="flex items-center  gap-4 ">
              <Image src={"/hm1.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Basic Information
              </p>
            </div>
            {/* INPUT AREA */}

            <div className="mt-5">
              {basicInfoData.map((data, index) => (
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

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 outline-none  rounded-[3px] border border-[#CED4DA] px-3 py-2.5 text-black"
                >
                  <option value="">Select</option>
                  <option value="Male">O+</option>
                  <option value="Female">B+</option>
                </select>
              </div>
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
    </div>
  );
};

export default HealthMatrics;
