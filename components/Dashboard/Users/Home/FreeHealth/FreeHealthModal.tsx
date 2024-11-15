import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import AskFreeQuestion from "./component/AskFreeQuestion";
import SentSuccessful from "./component/SentSuccessful";


interface FreeHealthModalProps {
  onClose: () => void;
}
const FreeHealthModal: React.FC<FreeHealthModalProps> = ({ onClose }) => {
  const router = useRouter();

  const [askFreeHealtQuestion, setAskFreeHealthQuestion] = useState(true);
  const [successfull, setSuccessfull] = useState(false);

  const handleAskFreeHealthQuestion = () =>{
    setAskFreeHealthQuestion(!askFreeHealtQuestion)
  }
  

  const handleSuccessfull = ()=>{
    setSuccessfull(!successfull);
    setAskFreeHealthQuestion(false)
  }

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
      <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[550px] sm:h-[550px] lg:max-h-[550px] overflow-y-scroll  my-8 hide-scrollbar">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
                <h1 className="text-lg lg:text-2xl text-black font-bold">
                Ask Free Question
                </h1>

                <CloseFillIcon
                  size={50}
                  className="text-red-500 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* MODAL CONTENT */}
              <div className="flex items-center justify-center mt-5">
            {askFreeHealtQuestion&&<AskFreeQuestion onSuccess={handleSuccessfull}/>}
            {successfull && <SentSuccessful onClose={onClose} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeHealthModal;
