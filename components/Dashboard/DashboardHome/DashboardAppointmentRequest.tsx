import Image from "next/image";
import React, { useState } from "react";
import AppointmentDetailsModal from "./AppointmentRequest/AppointmentDetailsModal";

const DashboardAppointmentRequest = () => {
  const tableHeadData = [
    {
      header: "Name",
    },
    {
      header: "Category",
    },
    {
      header: "Name-Category ",
    },
    {
      header: "Reasons",
    },
    {
      header: "Patient ID",
    },
    {
      header: "Date-Time",
    },
    {
      header: "Location",
    },
    {
      header: "Type",
    },
    {
      header: "Action",
    },
  ];

  const tableData = [
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      category: "Personal",
      nameCategory: "-",
      reasons: "Headache ",
      patientId: "152-660-5591",
      dateTime: "04/03/2020 - 10 AM",
      location: "Johannesburg",
      type: "New user",
      categoryColor: "text-[#0075D9]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      category: "Someone",
      nameCategory: "Eunice Smith (Wife)",
      reasons: "Headache ",
      patientId: "152-660-5591",
      dateTime: "04/03/2020 - 10 AM",
      location: "Johannesburg",
      type: "New user",
      categoryColor: "text-[#F17105]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      category: "Personal",
      nameCategory: "-",
      reasons: "Headache ",
      patientId: "152-660-5591",
      dateTime: "04/03/2020 - 10 AM",
      location: "Johannesburg",
      type: "New user",
      categoryColor: "text-[#0075D9]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      category: "Someone",
      nameCategory: "Eunice Smith (Wife)",
      reasons: "Headache ",
      patientId: "152-660-5591",
      dateTime: "04/03/2020 - 10 AM",
      location: "Johannesburg",
      type: "New user",
      categoryColor: "text-[#F17105]",
    },
  ];



  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-xl p-2 max-w-[637px] overflow-x-scroll">
        

        <div className="flex items-center justify-around mt-5">
          <table className="">
            <thead>
              <tr className="">
                {tableHeadData.map((item, index) => (
                  <th
                    className="text-sm text-[#747678] font-medium  px-4"
                    key={index}
                  >
                    {item.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className=" cursor-pointer"
                >
                  <td className=" p-3 text-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src={data.Img}
                        width={24}
                        height={24}
                        alt="User img"
                      />
                      <p className="text-xs text-[#35384D] font-semibold">
                        {data.name}
                      </p>
                    </div>
                  </td>
                  <td
                    className={`${data.categoryColor} text-xs font-medium  p-3 text-center`}
                  >
                    {data.category}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.nameCategory}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.reasons}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.patientId}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.dateTime}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.location}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center ">
                    {data.type}
                  </td>
                  <td className=" p-3 text-center flex items-center gap-2">
                    <button>
                      <Image
                        src={"/confirm.png"}
                        width={20}
                        height={20}
                        alt="Confirm icon"
                      />
                    </button>
                    <button>
                      <Image
                        src={"/delete.png"}
                        width={20}
                        height={20}
                        alt="Delete icon"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {tableHeadData.map((data, index)=>(
                    <h1 key={index} className='text-sm text-[#747678] font-medium'>{data.header}</h1>
                ))} */}
        </div>

        {/* Table Content */}
        {/* <div className="flex items-center justify-between">
      


          

          <div>
        
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardAppointmentRequest;
