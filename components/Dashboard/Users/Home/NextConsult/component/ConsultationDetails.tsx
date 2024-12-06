import { useApiQuery } from "@/lib/useApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Appointment, AppointmentResponse } from "./Consultations";
import { formatDateWithDay } from "@/utilities";

interface consultationDetailsProp {
  onConfirm: () => void;
  id: string;
}

const ConsultationDetails: React.FC<consultationDetailsProp> = ({
  onConfirm,
  id,
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

  const [selectedBooking, setSelectedBooking] = useState<Appointment | null>(
    null
  );

  console.log({ id, data, dataa });

  useEffect(() => {
    const getSelectedBooking = () => {
      if (!data && !dataa) return;

      const combinedAppointments = [
        ...(data?.appointments ?? []),
        ...(dataa?.appointments ?? []),
      ];

      const filtered = combinedAppointments.filter((each, i) => {
        return each.id === id;
      });

      // console.log({filtered})
      setSelectedBooking(filtered[0]);
    };

    getSelectedBooking();
  }, [id]);

  console.log({ selectedBooking });

  return (
    <div>
      <div className="flex items-start justify-center  gap-8 flex-wrap">
        {/* RIGHT */}
        <div className="w-full sm:w-[343px]">
          <div className="flex items-center gap-4 mt-8">
            <Image
              src={"/expatdoc_logo.svg"}
              width={64}
              height={64}
              alt="Doc img"
              className="rounded-md"
            />
            <div>
              <h2 className="text-base text-[#1E1F20] font-bold">
                ExpatDoc Online - Doctor to be assigned
              </h2>
              <p className="text-xs text-[#1E1F20] font-normal">
                Dental Hygientist
              </p>
              <p className="text-[#9393AA] text-sm flex items-center gap-1">
                {" "}
                <Image
                  src={"/star-r.png"}
                  width={14}
                  height={14}
                  alt="doctors img"
                />{" "}
                <span className="text-[#1E1F20]">4.8</span>
              </p>
            </div>
          </div>

          {/* Visit Time */}
          <div className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-3">
              <div className="flex items-center gap-4">
                <Image src={"/nx2.svg"} width={32} height={32} alt="icon" />
                <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                  Consultation Time
                </p>
              </div>
              <button>
                <Image src={"/nx3.svg"} width={32} height={32} alt="icon" />
              </button>
            </div>

            <p className="text-sm text-[#1E1F20] font-normal">
              {formatDateWithDay(selectedBooking?.date)}
            </p>
            <p className="text-base text-[#1E1F20] font-bold">
              {selectedBooking?.time}{" "}
              {/* <span className="text-xs text-[#9393AA] font-normal">
                Alarm before 30 mins
              </span> */}
            </p>
            <p className="text-sm text-[#1E1F20] font-normal">
              {selectedBooking?.appointMentNature}: €
              {selectedBooking?.appointMentNature === "Video call"
                ? 150
                : selectedBooking?.appointMentNature === "Voice call"
                ? 100
                : selectedBooking?.appointMentNature === "Chat"
                ? 50
                : 200}
              / {selectedBooking?.appointMentNature}
            </p>
          </div>

          {/* Consult Details */}
          <div className="mt-8">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-3 mb-3">
              <Image src={"/c2.png"} width={32} height={32} alt="Images" />
              <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                Consult Details
              </p>
            </div>

            {selectedBooking?.forSomeOne === true && (
              <div>
                <p className="text-base text-[#1E1F20] font-bold mb-4">
                Patient ID: {selectedBooking?.patientID}
                </p>
                <p className="text-base text-[#1E1F20] font-bold">
                  For {selectedBooking?.someOneDetails?.firstName}{" "}
                  {selectedBooking?.someOneDetails?.lastName}, 
                  {/* 4 years old */}
                </p>
                <p className="text-base text-[#1E1F20] font-bold">
                  Date of Birth: {selectedBooking?.someOneDetails?.dOB},
                </p>
                <p className="text-base text-[#1E1F20] font-bold">
                  Contact Details: {selectedBooking?.someOneDetails?.phone},
                </p>
              </div>
            )}

            <p className="mt-5 text-base text-[#1E1F20] font-bold">
              Reason for Consultation:
            </p>
            <p className="text-sm text-[#1E1F20] font-normal">
              {selectedBooking?.reason}
            </p>
            {/* <div className="flex items-center gap-4 mt-6">
              <Image src={"/nx4.png"} width={100} height={72} alt="user img" />
              <div>
                <p className="text-sm text-[#1E1F20] font-normal">
                  My daughter teeth
                </p>
                <p className="text-xs text-[#9393AA] font-normal">
                  Uploaded Jan, 03 2020
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* RIGHT ENDS */}

        {/* LEFT */}
        <div className="w-full sm:w-[343px]">
          {/* Additional Information */}
          <div className="mt-8">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-3 mb-3">
              <Image src={"/c3.png"} width={32} height={32} alt="Images" />
              <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                Additional Information
              </p>
            </div>

            {/* Diagnosed condition */}
            {/* <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Diagnosed Conditions
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p> */}

            {/* Medications */}
            {/* <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Medications
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p> */}

            {/* Allergies*/}
            {/* <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Allergies
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p> */}

            {/* Status*/}
            <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Appointment Status:
            </h3>
            <p
              className="text-md text-[#9393AA] font-normal"
              style={{
                color:
                  selectedBooking?.status === "Concluded"
                    ? "#22c55e" // green
                    : selectedBooking?.status === "Declined"
                    ? "#ef4444" // red
                    : selectedBooking?.status === "Pending"
                    ? "#f59e0b" // yellow
                    : selectedBooking?.status === "Accepted"
                    ? "#3b82f6" // blue
                    : "#35384D", // default color
              }}
            >
              {selectedBooking?.status}
            </p>

            <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Meeting Link:
            </h3>

            {/* <p className="text-md text-[#3b82f6] font-normal cursor-pointer"
            
            > {selectedBooking?.meetingLink}</p> */}
            {selectedBooking?.meetingLink && (
              <a
                href={selectedBooking.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {selectedBooking?.meetingLink}
              </a>
            )}


<h3 className="text-base text-[#1E1F20] font-bold mt-5">
Date of Booking:
            </h3>
            <p
              className="text-md text-[#9393AA] font-normal"
            >
              {formatDateWithDay(selectedBooking?.createdAt)}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs text-[#9393AA] font-normal text-center">
              For medical emergencies, please call 911 (or your local emergency
              services) or go to the nearest ExpatDoc Online affiliated facility
              near to you
            </p>
            {/* CANCEL APPOINTMENT */}
            {/* <button
          className=" text-[#9393AA] underline p-2 sm:p-3 w-full  font-semibold flex items-center justify-center mt-5"
        >
          Cancel Appointment
        </button> */}

            {/* CONTINUE */}
            {/* <button className="bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-5" onClick={onConfirm}>
            Continue chat with Doctor
          </button> */}
          </div>
        </div>
        {/* LEFT ENDS */}
      </div>
    </div>
  );
};

export default ConsultationDetails;
