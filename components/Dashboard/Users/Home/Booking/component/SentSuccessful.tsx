import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";


interface SentSuccessfulProp{
  onClose: ()=>void;
}

const SentSuccessful:React.FC<SentSuccessfulProp> = ({onClose}) => {

  const router = useRouter()
  return (
        <div className="w-[300px] mx-auto mt-8">
      <Image src={"/sent-img.png"} width={160} height={160} alt="Sent image" className="mx-auto w-20 sm:w-auto mt-10 sm:mt-0" />
      <h1 className="text-xl text-[#1E1F20] text-center mt-8">Booking successful!</h1>
      <p className="text-base text-[#1E1F20] font-normal text-center mt-5">
        Your appointment booking was successfully completed
      </p>
      <button className="shrink bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center mt-8" onClick={onClose}>
        Go Home
      </button>
    </div>

  );
};

export default SentSuccessful;
