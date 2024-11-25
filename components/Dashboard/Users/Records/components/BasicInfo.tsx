import CustomInput from "@/components/Universal/CustomInput";
import Image from "next/image";
import React from "react";

interface BasicInfoProps {
  onClose: () => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ onClose }) => {
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
          <h1 className="text-2xl text-[#1E1F20] font-bold">
            Basic Informations
          </h1>
          <p className="text-xs text-[#1E1F20] font-normal">
            Last updated: 01:29 PM Jan 04, 2020
          </p>

          {/* Bsic Info */}
          <div>
            <div className="flex items-center  gap-4 my-7 pl-6">
              <Image src={"/bi1.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Share Basic Information
              </p>
            </div>

            <Image
              src={"/mr1.png"}
              width={112}
              height={112}
              alt="icon"
              className="rounded-lg mx-auto"
            />

            {/* INPUT AREA */}

            <div className="mt-10">
              <CustomInput
                label={"Full Name"}
                placeholder={""}
                type={"text"}
                value={"Princewill Iroka"}
                onChange={() => {}}
                className2="w-full"
              />
              <CustomInput
                label={"Birthday"}
                placeholder={""}
                type={"date"}
                value={"06/07/1990"}
                onChange={() => {}}
                className="mt-3"
                className2="w-full"
              />

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Biological Sex
                </label>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 outline-none  rounded-[3px] border border-[#CED4DA] px-3 py-2.5 text-black"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Language */}
              <CustomInput
                label={"Language"}
                placeholder={""}
                type={"text"}
                value={"English, Pidgin"}
                onChange={() => {}}
                className2="w-full"
                className="mt-3"
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-[327px]">
          <div>
            <div className="flex items-center  gap-4 ">
              <Image src={"/bi2.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Contact Information
              </p>
            </div>

            {/* INPUT AREA */}

            <div className="mt-5">
              <CustomInput
                label={"Email"}
                placeholder={""}
                type={"text"}
                value={"princewill@gmail.com"}
                onChange={() => {}}
                className2="w-full"
              />
              <CustomInput
                label={"Emergency Phone"}
                placeholder={""}
                type={"tel"}
                value={"9068-926-0227"}
                onChange={() => {}}
                className="mt-3"
                className2="w-full"
              />
              <CustomInput
                label={"Address"}
                placeholder={""}
                type={"text"}
                value={"Ogunablli Str. Port Harcourt"}
                onChange={() => {}}
                className="mt-3"
                className2="w-full"
              />
            </div>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="mt-10">
            <div className="flex items-center  gap-4 ">
              <Image src={"/bi3.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Emergency Contact
              </p>
            </div>

            {/* INPUT AREA */}

            <div className="mt-5">
              <CustomInput
                label={"Contact Name"}
                placeholder={""}
                type={"text"}
                value={"Jane Foster"}
                onChange={() => {}}
                className2="w-full"
              />
              <CustomInput
                label={"Emergency Phone"}
                placeholder={""}
                type={"tel"}
                value={"9068-926-0227"}
                onChange={() => {}}
                className="mt-3"
                className2="w-full"
              />
              {/* RELATIONSHIP */}

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 outline-none  rounded-[3px] border border-[#CED4DA] px-3 py-2.5 text-black"
                >
                  <option value="">Select</option>
                  <option value="Male">Father</option>
                  <option value="Female">Wife</option>
                  <option value="Female">Sister</option>
                  <option value="Female">Brother</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
