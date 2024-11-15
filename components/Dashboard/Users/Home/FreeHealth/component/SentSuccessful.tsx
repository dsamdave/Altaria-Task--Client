import Image from "next/image";
import React from "react";


interface SentSuccessfulProp{
  onClose: ()=>void;
}

const SentSuccessful:React.FC<SentSuccessfulProp> = ({onClose}) => {
  return (
        <div className="w-[300px] mx-auto mt-8">
      <Image src={"/ask-success.png"} width={160} height={160} alt="Sent image" className="mx-auto w-20 sm:w-auto mt-10 sm:mt-0" />
      <h1 className="text-xl text-[#1E1F20] text-center mt-8 font-bold">Sent successfully!</h1>
      <p className="text-base text-[#1E1F20] font-normal text-center mt-5">
      Your free health question has been recorded. A doctor will review it and respond to you shortly.
      </p>
      {/* <button className="text-[#9393AA] border border-[#E0E0E0] p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center mt-8" >
      Check Health Feed
      </button> */}
      <button className="bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center mt-8" onClick={onClose} >
      Go to Home Dashboard
      </button>
    </div>

  );
};

export default SentSuccessful;
