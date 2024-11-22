// @ts-nocheck

import Spinner from "@/components/Universal/Spinner";
import { useApiQuery } from "@/lib/useApi";
import { formatDateWithDay } from "@/utilities";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles for date picker

interface ConsultationProps {
  onDetails: (id: string) => void;
  onPastDetails: () => void;
  onToggleChange: (text: string) => void; // New callback prop
}

// import DocImg from "/expatdoc_logo.svg";

// Next Consult Data
const nextData = [
  {
    imgSrc: "/con3.svg",
    drName: "Enyinda Amadi",
    appointment: "Live Chat",
    appointmentStatus: "Still in Progress",
    statusColor: "text-[#2574FF]",
    time: "19:59 mins left",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Wike Emmanuel",
    appointment: "Appointment",
    appointmentStatus: "Accepted",
    statusColor: "text-[#12B2B3]",
    time: "08:00 PM - 08:30 PM",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Precious Harry",
    appointment: "Voice Call",
    appointmentStatus: "Unconfirmed",
    statusColor: "text-[#FE9870]",
    time: "4 hours left to confirm",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Precious Harry",
    appointment: "Voice Call",
    appointmentStatus: "Unconfirmed",
    statusColor: "text-[#FE9870]",
    time: "4 hours left to confirm",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Precious Harry",
    appointment: "Voice Call",
    appointmentStatus: "Unconfirmed",
    statusColor: "text-[#FE9870]",
    time: "4 hours left to confirm",
  },
];

// Past Consult Data
const pastData = [
  {
    imgSrc: "/con3.svg",
    drName: "Frank Olagbegi",
    appointment: "Video Call",
    appointmentStatus: "Completed",
    statusColor: "text-[#0EAD69]",
    time: "05:00 PM - 05:28 PM",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Ethel Omoge",
    appointment: "Message",
    appointmentStatus: "Completed",
    statusColor: "text-[#0EAD69]",
    time: "Message sent at 1:24 PM",
  },
  {
    imgSrc: "/con3.svg",
    drName: "Kade Ayomikun",
    appointment: "Voice Call",
    appointmentStatus: "Canceled",
    statusColor: "text-[#FA4169]",
    time: "09:30 AM - 10:00 AM",
  },
];

const Consultations: React.FC<ConsultationProps> = ({
  onDetails,
  onPastDetails,
  onToggleChange,
}) => {
  const { data, error, isLoading } = useApiQuery<AppointmentResponse>(
    ["next-appointments"],
    `/appointments/next`
  );
  const {
    data: dataa,
    error: errorr,
    isLoading: isLoadingg,
  } = useApiQuery<AppointmentResponse>(
    ["past-appointments"],
    `/appointments/past`
  );

  // console.log({ data });

  const toggleOptions = [
    { title: "Next Consults" },
    { title: "Past Consults" },
  ];

  const [toggle, setToggle] = useState<number | null>(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleToggle = (index: number) => {
    const newIndex = toggle === index ? null : index;
    setToggle(index);
    // console.log({ index });

    // Call onToggleChange with the corresponding title
    onToggleChange(index === 1 ? "Past Appointments" : "Next Appointments");
  };

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="w-full sm:w-[375px] p-2">
      {/* TOP SECTION */}
     
   
      <div className="flex items-center justify-between">
        {toggleOptions.map((data, index) => (
          <button
            key={index}
            className={`shrink text-lg sm:text-2xl font-semibold ${
              toggle === index ? "text-[#1E1F20]" : "text-[#9393AA]"
            }`}
            onClick={() => handleToggle(index)}
          >
            {data.title}
          </button>
        ))}
      </div>
      {/* NEXT CONSULT SECTION */}
      {toggle === 0 && (
         <div className="mt-8">
         {data?.appointments.length < 1 ? (
           <div>
            <div
                className="shrink cursor-pointer flex justify-center items-center gap-4  shadow-lg p-5 rounded-xl mb-5 "
                style={{ marginBottom: "50px" }}
              >
               <div>
                 <h2 className="text-base text-[#1E1F20] font-bold">
                   No Appointments to show
                 </h2>
               </div>
             </div>
           </div>
         ) : (
           data?.appointments.map((each, index) => (
             <div key={index}>
               <h1 className="text-sm text-[#9393AA] font-semibold">
                 {formatDateWithDay(each.date)}
               </h1>

               <div
                 className="shrink cursor-pointer flex items-center gap-4  shadow-lg p-5 rounded-xl mb-5 "
                 onClick={()=>  onDetails(each.id)}
                 style={{ marginBottom: "50px" }}
               >
                 <div className="relative">
                   <Image
                     src={"/expatdoc_logo.svg"}
                     width={64}
                     height={64}
                     alt="Doc img"
                     className="rounded-md"
                   />
                   <Image
                     src={"/ic_type_call.png"}
                     width={20}
                     height={20}
                     alt="Doc img"
                     className="rounded-md absolute bottom-0 right-0"
                   />
                 </div>
                 <div>
                   <p className="text-xs sm:text-sm text-[#9393AA] font-semibold">
                     {each.appointMentNature} .{" "}
                     <span
                       className={`${data.statusColor}`}
                       style={{
                         color:
                           each?.status === "Concluded"
                             ? "#22c55e"
                             : each?.status === "Declined"
                             ? "#ef4444"
                             : each?.status === "Pending"
                             ? "#f59e0b"
                             : each?.status === "Accepted"
                             ? "#3b82f6"
                             : "#35384D",
                       }}
                     >
                       {each.status}
                     </span>
                   </p>
                   <h2 className="text-base text-[#1E1F20] font-bold">
                     ExpatDoc Online - Doctor to be assigned
                   </h2>
                   <p className="text-xs text-[#1E1F20] font-normal">
                     {each.time}
                   </p>
                 </div>
               </div>
             </div>
           ))
         )}
       </div>
      )}

      {/* PAST CONSULTATION */}
      {toggle === 1 && (
        <div className="mt-8">
          {dataa?.appointments.length < 1 ? (
            <div>
              <div
                className="shrink cursor-pointer flex justify-center items-center gap-4  shadow-lg p-5 rounded-xl mb-5 "
                style={{ marginBottom: "50px" }}
              >
                <div>
                  <h2 className=" text-base text-[#1E1F20] font-bold">
                    No Appointments to show
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            dataa?.appointments.map((each, index) => (
              <div key={index}>
                <h1 className="text-sm text-[#9393AA] font-semibold">
                  {formatDateWithDay(each.date)}
                </h1>

                <div
                  className="shrink cursor-pointer flex items-center gap-4  shadow-lg p-5 rounded-xl mb-5 "
                  onClick={()=>  onDetails(each.id)}
                  style={{ marginBottom: "50px" }}
                >
                  <div className="relative">
                    <Image
                      src={"/expatdoc_logo.svg"}
                      width={64}
                      height={64}
                      alt="Doc img"
                      className="rounded-md"
                    />
                    <Image
                      src={"/ic_type_call.png"}
                      width={20}
                      height={20}
                      alt="Doc img"
                      className="rounded-md absolute bottom-0 right-0"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#9393AA] font-semibold">
                      {each.appointMentNature} .{" "}
                      <span
                        className={`${data.statusColor}`}
                        style={{
                          color:
                            each?.status === "Concluded"
                              ? "#22c55e"
                              : each?.status === "Declined"
                              ? "#ef4444"
                              : each?.status === "Pending"
                              ? "#f59e0b"
                              : each?.status === "Accepted"
                              ? "#3b82f6"
                              : "#35384D",
                        }}
                      >
                        {each.status}
                      </span>
                    </p>
                    <h2 className="text-base text-[#1E1F20] font-bold">
                      ExpatDoc Online - Doctor to be assigned
                    </h2>
                    <p className="text-xs text-[#1E1F20] font-normal">
                      {each.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {(isLoading || isLoadingg) && <Spinner />}
    </div>
  );
};

export default Consultations;

export interface AppointmentResponse {
  appointments: Appointment[];
  count: number;
  message: string;
  page: number;
}

export interface Appointment {
  appointMentNature: string;
  appointMentType: string;
  category: string;
  createdAt: string; // ISO date string
  date: string; // ISO date string
  forSomeOne: boolean;
  groupNumber: string;
  id: string;
  images: string[];
  insuranceProvider: string;
  meetingLink: string;
  patientID: string;
  patientType: string;
  policyNumber: string;
  reason: string;
  someOneDetails: SomeOneDetails;
  status: string;
  time: string;
  updatedAt: string; // ISO date string
  user: User;
}

interface SomeOneDetails {
  dOB: string; // ISO date string or empty string if not provided
  firstName: string;
  gender: string;
  lastName: string;
  patientName: string;
  phone: string;
}

interface User {
  avatar: string;
  country: string;
  createdAt: string; // ISO date string
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  latitude: number;
  longitude: number;
  otpExpires: string | null; // Nullable ISO date string
  patientID: string;
  patientInfo: PatientInfo;
  phoneNumber: string;
  role: string;
  state: string;
  updatedAt: string; // ISO date string
  verified: boolean;
}

interface PatientInfo {
  allergies: string[];
  appointments: string[];
  clinicalVitals: any[]; // Adjust the type if specific clinical vital structure exists
  conditions: any[]; // Adjust the type if specific condition structure exists
  immunization: any[]; // Adjust the type if specific immunization structure exists
  labResults: any[]; // Adjust the type if specific lab result structure exists
  medications: Medications;
  treatmentHistory: any[]; // Adjust the type if specific treatment history structure exists
}

interface Medications {
  generalMedication: any[]; // Adjust the type if specific medication structure exists
  advancedMedication: any[]; // Adjust the type if specific medication structure exists
}
