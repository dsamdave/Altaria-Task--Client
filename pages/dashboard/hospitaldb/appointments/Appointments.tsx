import Image from "next/image";
import React, { useEffect, useState } from "react";

import { IUser } from "@/utilities/typings";
import { capitalizeEachWord, getPageNumbers } from "@/utilities";
import { useApiMutation, useApiQuery } from "@/lib/useApi";
import { PatientResponse } from "@/pages/dashboard/hospitaldb/patients";
import { IAppointment } from "../homedb";
import AppointmentDetailsModal from "@/components/Dashboard/Admin/DashboardHome/AppointmentRequest/AppointmentDetailsModal";
import AppointmentsDetailsModal from "./AppointmentDetailsModal";
import dayjs from "dayjs";
import AppointmentSmallModal from "./SmallModal";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";
import io from "socket.io-client";
import { SocketBaseURL } from "@/lib/query";
import { useQueryClient } from "@tanstack/react-query";

interface IChangeAppointmentResponse {
  message: string;
}

interface IChangeAPPointmentStatusPayload {
  status: string;
}

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
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);

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
      header: "Status",
    },
    {
      header: "Actions",
    },
  ];

  const [socket, setSocket] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(false);
  const [openSmallModal, setOpenSMallModal] = useState(false);
  const [appointmentDetail, setAppointmentsDetail] = useState<
    IAppointment | undefined
  >();
  const [actionIndex, setActionIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const concludeAppointment = useApiMutation<
    IChangeAppointmentResponse,
    IChangeAPPointmentStatusPayload
  >(`/update-appointments-status/${appointmentDetail?.id}`);

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

  const handleJoinChat = async () => {
    if (!currentUser?.id) return;
    setLoading(true);

    socket.emit("chatMessage", {
      patientID: appointmentDetail?.user?.id,
      doctorID: currentUser?.id,
      message: `Hello, thank you for reaching out. This is Dr. ${currentUser?.lastName}. How can I assist you today?`,
      attachments: [],
      links: "",
      sender: currentUser?.id,
      recipient: appointmentDetail?.user?.id,
    });

    toast.success("Greeting message sent!");

    setLoading(false);
    router.push("/dashboard/hospitaldb/messages");
  };

  const handleJoinCall = async () => {
    console.log("Joining Call...");
  
    if (appointmentDetail?.meetingLink) {
      window.open(appointmentDetail.meetingLink, "_blank");
    }
  
    handleOpenSMallsModal();
  };

  const queryClient = useQueryClient();
  const handleCloseAppointment = async (status: string) => {
    if (!appointmentDetail?.id) return;

    concludeAppointment.mutate(
      { status },
      {
        onSuccess: (data: IChangeAppointmentResponse) => {
          if (data?.message === "Successful") {
            toast.success("Appointment Concluded!");
            
            // Invalidate the 'admin-appointments-next' query to trigger a refetch
            queryClient.invalidateQueries({ queryKey: ["admin-appointments-next"] });

            handleAppointmentDetailsModal();
            handleOpenSMallsModal();
          } else {
            handleAppointmentDetailsModal();
            handleOpenSMallsModal();
          }
        },
        onError: (error: any) => {
          toast.error(() => (
            <Toast
              title="Failed:"
              body={error?.response?.data?.message || "Unknown error"}
            />
          ));
        },
      }
    );
  };

  // console.log({appointmentDetail})

  useEffect(() => {
    const socketInstance = io(SocketBaseURL, {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      timeout: 10000,
    });
    setSocket(socketInstance);
  }, [currentUser?.id]);

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
                          : "text-green-500"
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
                    <td className=" p-3 text-center flex items-center gap-2">
                      <button className="shrink"
                      onClick={() => {
                        handleOpenSMallsModal()
                        setActionIndex(4)
                      } }
                      >
                        <Image
                          src={"/confirm.png"}
                          width={20}
                          height={20}
                          alt="Confirm icon"
                        />
                      </button>
                      <button className="shrink"
                       onClick={() => {
                        handleOpenSMallsModal()
                        setActionIndex(5)
                      } }
                      >
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
            className="shrink px-1 py-2.5 text-sm text-[#778CA2] font-normal hover:text-[#35384D]"
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
                      : "text-sm font-medium text-gray-500 hover:text-[#35384D]"
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
              className="px-1 py-2.5 text-sm text-[#778CA2] font-normal hover:text-[#35384D]"
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
          setActionIndex={setActionIndex}
        />
      )}

      {openSmallModal && (
        <AppointmentSmallModal
          onClose={handleOpenSMallsModal}
          actionIndex={actionIndex}
          handleJoinChat={handleJoinChat}
          handleJoinCall={handleJoinCall}
          handleCloseAppointment={handleCloseAppointment}
        />
      )}

      {loading || (concludeAppointment.isPending && <Spinner />)}
    </div>
  );
};

export default Appointments;
