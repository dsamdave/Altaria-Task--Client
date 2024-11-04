import Spinner from "@/components/Universal/Spinner";
import Toast from "@/components/Universal/Toast";
import { useApiQuery } from "@/lib/useApi";
import { WaitlistUser } from "@/pages/dashboard/hospitaldb/waitlist";
import { getPageNumbers } from "@/utilities";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface IWaitList {
  waitlistUsers: WaitlistUser[] | undefined;
  totalItems: number | undefined;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

interface IResponse {
  message: string;

}

const WaitListUsers: React.FC<IWaitList> = ({
  waitlistUsers,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {


  const tableHeadData = [
    {
      header: "S/N",
    },
    {
      header: "Name",
    },
    // {
    //   header: "Reasons",
    // },
    {
      header: "Tel",
    },

    {
      header: "Email",
    },
    {
      header: "Location",
    },
    {
      header: "Date",
    },
  ];

  const exportData = useApiQuery<IResponse>(
    ['export-waitlist'],
    `/export-waitlist`,
    { enabled: false }
  );

  // State and functions for pagination

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




  const handleSubmit = async () => {
    exportData.refetch()
      .then((response) => {
        if (response.data?.message === "Successful") {
          toast.success("Data exported successfully");
        }
      })
      .catch((error) => {
        toast.error(
          <Toast
            title="Export failed:"
            body={error?.response?.data?.message || "Unknown error"}
          />
        );
      });
  };



  return (
    <div className="h-full ">
      <div className="bg-white rounded-xl shadow-xl p-2 ">
      <div className="w-full flex items-center justify-between mb-10">

<h1 className="text-xl text-[#1B1B29] font-semibold pt-2 px-5">
  All WaitList Users
</h1>

<button
  className="shrink p-[10px] rounded-[5px] text-center text-lg font-bold shadow-xl text-white sm:w-[300px] mt-6"
  style={{ backgroundColor: "#009900" }}
  onClick={handleSubmit}
>
  Export Waitlist Data
</button>
</div>

       

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
              {waitlistUsers &&
                waitlistUsers.map((data, index) => (
                  <tr
                    key={index}
                    //   onClick={handlePatientsDetailsModal}
                    className="hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                  >
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {(currentPage - 1) * itemsPerPage + (index + 1)}.
                    </td>
                    {/* <td className=" p-3"> */}
                    {/* <div className="flex items-center gap-3">
                      <Image
                        src={data.avatar}
                        width={24}
                        height={24}
                        alt="User img"
                      />
                      <p className="text-xs text-[#35384D] font-semibold">
                        {data.fullName}
                      </p>
                    </div> */}
                    {/* </td> */}
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.fullName}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.phoneNumber}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.email}
                    </td>

                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.location}
                    </td>
                    {/* <td
                    className={`text-[#17935C] text-xs font-medium  p-3 `}
                  >
                   New
                  </td> */}
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {new Date(data.createdAt).toLocaleDateString()}
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

      { exportData.isRefetching && <Spinner />}
    </div>
  );
};

export default WaitListUsers;
