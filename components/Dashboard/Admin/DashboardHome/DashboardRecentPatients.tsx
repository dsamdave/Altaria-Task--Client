import Image from "next/image";
import React, { useState } from "react";
import AppointmentDetailsModal from "./AppointmentRequest/AppointmentDetailsModal";
import { IUser } from "@/utilities/typings";
import { capitalizeEachWord } from "@/utilities";
import { useRouter } from "next/router";

interface IPatient {
  patients: IUser[] | undefined;
}

const DashboardRecentPatients: React.FC<IPatient> = ({ patients }) => {

  const router = useRouter();


  const tableHeadData = [
    {
      header: "Full Name",
    },

    {
      header: "Patient ID",
    },
    {
      header: "Phone Number",
    },
    // {
    //   header: "Email",
    // },
    {
      header: "Country",
    },
    {
      header: "Reg Date",
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
      <div className="bg-white rounded-xl shadow-xl p-2 max-w-[560px] overflow-x-scroll">
        <div className="flex items-center justify-around mt-5">
          <table className="">
            <thead>
              <tr className="">
                {tableHeadData.map((item, index) => (
                  <th
                    className="text-sm text-[#747678] font-medium px-4 whitespace-nowrap"
                    key={index}
                  >
                    {item.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="">
              {patients &&
                patients.map((data, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer border-b border-gray-100 hover:bg-gray-100"
                    onClick={()=> router.push("/dashboard/hospitaldb/patients")}
                  >
                    <td className="p-3 w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={data?.avatar}
                            alt="User img"
                            width={32} 
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-xs text-[#35384D] font-semibold whitespace-nowrap">
                          {capitalizeEachWord(data.firstName)}{" "}
                          {capitalizeEachWord(data.lastName)}
                        </p>
                      </div>
                    </td>

                    <td className="text-[#35384D] text-xs font-medium p-3 whitespace-nowrap">
                      {data.patientID}
                    </td>
                    <td className="text-[#35384D] text-xs font-medium p-3 whitespace-nowrap">
                      {data.phoneNumber}
                    </td>

                    <td className="text-[#35384D] text-xs font-medium p-3 whitespace-nowrap">
                      {data.country}
                    </td>
                    <td className="text-[#35384D] text-xs font-medium p-3 whitespace-nowrap">
                      {new Date(data?.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecentPatients;
