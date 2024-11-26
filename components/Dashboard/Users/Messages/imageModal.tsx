import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";


interface ImageModalProps {
  onClose: () => void;
  imgUrl: string
}
const ImageModal: React.FC<ImageModalProps> = ({ onClose, imgUrl }) => {

  
  





  return (
<div className="relative z-50">
  <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]"></div>
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
    <div className="bg-white shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full sm:w-[630px] lg:w-[980px] rounded-[14px] h-[550px] sm:h-[550px] overflow-y-scroll my-8 hide-scrollbar relative">
      <div className="px-4 md:px-0">
        <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 relative">
          {/* Close Icon */}
          <div className="absolute top-5 right-5 z-50">
            <CloseFillIcon
              size={30}
              className="text-red-500 cursor-pointer"
              onClick={onClose}
            />
          </div>

          {/* Modal Content */}
          <div className="flex items-center justify-center h-[450px]">
            <Image
              src={imgUrl}
              alt="attached"
              width={400} // Set a fixed width
              height={300} // Set a fixed height
              className=" rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default ImageModal;
