import Image from "next/image";
import React, { useState } from "react";
import PatientsDetailsModal from "./PatientsDetailModal";
import DeleteModal from "./DeletModal";
import { IUser } from "@/utilities/typings";
import { capitalizeEachWord, getPageNumbers } from "@/utilities";
import { useApiQuery } from "@/lib/useApi";
import { PatientResponse } from "@/pages/dashboard/hospitaldb/patients";

interface IPatient {
  patients: IUser[] | undefined;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalItems: number | undefined;
}

const Patients: React.FC<IPatient> = ({
  patients,
  currentPage,
  setCurrentPage,
  totalItems,
}) => {

  // const { data, error, isLoading } = useApiQuery<PatientResponse>(
  //   ["patients-list"],
  //   "/patients"
  // );


  const tableHeadData = [
    {
      header: "S/N",
    },
    {
      header: "Full Name",
    },

    {
      header: "Patient ID",
    },
    {
      header: "Phone Number",
    },
    {
      header: "Email",
    },
    {
      header: "Country",
    },
    {
      header: "Reg Date",
    },
  ];

  // State for patients details and delete modal
  const [patientsDetails, setPatientsDetails] = useState(false);
  const [patientsDetail, setPatientsDetail] = useState<IUser | undefined >();
  const [isDelete, setIsDelete] = useState(false);

  const handlePatientsDetailsModal = () => {
    setPatientsDetails(!patientsDetails);
  };

  const handleDelete = () => {
    setIsDelete(!isDelete);
    setPatientsDetails(!patientsDetails);
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


  
  const returnClickedPatient = (id: string) => {
    if (!patients) return;  
  
    const filteredPatients = patients.filter((each) => each.id === id);
  
    if (filteredPatients.length > 0) {
      setPatientsDetail(filteredPatients[0]);
    } else {
      console.error("Patient not found");
    }
  };

console.log({patientsDetail})


  return (
    <div className="h-full ">
      <div className="bg-white rounded-xl shadow-xl p-2 ">
        <h1 className="text-xl text-[#1B1B29] font-semibold pt-2 px-5">All Patients</h1>

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
              {patients &&
                patients.map((data, index) => (
                  <tr
                    key={index}
                    onClick={()=> {
                      handlePatientsDetailsModal()
                      returnClickedPatient(data?.id)
                    }}
                    className=" cursor-pointer border-b border-gray-100 hover:bg-gray-100"
                  >
                    <td className="flex items-center text-[#35384D] text-xs font-medium  p-3">
                      {(currentPage - 1) * itemsPerPage + (index + 1)}.
                    </td>
                    <td className="p-3 text-center">
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
                        <p className="text-xs text-[#35384D] font-semibold">
                          {capitalizeEachWord(data.firstName)}{" "}
                          {capitalizeEachWord(data.lastName)}
                        </p>
                      </div>
                    </td>

                    {/* <td className="flex items-center gap-3 text-[#35384D] text-xs font-medium  ">
                  <Image
                        src={data.avatar}
                        width={24}
                        height={24}
                        alt="User img"
                      />

                  {capitalizeEachWord(data.firstName)}  {capitalizeEachWord(data.lastName)}
                  </td> */}
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.patientID}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.phoneNumber}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.email}
                    </td>
                    {/* <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                    {getUserCity(data.latitude, data.longitude)} 
                  </td> */}

                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                      {data.country}
                    </td>
                    <td className=" text-[#35384D] text-xs font-medium  p-3 ">
                    {new Date(data?.createdAt).toLocaleDateString()}
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
              typeof page === "string" ? ( // Check if the page is a string (i.e., "...")
                <span key={index} className="text-sm font-medium text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageClick(page)} // Only use the button if page is a number
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
      {patientsDetails && (
        <PatientsDetailsModal
          onClose={handlePatientsDetailsModal}
          onDelete={handleDelete}
          patientDetail={patientsDetail}
        />
      )}

      {isDelete && (
        <DeleteModal
          onClose={handleDelete}
          onDone={() => setPatientsDetails(false)}
        />
      )}
    </div>
  );
};

export default Patients;
