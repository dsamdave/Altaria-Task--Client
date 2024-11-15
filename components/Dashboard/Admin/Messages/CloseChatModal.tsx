import React, { useState } from "react";
import { useRouter } from "next/router";
import CustomButton from "@/components/Universal/CustomButton";

interface CloseChatModalProps {
  onClose: () => void;
  onProceed: () => void;
}
const CloseChatModal: React.FC<CloseChatModalProps> = ({ onClose, onProceed }) => {
  const router = useRouter();

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[375px]  rounded-xl h-[301px] px-4 flex flex-col justify-center">
          <p className="text-base text-[#383838] font-normal mt-8 text-center">
            Are you sure you want to <br /> 
            <span className="font-bold">
                close this chat?

            </span>
          </p>
          <CustomButton
            className={`rounded-[5px] p-[10px] text-center 
           bg-red-600
             
          w-full border-0 text-lg font-bold text-white shrink border-transparent mt-8`}
            btnText={"Yes"}
            greenBorder={false}
            whiteBorder={false}
            onclick={onProceed}
          />
          <CustomButton
            className={`rounded-[5px] p-[10px] text-center 
           bg-white
             
          w-full border-0 text-lg font-bold text-black shrink border-transparent mt-2`}
            btnText={"No"}
            greenBorder={false}
            whiteBorder={false}
            onclick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default CloseChatModal;
