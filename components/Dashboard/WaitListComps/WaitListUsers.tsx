import Image from "next/image";
import React, { useState } from "react";

const WaitListUsers = () => {
  const tableHeadData = [
    {
      header: "Name",
    },
    {
      header: "Reasons",
    },
    {
      header: "Patient ID",
    },
    {
      header: "Signup Date",
    },
    {
      header: "Location",
    },
    {
      header: "Status",
    },
    {
      header: "Last Seen",
    },
  ];

  const tableData = [
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Active",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#17935C]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Inactive",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#F60707]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Active",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#17935C]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Inactive",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#F60707]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Active",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#17935C]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Inactive",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#F60707]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Active",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#17935C]",
    },
    {
      Img: "/avatar.png",
      name: " Daniel Smith",
      reasons: "Headache ",
      patientId: "152-660-5591",
      signUpDate: "04/03/2020 ",
      location: "Johannesburg",
      status: "Inactive",
      lastSeen: "04/03/2020 ",
      statusColor: "text-[#F60707]",
    },
  ];

  // State for patients details and delete modal
  const [patientsDetails, setPatientsDetails] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handlePatientsDetailsModal = () => {
    setPatientsDetails(!patientsDetails);
  };

  const handleDelete = ()=>{
    setIsDelete(!isDelete)
    setPatientsDetails(!patientsDetails)
  }



  // State and functions for pagination
  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage = 5;
  const totalPages = Math.ceil(tableData.length / productPerPage);

  // Pagination range logic with ellipsis
  const paginationRange = () => {
    const range: (number | string)[] = [];
    const showEllipsis = 1;
    if (totalPages <= showEllipsis + 2) {
      // Show all pages if total pages is less than or equal to 6
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else if (currentPage <= showEllipsis) {
      // Show the first few pages, an ellipsis, and the last page
      for (let i = 1; i <= showEllipsis; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    } else if (currentPage > totalPages - showEllipsis) {
      // Show the first page, an ellipsis, and the last few pages
      range.push(1);
      range.push("...");
      for (let i = totalPages - showEllipsis + 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Show the first page, an ellipsis, a few pages around the current page, an ellipsis, and the last page
      range.push(1);
      range.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    }
    return range;
  };

  // Sliced data for current page
  const allPatients = tableData.slice(
    (currentPage - 1) * productPerPage,
    currentPage * productPerPage
  );

  // Handle page change
  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  return (
    <div className="h-full ">
      <div className="bg-white rounded-xl shadow-xl p-2 ">
        <h1 className="text-xl text-[#1B1B29] font-semibold pt-2">WaitList Users</h1>

        <div className=" mt-5">
          <table className="w-full">
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
              {allPatients.map((data, index) => (
                <tr
                  key={index}
                //   onClick={handlePatientsDetailsModal}
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
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.reasons}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.patientId}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.signUpDate}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.location}
                  </td>
                  <td
                    className={`${data.statusColor} text-xs font-medium  p-3 text-center`}
                  >
                    {data.status}
                  </td>
                  <td className=" text-[#35384D] text-xs font-medium  p-3 text-center">
                    {data.lastSeen}
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
          {/* <div className='text-gray-500 text-sm font-bold'>
            Page {currentPage} of {totalPages}
          </div> */}

          <button
            disabled={currentPage === 1}
            className="px-1 py-2.5 text-sm text-[#778CA2] font-normal "
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {"<"} Prev
          </button>

          <div className="flex gap-2">
            {paginationRange().map((page, index) => (
              <button
                key={index}
                className={`w-12 p-2.5 rounded-lg text-white ${
                  currentPage === page
                    ? "bg-[#1E2230] text-sm font-medium "
                    : "   text-sm font-medium text-black"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 py-4">
            <button
              disabled={currentPage === totalPages}
              className="px-1 py-2.5 text-sm text-[#778CA2] font-normal "
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next {">"}
            </button>
          </div>
        </div>
        {/* Pagination ends here */}
      </div>

    </div>
  );
};

export default WaitListUsers;
