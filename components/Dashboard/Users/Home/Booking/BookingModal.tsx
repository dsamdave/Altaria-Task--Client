import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import Continue from "./component/Continue";
import SelectTime from "./component/SelectTime";
import AppointmentType from "./component/AppointmentType";
import ConsultDetails from "./component/ConsultDetails";
import SentSuccessful from "./component/SentSuccessful";
import ConfirmPayment from "./component/ConfirmPayment";
import AppointmentConfirmation from "./component/AppointmentConfirmation";

interface BookingModalProps {
  onClose: () => void;
}
const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const router = useRouter();
  const [isContinue, setIsContinue] = useState(true);
  const [isSelectTime, setIsSelectTime] = useState(false)
  const [appointmentType, setAppointmentType] = useState(false);
  const [consultDetails, setConsultDetails] = useState(false);
  const [sentSuccessful, setSentSuccessful] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [appointmentConfirmation, setAppointmentConfirmation] = useState(false);
  
  

  const handleContinue=()=>{
    setIsContinue(!isContinue)
  }
  const handleSelectTime=()=>{
    setIsSelectTime(!isSelectTime)
    setIsContinue(false)
  }

  const handleAppointmentType = ()=>{
    setAppointmentType(!appointmentType);
    setIsSelectTime(false);
  }

  const handleConsultDetails = () =>{
    setConsultDetails(!consultDetails)
    setAppointmentType(false)
  }


  const handleSentSuccessful = ()=>{
    setSentSuccessful(!sentSuccessful)
    setConsultDetails(false)
  }

  const handleConfirmPayment = () =>{
    setConfirmPayment(!confirmPayment)
    setSentSuccessful(false)
  }

  const handleAppointmentConfirmation = () =>{
    setAppointmentConfirmation(!appointmentConfirmation);
    setConfirmPayment(false)
  }
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[550px] sm:h-[550px] lg:max-h-[550px] overflow-y-scroll  my-8 hide-scrollbar">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
                <h1 className="text-lg lg:text-2xl text-black font-bold">
                  Booking
                </h1>

                <CloseFillIcon
                  size={50}
                  className="text-red-500 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* MODAL CONTENT */}
              <div className="flex items-center justify-center">
            {isContinue &&   <Continue onSelectTime={handleSelectTime} />}
              {isSelectTime && <SelectTime onAppointmentType={handleAppointmentType}/>}
              {appointmentType && <AppointmentType onConsultDetails={handleConsultDetails}/>}
              {consultDetails && <ConsultDetails onSuccess={handleSentSuccessful} onClose={onClose} />}
              {/* {sentSuccessful && <SentSuccessful onConfirm={handleConfirmPayment}/>} */}
              {confirmPayment && <ConfirmPayment onAppointmentConfirmation={handleAppointmentConfirmation}/>}
              {appointmentConfirmation && <AppointmentConfirmation/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
