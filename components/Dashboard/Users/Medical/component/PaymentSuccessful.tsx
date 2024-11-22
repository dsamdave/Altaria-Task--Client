import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const PaymentSuccessful = () => {
    const router = useRouter();

    const handleCancel = () =>{
        router.reload();
    }
  return (
    <div>
      <div className="w-[300px] mx-auto mt-8">
        <h1 className="text-lg text-[#1E1F20] text-center mt-8 font-bold">
        Payment Successful!
        </h1>
        <p className="text-base text-[#1E1F20] font-normal text-center my-10">
        Your request has been sent to Doctors!  Please wait a minute.
        </p>
        <Image
          src={"/done.svg"}
          width={96}
          height={96}
          alt="Sent image"
          className="mx-auto w-20 sm:w-auto  "
        />
    
        <button
          className=" text-[#9393AA] underline p-2 sm:p-3 w-full  font-semibold flex items-center justify-center mt-8"
          onClick={handleCancel}
        >
          Cancel request
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
