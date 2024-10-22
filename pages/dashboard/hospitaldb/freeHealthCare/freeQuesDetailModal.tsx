import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import { IUser } from "@/utilities/typings";
import { capitalizeEachWord, getCityFromCoordinates } from "@/utilities";
import { IAppointment } from "../homedb";
import dayjs from "dayjs";
import { IQuestion } from ".";

interface FreeHealthQuesDetailsModalProps {
  onClose: () => void;
  freeQuesDetail: IQuestion | undefined;
    onSmallModal: () => void;
  //   setActionIndex: (actionIndex: number) => void;
}
const FreeHealthQuesDetailsModal: React.FC<FreeHealthQuesDetailsModalProps> = ({
  onClose,
  freeQuesDetail,
  onSmallModal,
  //   appointmentDetail,
  //   setActionIndex,
}) => {
  const router = useRouter();

  const [city, setCity] = useState("");

  // console.log({ appointmentDetail });

  //   useEffect(() => {
  //     const getUserCity = async () => {
  //       if (
  //         !appointmentDetail?.user?.latitude &&
  //         !appointmentDetail?.user?.longitude
  //       ) {
  //         return;
  //       }
  //       const citi = await getCityFromCoordinates(
  //         appointmentDetail?.user?.latitude,
  //         appointmentDetail?.user?.longitude
  //       );
  //       setCity(citi);
  //     };

  //     getUserCity();
  //   }, [appointmentDetail]);

  console.log({ freeQuesDetail });

  return (
    <div className="relative z-30 ">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        {/* <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8"> */}

        <div className=" bg-white shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full sm:w-[630px] lg:w-[980px] rounded-[14px] h-[600px] sm:h-[650px] lg:max-h-[700px] overflow-y-scroll my-8">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-10 h-auto px-3 lg:pl-12 ">
              <div className="mb-5 flex items-center justify-between">
                <h1 className="text-lg lg:text-xl text-black font-bold">
                  Free Health Question Details
                </h1>

                <CloseFillIcon
                  size={24}
                  className="text-navbar-mobile-toggle-color cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* FORM FIELDS */}
              {/* <form className="mt-5"> */}
              {/* <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label> */}
              <div className="flex items-center  gap-3 flex-wrap ">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.user?.firstName}
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.user?.lastName}
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Patient ID
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.user?.patientID}
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>

              {/* Bio Data */}

              <h6 className="mt-10 mb-3 text-black">Patient Details</h6>

              <div className="flex items-center  gap-3 flex-wrap ">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.someoneElse?.firstName}
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.someoneElse?.lastName}
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.someoneElse?.dateOfBirth}
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Relationship
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={freeQuesDetail?.someoneElse?.relationship}
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}

              <div className="mt-10 mb-3">
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Health Details
                </label>

                <div className="flex items-center  gap-3 flex-wrap mt-3">
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Allergies
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={capitalizeEachWord(
                          freeQuesDetail?.allergies === "true" ? "Yes" : "No"
                        )}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Medications
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={
                          freeQuesDetail?.medications === "true" ? "Yes" : "No"
                        }
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Previously Diagnozised
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={
                          freeQuesDetail?.previouslyDiagnosed === "true"
                            ? "Yes"
                            : "No"
                        }
                      />
                    </div>
                  </div>

                  {freeQuesDetail?.previouslyDiagnosed === "true" && (
                    <>
                      <div className="">
                        <label className="block text-sm font-medium text-gray-700">
                          Condition Name
                        </label>
                        <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                          <input
                            readOnly
                            type="text"
                            onChange={() => {}}
                            className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                            placeholder={
                              freeQuesDetail?.condition?.conditionName
                            }
                          />
                        </div>
                      </div>

                      <div className="">
                        <label className="block text-sm font-medium text-gray-700">
                          Condition Time
                        </label>
                        <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                          <input
                            readOnly
                            type="text"
                            onChange={() => {}}
                            className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                            placeholder={
                              freeQuesDetail?.condition?.conditionTime
                            }
                          />
                        </div>
                      </div>

                      <div className="">
                        <label className="block text-sm font-medium text-gray-700">
                          Currently Have this Condition
                        </label>
                        <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                          <input
                            readOnly
                            type="text"
                            onChange={() => {}}
                            className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                            placeholder={
                              freeQuesDetail?.condition?.currentlyHaveThisCondition ? "Yes" : "No"
                            }
                          />
                        </div>
                      </div>

                      <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Optional Note
                    </label>
                    <div className=" w-[50vw] relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <textarea
                        readOnly
                        rows={3}
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={freeQuesDetail?.condition?.optionalNote}
                      />
                    </div>
                  </div>
                    </>
                  )}

                  

                 


                  

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Health Question
                    </label>
                    <div className=" w-[50vw] relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <textarea
                        readOnly
                        rows={3}
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={freeQuesDetail?.question}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Submission Date
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal  outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={
                          freeQuesDetail?.createdAt
                            ? new Date(
                                freeQuesDetail?.createdAt
                              ).toLocaleDateString()
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              

              {/* Action Button */}
              <div className="flex items-center justify-centre gap-3 mt-16">
                {/* <CustomButton
                    className={` p-[10px] rounded text-center text-lg font-bold shadow-xl w-full text-white border-0 border-transparent bg-[#F60707]`}
                    btnText={"Delete Patient Record"}
                    greenBorder={false}
                    whiteBorder={false}
                    onclick={onDelete}
                  /> */}

                {/* Chat Buttone */}
                <div className="w-full lg:w-auto">
                  <button
                    className={` rounded-[10px] border-2 py-3 text-[16px] font-semibold  shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#FBBF24] bg-white border border-[#FBBF24]`}
                    onClick={() => {
                    //   setActionIndex(1);
                      onSmallModal();
                    }}
                  >
                    Respond
                  </button>
                </div>

                {/* Call Button */}
                {/* <div className="w-full lg:w-auto">
                  <button
                    className={` rounded-[10px] border-2 py-3 text-[16px] font-semibold shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#10B981] bg-white border border-[#10B981] `}
                    // onClick={() => {
                    //   setActionIndex(2);
                    //   onSmallModal();
                    // }}
                  >
                    Join Call
                  </button>
                </div> */}

                {/* Close Appointment Button */}
                {/* <div className="w-full lg:w-auto">
                  <button
                    className={` rounded-[10px] border-2 py-3 text-[16px] font-semibold shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#3B82F6] bg-white border border-[#3B82F6] `}
                    // onClick={() => {
                    //   setActionIndex(3);
                    //   onSmallModal();
                    // }}
                  >
                    Close Appointment
                  </button>
                </div> */}

                <CustomButton
                  className={`shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#F60707] bg-white border border-[#F60707]`}
                  btnText={"Cancel"}
                  greenBorder={false}
                  whiteBorder={false}
                  onclick={onClose}
                />
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeHealthQuesDetailsModal;
