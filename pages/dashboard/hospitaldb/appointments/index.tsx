import Patients from "@/components/Dashboard/Admin/Patients/Patients";
import Auth from "@/components/Universal/Auth";
import Spinner from "@/components/Universal/Spinner";
import { useApiQuery } from "@/lib/useApi";
import { IUser } from "@/utilities/typings";
import React, { useState } from "react";
import NoAppointmentData from "./NoAppointments";
import Appointments from "./Appointments";
import { IAppointmentsResponse } from "../homedb";
// import NoPatientData from "./NoPatientData";

export interface PatientResponse {
  count: number;
  message: string;
  page: number;
  totalItems: number;
  patients: IUser[];
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useApiQuery<IAppointmentsResponse>(
    ["admin-appointments-next", currentPage],
    `/appointments?page=${currentPage}`
  );

  if(error){
    return <NoAppointmentData />
  }

  return (
    <div className="p-5 bg-[#ECF0FF] h-full" style={{ height: "100vh" }}>
      {data?.appointments && data?.appointments.length < 1 ? (
        <NoAppointmentData />
      ) : (
        <Appointments
          appointments={data?.appointments}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={data?.totalItems}
        />
      )}

      <Auth />

      {isLoading && <Spinner />}
    </div>
  );
};

export default Index;
