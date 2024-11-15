// components/AppointmentConfirmation.js
import Image from "next/image";
import React from "react";

const AppointmentConfirmation = () => {
  return (
    <div className="w-full sm:w-[300px] mx-auto bg-white overflow-hidden  my-10">
      <h3 className="text-center text-xl font-semibold mb-2">
        Appointment Confirmed
      </h3>
      <p className="text-center text-gray-500 text-sm mb-4">
        04:00 PM - 04:30 PM | Tue 5th Feb, 2020
      </p>

      <div className="flex items-center shadow-md p-4 rounded-lg mb-4">
         <Image src={'/appo.png'} width={72} height={84} alt="doctors img" />
       
        <div>
          <p className="font-semibold">Dr. Margaret Wells</p>
          <p className="text-[#9393AA] text-sm">Allergy & Immunology</p>
          <p className="text-[#9393AA] text-sm flex items-center gap-1">  <Image src={'/star-r.png'} width={14} height={14} alt="doctors img" /> <span className="text-[#1E1F20]">4.8</span> (1387 reviews)</p>
        </div>
      </div>

      <div className="bg-white p-4  mb-6">
        <h1 className="text-base text-[#1E1F20] font-bold border-b border-gray-200 pb-3">Appointment type</h1>
        <p className="text-gray-600 text-center mt-2">
          Your appointment has been confirmed, and you will be meeting with the
          above Doctor on the above time
        </p>
      </div>

      <div className="flex space-x-4">
        <button className="flex-1  text-[#9393AA] py-3 rounded-lg font-semibold border border-[#E0E0E0]">
          Cancel
        </button>
        <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold">
          Join the Call
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
