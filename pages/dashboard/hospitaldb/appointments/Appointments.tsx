import Image from "next/image";
import React, { useState } from "react";

import { IUser } from "@/utilities/typings";
import { capitalizeEachWord, getPageNumbers } from "@/utilities";
import { useApiQuery } from "@/lib/useApi";
import { PatientResponse } from "@/pages/dashboard/hospitaldb/patients";
import { IAppointment } from "../homedb";
import AppointmentDetailsModal from "@/components/Dashboard/DashboardHome/AppointmentRequest/AppointmentDetailsModal";
import AppointmentsDetailsModal from "./AppointmentDetailsModal";
import dayjs from "dayjs";
import AppointmentSmallModal from "./SmallModal";

interface IPatient {
  appointments: IAppointment[] | undefined;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalItems: number | undefined;
}

const Appointments: React.FC<IPatient> = ({
  appointments,
  currentPage,
  setCurrentPage,
  totalItems,
}) => {
  const tableHeadData = [
    {
      header: "S/N",
    },
    {
      header: "Booking User",
    },
    {
      header: "Category",
    },
    {
      header: "Patient Name",
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
      header: "Date of Booking",
    },
    {
      header: "Actions",
    },
  ];

  const [appointmentDetails, setAppointmentDetails] = useState(false);
  const [openSmallModal, setOpenSMallModal] = useState(false);
  const [appointmentDetail, setAppointmentsDetail] = useState<
    IAppointment | undefined
  >();
  const [isDelete, setIsDelete] = useState(false);

  const handleOpenSMallsModal = () => {
    setOpenSMallModal(!openSmallModal);
  };

  const handleAppointmentDetailsModal = () => {
    setAppointmentDetails(!appointmentDetails);
  };

  const handleDelete = () => {
    setIsDelete(!isDelete);
    setAppointmentDetails(!appointmentDetails);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(
    totalItems ? totalItems / itemsPerPage : 0 / itemsPerPage
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const returnClickedBooking = (id: string) => {
    if (!appointments) return;

    const filteredAppoitment = appointments.filter((each) => each.id === id);

    if (filteredAppoitment.length > 0) {
      setAppointmentsDetail(filteredAppoitment[0]);
    } else {
      console.error("Booking not found");
    }
  };

  return (
    <div className="h-full ">
      <div className="bg-white rounded-xl shadow-xl p-2 ">
        <h1 className="text-xl text-[#1B1B29] font-semibold pt-2 px-5">
          All Appointments
        </h1>

        <div className=" mt-5">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
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
              {appointments &&
                appointments?.map((data, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      handleAppointmentDetailsModal();
                      returnClickedBooking(data?.id);
                    }}
                    className=" cursor-pointer whitespace-nowrap hover:bg-gray-100"
                  >
                    <td className="flex items-center text-[#35384D] text-xs font-medium  p-3">
                      {(currentPage - 1) * itemsPerPage + (index + 1)}.
                    </td>
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
                      {data.category === "someone"
                        ? `${capitalizeEachWord(
                            data?.someOneDetails.firstName
                          )} ${capitalizeEachWord(
                            data?.someOneDetails.lastName
                          )}`
                        : "-"}
                    </td>
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
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {new Date(data?.updatedAt).toLocaleDateString()}
                    </td>
                    <td className=" p-3 text-center flex items-center gap-2">
                      <button className="shrink">
                        <Image
                          src={"/confirm.png"}
                          width={20}
                          height={20}
                          alt="Confirm icon"
                        />
                      </button>
                      <button className="shrink">
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

        {/* Pagination */}
        <div className="flex items-center justify-center px-7 py-3 gap-3">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className="shrink px-1 py-2.5 text-sm text-[#778CA2] font-normal"
          >
            {"<"} Prev
          </button>

          <div className="flex gap-2">
            {pageNumbers.map((page, index) =>
              typeof page === "string" ? (
                <span key={index} className="text-sm font-medium text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageClick(page)}
                  className={`shrink w-12 p-2.5 rounded-lg ${
                    currentPage === page
                      ? "bg-[#1E2230] text-sm font-medium text-white"
                      : "text-sm font-medium text-gray-500"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <div className="shrink flex items-center gap-4 py-4">
            <button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
              className="px-1 py-2.5 text-sm text-[#778CA2] font-normal"
            >
              Next {">"}
            </button>
          </div>
        </div>
        {/* Pagination ends here */}
      </div>
      {appointmentDetails && (
        <AppointmentsDetailsModal
          onClose={handleAppointmentDetailsModal}
          onDelete={handleDelete}
          appointmentDetail={appointmentDetail}
          onSmallModal={handleOpenSMallsModal}
        />
      )}

      {openSmallModal && (
        <AppointmentSmallModal onClose={handleOpenSMallsModal} onProceed={handleOpenSMallsModal} />
      )}

      {/* {isDelete && (
        <DeleteModal
          onClose={handleDelete}
          onDone={() => setPatientsDetails(false)}
        />
      )} */}
    </div>
  );
};

export default Appointments;
