import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import Consultations from "./component/Consultations";
import ConsultationDetails from "./component/ConsultationDetails";
import AppointmentConfirm from "./component/AppointmentConfirm";
import PastDetails from "./component/PastDetails";

interface NextConsultProps {
  onClose: () => void;
}
const NextConsult: React.FC<NextConsultProps> = ({ onClose }) => {
  const router = useRouter();

  const [consultation, setConsultation] = useState(true);
  const [consultationDetails, setConsultationDetails] = useState(false);
  const [appointmentConfirm, setAppointmentConfirm] = useState(false);
  const [pastDetails, setPastDetails] = useState(false);
  const [consultText, setConsultText] = useState("Next Appointments"); // State for the text
  const [selectedConsulationID, setSelectedConsultationID] = useState("")

  const handleConsultations = () => {
    setConsultation(!consultation);
  };

  const handleConsultationDetails = (id: string) => {
    setSelectedConsultationID(id)
    setConsultationDetails(!consultationDetails);
    setConsultation(false);
  };

  const handleAppointmentConfirm = () => {
    setAppointmentConfirm(!appointmentConfirm);
    setConsultationDetails(false);
  };

  const handlePastDetails = () => {
    setPastDetails(!pastDetails);
    setConsultation(false);
  };

  const handleToggleChange = (text: string) => {
    setConsultText(text); // Update text based on toggle state
  };

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
      <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[550px] sm:h-[550px] lg:max-h-[550px] overflow-y-scroll  my-8 hide-scrollbar">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
                <h1 className="text-lg lg:text-2xl text-black font-bold">
                {consultText}
                </h1>

                <CloseFillIcon
                  size={50}
                  className="text-red-500 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* MODAL CONTENT */}
              <div className="flex items-center justify-center mt-5">
                {consultation && (
                  <Consultations
                    onDetails={handleConsultationDetails}
                    onPastDetails={handlePastDetails}
                    onToggleChange={handleToggleChange}
                  />
                )}
                {consultationDetails && (
                  <ConsultationDetails onConfirm={handleAppointmentConfirm} id={selectedConsulationID} />
                )}
                {appointmentConfirm && <AppointmentConfirm />}
                {pastDetails && <PastDetails />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextConsult;
