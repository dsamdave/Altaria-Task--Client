import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IQuestion } from "@/pages/dashboard/hospitaldb/freeHealthCare";
import { capitalizeEachWord, getPageNumbers } from "@/utilities";
import FreeHealthQuesDetailsModal from "@/pages/dashboard/hospitaldb/freeHealthCare/freeQuesDetailModal";
import FreeQuesSmallModal from "@/pages/dashboard/hospitaldb/freeHealthCare/FreeQuesSmallModal";
import { SocketBaseURL } from "@/lib/query";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import io from "socket.io-client";
import Spinner from "@/components/Universal/Spinner";



interface IQuesProp {
  questions: IQuestion[] | undefined;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalItems: number | undefined;
}

const FreeHealthCare: React.FC<IQuesProp> = ({
  questions,
  currentPage,
  setCurrentPage,
  totalItems,
}) => {
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);


  console.log({ questions });
  const tableHeadData = [
    {
      header: "S/N",
    },
    {
      header: "Name",
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
      header: "Previously Diagnosed",
    },

    {
      header: "Medications",
    },
    {
      header: "Allergies",
    },
    // {
    //   header: "Country",
    // },
    {
      header: "Date of Submission",
    },
    // {
    //   header: "Action",
    // },
  ];



  const [socket, setSocket] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [declineSession, setDeclineSession] = useState(false);
  const [freeQuesDetails, setFreeQuesDetails] = useState(false);
  const [openSmallModal, setOpenSMallModal] = useState(false);
  const [freeQuesDetail, setFreeQuesDetail] = useState<
  IQuestion | undefined
>();





  const handleOpenSMallsModal = () => {
    setOpenSMallModal(!openSmallModal);
  };

  const handleFreeQuesDetailsModal = () => {
    setFreeQuesDetails(!freeQuesDetails);
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


  const returnClickedQuestion= (id: string) => {
    if (!questions) return;

    const filteredQues = questions.filter((each) => each.id === id);

    if (filteredQues.length > 0) {
      setFreeQuesDetail(filteredQues[0]);
    } else {
      console.error("Question not found");
    }
  };


  const handleJoinChat = async () => {
    if (!currentUser?.id) return;
    setLoading(true);

    // Patient's Message
    socket.emit("chatMessage", {
      patientID: freeQuesDetail?.user?.id,
      doctorID: currentUser?.id,
      message: freeQuesDetail?.question,
      attachments: [],
      links: "",
      sender: freeQuesDetail?.user?.id,
      recipient: currentUser?.id,
    });

    // Doctor's Message
    socket.emit("chatMessage", {
      patientID: freeQuesDetail?.user?.id,
      doctorID: currentUser?.id,
      message: `Hi, I'm Dr. ${currentUser?.lastName}. Thank you for reaching out. I'll take a moment to review your question and respond with the best guidance.`,
      attachments: [],
      links: "",
      sender: currentUser?.id,
      recipient: freeQuesDetail?.user?.id,
    });

    toast.success("Greeting message sent!");

    setLoading(false);
    router.push("/dashboard/hospitaldb/messages");
  };


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
        <h1 className="text-xl text-[#1B1B29] font-semibold pt-2 ml-5">
          Free Health Care
        </h1>

        <div className="flex items-center justify-around mt-5">
          <table className="">
            <thead>
              <tr className="">
                {tableHeadData.map((item, index) => (
                  <th
                    className="text-sm text-[#747678] font-medium whitespace-nowrap  px-4"
                    key={index}
                  >
                    {item.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {questions &&
                questions.map((data, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer whitespace-nowrap hover:bg-gray-100"
                    onClick={() => {
                      handleFreeQuesDetailsModal();
                      returnClickedQuestion(data?.id);
                    }}
                  >
                    <td className="flex items-center text-[#35384D] text-xs font-medium  p-3">
                      {(currentPage - 1) * itemsPerPage + (index + 1)}.
                    </td>
                    <td
                      className=" p-3 text-center cursor-pointer "
                      // onClick={() =>
                      //   router.push(
                      //     "/dashboard/hospitaldb/freeHealthCare/conversation"
                      //   )
                      // }
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={data?.user?.avatar}
                            alt="User img"
                            width={32} 
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
                    <td
                      className={`${
                        data.someoneElse?.relationship === "myself"
                          ? "text-[#0075D9]"
                          : "text-[#F17105]"
                      } text-xs font-medium  p-3 text-center`}
                    >
                      {data.someoneElse?.relationship === "myself"
                        ? "Personal"
                        : "Someone"}
                    </td>
                    <td
                      className={`text-[#35384D] text-xs font-medium  p-3 text-center`}
                    >
                      {data.someoneElse?.firstName
                        ? `${data?.someoneElse?.firstName} ${data?.someoneElse?.lastName}`
                        : "-"}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {data?.user?.patientID}
                    </td>
                    <td className={` text-[#35384D] text-xs font-medium  p-3 text-center ${
                        data?.previouslyDiagnosed === "true"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}>
                      {data?.previouslyDiagnosed === "true" ? "Yes" : "No"}
                    </td>
                    <td
                      className={`text-xs font-medium p-3 text-center ${
                        data?.medications === "true"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {data?.medications === "true" ? "Yes" : "No"}
                    </td>
                    <td className={`text-[#35384D] text-xs font-medium  p-3 text-center ${
                        data?.allergies === "true"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}>
                      {data?.allergies === "true" ? "Yes" : "No"}
                    </td>
                    {/* <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data?.user?.country}
                  </td> */}
                    <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                      {new Date(data?.createdAt).toLocaleDateString()}
                    </td>

                    {/* <td className=" p-3 text-center flex items-center gap-2">
                    <button className=" w-[83px] rounded py-2 text-center text-sm text-white bg-[#00AA5A]">
                      Accept
                    </button>
                    <button
                      className=" w-[83px] rounded py-2 text-center text-sm text-white bg-[#F60707]"
                      onClick={handleDeclineSessionModal}
                    >
                      Decline
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
      {/* {declineSession && (
        <DeclineSessionModal onClose={handleDeclineSessionModal} />
      )} */}

      { freeQuesDetails && (
        <FreeHealthQuesDetailsModal 
          onClose={handleFreeQuesDetailsModal}
          freeQuesDetail={freeQuesDetail}
          onSmallModal={handleOpenSMallsModal}
        />
      )}

      {openSmallModal && (
        <FreeQuesSmallModal 
          onClose={handleOpenSMallsModal}
          handleJoinChat={handleJoinChat}
        />
      )}

      {loading && <Spinner />}
    </div>
  );
};

export default FreeHealthCare;
