import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";

interface DeleteModalProps {
  onClose: () => void;
  onDone: ()=> void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({ onClose, onDone }) => {
  const router = useRouter();

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[375px]  rounded-xl h-[405px] px-4 flex flex-col justify-center">
          <Image
            src={"/success.png"}
            width={120}
            height={78}
            alt="Success img"
            className="mx-auto"
          />
          <p className="text-base text-[#383838] font-normal mt-8 text-center">
            You have successfuly delete the patient
          </p>
          <CustomButton
            className={`rounded-[5px] p-[10px] text-center 
           bg-[#1E2230]
             
          w-full border-0 text-lg font-bold text-white shrink border-transparent mt-8`}
            btnText={"Done"}
            greenBorder={false}
            whiteBorder={false}
            onclick={()=>{onClose(); onDone()}}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
