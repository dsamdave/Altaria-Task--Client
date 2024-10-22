import Patients from "@/components/Dashboard/Patients/Patients";
import Auth from "@/components/Universal/Auth";
import Spinner from "@/components/Universal/Spinner";
import { useApiQuery } from "@/lib/useApi";
import { IUser } from "@/utilities/typings";
import React, { useState } from "react";
import NoPatientData from "./NoPatientData";

export interface PatientResponse {
  count: number;
  message: string;
  page: number;
  totalItems: number;
  patients: IUser[];
}

const Index = () => {

  const [currentPage, setCurrentPage] = useState(1);


  const { data, error, isLoading } = useApiQuery<PatientResponse>(
    ["patients-list", currentPage],
    `/patients?page=${currentPage}`,  
  );

  if(error){
    return <NoPatientData />
  }

  return (
    <div className="p-5 bg-[#ECF0FF] h-full" style={{ height: "100vh" }}>
      {data?.patients && data?.patients.length < 1 ? (
        <NoPatientData />
      ) : (
        <Patients patients={data?.patients}           currentPage={currentPage}
        setCurrentPage={setCurrentPage} totalItems={data?.totalItems} />
      )}

      <Auth />

      {isLoading && <Spinner />}
    </div>
  );
};

export default Index;
