import { IAppointment } from "@/pages/dashboard/hospitaldb/homedb";
import { capitalizeEachWord } from "@/utilities";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface IAppointmentProp {
  appointments: IAppointment[] | undefined;
}

const DashboardAppointmentRequest: React.FC<IAppointmentProp> = ({
  appointments,
}) => {

  const router = useRouter();


  const tableHeadData = [
    {
      header: "Booking User",
    },
    {
      header: "Category",
    },
    {
      header: "Patient Name",
    },
    // {
    //   header: "Reasons",
    // },
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
      header: "Status",
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

  console.log({ appointments });

  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-xl p-2 max-w-[560px] overflow-x-scroll">
        <div className="flex items-center justify-around mt-5">
          <table className="">
            <thead>
              <tr className="">
                {tableHeadData.map((item, index) => (
                  <th
                    className="text-sm text-[#747678] font-medium  px-4 whitespace-nowrap"
                    key={index}
                  >
                    {item.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {appointments &&
                appointments?.slice(0, 4).map((data, index) => (
                  <tr key={index} 
                  className="hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  onClick={()=> router.push("/dashboard/hospitaldb/appointments")}
                  >
                    <td className=" p-3 text-center ">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={data?.user?.avatar}
                            alt="User img"
                            width={32} // Slightly larger to ensure quality
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-xs text-[#35384D] font-semibold">
                          {capitalizeEachWord(data?.user?.firstName)}{" "}
                          {capitalizeEachWord(data?.user?.lastName)}
                        </p>
                      </div>
                    </td>
                    {/* ${data.categoryColor} personal */}
                    <td
                      className={` ${
                        data.category === "someone"
                          ? "text-[#F17105]"
                          : "text-[#0075D9]"
                      }
                      text-xs font-medium  p-3 text-center`}
                    >
                      {data?.category}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {
                        data.category === "someone"
                        ? `${capitalizeEachWord(data?.someOneDetails.firstName)} ${capitalizeEachWord(data?.someOneDetails.lastName)}`
                        : "-"
                      }
                    </td>
                    {/* <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {data?.reason}
                    </td> */}
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {data?.patientID}
                    </td>
                    <td
                      className={`text-[#35384D] text-xs font-medium  p-3 text-center ${
                        dayjs().isAfter(dayjs(data?.date))
                          ? "text-[#FF3333]"
                          : "text-[#10B981]"
                      }`}
                    >
                      {new Date(data?.date).toLocaleDateString()} - {data?.time}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {data?.user?.country}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center ">
                      {data?.patientType}
                    </td>
                    <td
                      className={`text-xs font-medium p-3 text-center ${
                        data?.status === "Concluded"
                          ? "text-green-500"
                          : data?.status === "Declined"
                          ? "text-red-500"
                          : data?.status === "Pending"
                          ? "text-yellow-500"
                          : data?.status === "Accepted"
                          ? "text-blue-500"
                          : "text-[#35384D]"
                      }`}
                    >
                      {data?.status}
                    </td>
                    {/* <td className=" p-3 text-center flex items-center gap-2">
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
                  </td> */}
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
