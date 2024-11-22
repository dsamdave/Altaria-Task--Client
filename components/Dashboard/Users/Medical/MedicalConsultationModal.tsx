import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import AvailableCareTeam from "./component/AvailableCareTeam";
import SelectSpecialty from "./component/SelectSpecialty";
import AskFreeQuestion from "./component/AskFreeQuestion";
import ConfirmPayment from "./component/ConfirmPayment";
import PaymentSuccessful from "./component/PaymentSuccessful";

interface MedicalConsultationModalProps {
  onClose: () => void;
}
const MedicalConsultationModal: React.FC<MedicalConsultationModalProps> = ({
  onClose,
}) => {
  const router = useRouter();

  const [availCareTeam, setAvailCareTeam] = useState(true);
  const [askFreeHealthQuestion, setAskFreeHealthQuestion] = useState(false);
  const [askFreeHealthQuestion2, setAskFreeHealthQuestion2] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false)

  const handleAskFreeHealthQuestion = () => {
    setAskFreeHealthQuestion(!askFreeHealthQuestion);
    setAvailCareTeam(false);
  };

  const handleAskFreeHealthQuestion2 = () => {
    setAskFreeHealthQuestion2(!askFreeHealthQuestion2);
    setAskFreeHealthQuestion(false);
  };

  const handleConfirmPayment = ()=>{
    setConfirmPayment(!confirmPayment)
    setAskFreeHealthQuestion2(false)
  }

  const handlePaymentSuccessful = ()=>{
    setPaymentSuccessful(!paymentSuccessful)
    setConfirmPayment(false)
    }

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8 hide-scrollbar">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
                <h1 className="text-lg lg:text-2xl text-black font-bold">
                  Medical Consultation
                </h1>

                <CloseFillIcon
                  size={50}
                  className="text-red-500 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* MODAL CONTENT */}
              <div className="flex items-center justify-center">
                {availCareTeam && (
                  <AvailableCareTeam
                    onAskFreeHealth={handleAskFreeHealthQuestion}
                  />
                )}
                {askFreeHealthQuestion && (
                  <SelectSpecialty
                    onAskQuestion={handleAskFreeHealthQuestion2}
                  />
                )}
                {askFreeHealthQuestion2 && <AskFreeQuestion onConfirmPayment={handleConfirmPayment} />}
                {confirmPayment && <ConfirmPayment onPaymentSuccessful={handlePaymentSuccessful}/>}
                {paymentSuccessful && <PaymentSuccessful/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalConsultationModal;
