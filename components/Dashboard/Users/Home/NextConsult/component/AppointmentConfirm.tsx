import React from "react";
import Image from "next/image";

const callTypeData = [
  { img: "/l-chat.png", text: "Live Chat" },
  { img: "/v-call.png", text: "Voice Call" },
  { img: "/vi-call.png", text: "Video Call" },
];
const AppointmentConfirm = () => {
  return (
    <div className="w-full sm:w-[300px] mx-auto bg-white overflow-hidden ">
      <h3 className="text-center text-xl font-semibold mb-2">
        Appointment Confirmed
      </h3>
      <p className="text-center text-gray-500 text-sm mb-4">
        04:00 PM - 04:30 PM | Tue 5th Feb, 2020
      </p>

      <div className="flex items-center shadow-md p-4 rounded-lg mb-4">
        <Image src={"/appo.png"} width={72} height={84} alt="doctors img" />

        <div>
          <p className="font-semibold">Dr. Margaret Wells</p>
          <p className="text-[#9393AA] text-sm">Allergy & Immunology</p>
          <p className="text-[#9393AA] text-sm flex items-center gap-1">
            {" "}
            <Image
              src={"/star-r.png"}
              width={14}
              height={14}
              alt="doctors img"
            />{" "}
            <span className="text-[#1E1F20]">4.8</span> (1387 reviews)
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-[#1E1F20] font-normal">
          We will recommend you a best consultant method or you visit nearby
          EHMS facilities
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-8 mt-10">
          {callTypeData.map((data, index) => (
            <div key={index} className="w-[72px] pb-5">
              <Image src={data.img} width={72} height={72} alt="icon" />
              <p className="text-xs text-[#1E1F20] font-normal text-center mt-1">
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirm;
