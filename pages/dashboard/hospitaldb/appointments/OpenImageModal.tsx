import React from "react";
import CustomButton from "@/components/Universal/CustomButton";
import { IAppointment } from "../homedb";
import Image from "next/image";

interface OpenImageModalProps {
  onClose: () => void;
  appointmentDetail: IAppointment | undefined;
  imageIndex: number;
}

const OpenImageModal: React.FC<OpenImageModalProps> = ({
  onClose,
  appointmentDetail,
  imageIndex,
}) => {
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]"></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className="bg-white shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full sm:w-[500px] rounded-xl h-auto flex flex-col relative">
          {/* Full-width Image */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-t-xl">
            <Image
              src={appointmentDetail?.images[imageIndex] || ""}
              alt={`Image ${imageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>

          {/* Close Button positioned below the image */}
          <div className="flex justify-end p-4">
            <CustomButton
              className="rounded-[5px] p-[5px] bg-white border-0 text-lg font-bold text-red-600"
              btnText={"Close"}
              greenBorder={false}
              whiteBorder={false}
              onclick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenImageModal;
