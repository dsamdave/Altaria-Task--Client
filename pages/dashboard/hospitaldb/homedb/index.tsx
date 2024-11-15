import DashboardAppointmentRequest from "@/components/Dashboard/Admin/DashboardHome/DashboardAppointmentRequest";
import AppointmentRequest from "@/components/Dashboard/Admin/DashboardHome/DashboardAppointmentRequest";
import DashboardRecentPatients from "@/components/Dashboard/Admin/DashboardHome/DashboardRecentPatients";
import RecentPatients from "@/components/Dashboard/Admin/DashboardHome/RecentPatients/RecentPatients";
import Statistics from "@/components/Dashboard/Admin/DashboardHome/Statistics";
import Auth from "@/components/Universal/Auth";
import Spinner from "@/components/Universal/Spinner";
import { useApiQuery } from "@/lib/useApi";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { PatientResponse } from "../patients";
import { IUser } from "@/utilities/typings";




interface SomeOneDetails {
  dOB: string;
  firstName: string;
  gender: string;
  lastName: string;
  patientName: string;
  phone: string;
}


export interface IAppointment {
  appointMentNature?: string;
  appointMentType?: string;
  category: string;
  createdAt: string;
  date: string;
  forSomeOne: boolean;
  groupNumber: string;
  id: string;
  images: string[]; 
  insuranceProvider: string;
  patientID: string;
  patientType: string;
  policyNumber: string;
  reason: string;
  meetingLink: string;
  someOneDetails: SomeOneDetails;
  status: string;
  time: string;
  updatedAt: string;
  user: IUser;
}

export interface IAppointmentsResponse {
  count: number;
  message: string;
  page: number;
  totalItems: number;
  appointments: IAppointment[];
  
}

interface AppointmentStats {
  labels: string[];
  acceptedCounts: number[];
  declinedCounts: number[];
  concludedCounts: number[];
}


export interface IAnalyticsDetails {
  totalAppointments: number;
  totalDoctors: number;
  totalFreeHealthQuestions: number;
  totalPatients: number;
  appointments: AppointmentStats
}

interface IAnalyticsResponse {
  details: IAnalyticsDetails;
  message: string;
}




const Index = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(0);

  const { data, error, isLoading } = useApiQuery<PatientResponse>(
    ["patients-list", 1],
    `/patients?page=${1}&limit=${4}`,  
  );

  const { data: dataa, error: errorr, isLoading: loading } = useApiQuery<IAppointmentsResponse>(
    ["admin-appointments-next"],
    "/appointments"
  );

  const { data: dataaa, error: erorrr, isLoading: loadingg } = useApiQuery<IAnalyticsResponse>(
    ["analytics"],
    `/analytics`,  
  );


  const handleToggle = (index: number) => {
    setToggle(index);
  };




  return (
    <div className="p-5 bg-[#ECF0FF] h-full">
      <div>
        <Statistics analytics={dataaa?.details} />
        <div className="flex items-center justify-between gap-5"
        >
          <div className="bg-white mt-10 rounded-xl flex-1">
            <div className="flex items-center justify-between px-5 py-3 ">
              <h1 className="text-base text-black font-semibold">
                Appointment request
              </h1>
              <button
                className="shrink text-base text-black font-bold"
                onClick={() =>
                  router.push("/dashboard/hospitaldb/appointments")
                }
              >
                See all
              </button>
            </div>
            <DashboardAppointmentRequest appointments={dataa?.appointments}/>
          </div>
          <div className="bg-white mt-10 rounded-xl flex-1">
            <div className="flex items-center justify-between px-5 py-3 ">
              <h1 className="text-base text-black font-semibold">
                Recent Patients
              </h1>
              <button
                className=" shrink text-base text-black font-bold"
                onClick={() =>
                  router.push("/dashboard/hospitaldb/patients")
                  // http://localhost:3000/dashboard/hospitaldb/patients
                }
              >
                See all
              </button>
            </div>
            <DashboardRecentPatients 
            patients={data?.patients} 
            />
          </div>
        </div>
      </div>

      <Auth />

      { loading || isLoading || loadingg && <Spinner /> }

      {/* Appointment request */}
      <div>
        {toggle === 1 && <AppointmentRequest appointments={dataa?.appointments}/>}
        {toggle === 2 && <RecentPatients />}
      </div>
    </div>
  );
};

export default Index;
