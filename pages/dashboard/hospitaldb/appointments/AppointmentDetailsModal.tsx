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
import OpenImageModal from "./OpenImageModal";

interface AppointmentsDetailsModalProps {
  onClose: () => void;
  onDelete: () => void;
  appointmentDetail: IAppointment | undefined;
  onSmallModal: () => void;
  setActionIndex: (actionIndex: number) => void;

}
const AppointmentsDetailsModal: React.FC<AppointmentsDetailsModalProps> = ({
  onClose,
  onDelete,
  appointmentDetail,
  onSmallModal,
  setActionIndex,
}) => {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [openImage, setOpenImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);


  const handleOpenImage =()=>{
    setOpenImage(!openImage)
  }

  useEffect(() => {
    const getUserCity = async () => {
      if (
        !appointmentDetail?.user?.latitude &&
        !appointmentDetail?.user?.longitude
      ) {
        return;
      }
      const citi = await getCityFromCoordinates(
        appointmentDetail?.user?.latitude,
        appointmentDetail?.user?.longitude
      );
      setCity(citi);
    };

    getUserCity();
  }, [appointmentDetail]);

  return (
    <div className="relative z-30 " >
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        {/* <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8"> */}

        <div className=" bg-white shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full sm:w-[630px] lg:w-[980px] rounded-[14px] h-[600px] sm:h-[650px] lg:max-h-[700px] overflow-y-scroll my-8">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-10 h-auto px-3 lg:pl-12 ">
              <div className="mb-5 flex items-center justify-between">
                <h1 className="text-lg lg:text-xl text-black font-bold">
                  Appointment Details
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
                      placeholder={appointmentDetail?.user?.firstName}
                      
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
                      placeholder={appointmentDetail?.user?.lastName}
                      
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
                      placeholder={appointmentDetail?.patientID}
                      
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Patient Type
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={appointmentDetail?.patientType}
                      
                    />
                  </div>
                </div>
              </div>

              {/* Bio Data */}

              <h6 className="mt-10 mb-3 text-black">Bio Data</h6>

              <div className="flex items-center  gap-3 flex-wrap ">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={
                        appointmentDetail?.user?.patientInfo?.basicInformation
                          ?.gender
                      }
                      
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of birth
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={
                        appointmentDetail?.user?.patientInfo?.basicInformation
                          ?.dateOfBirth
                      }
                      
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      value=""
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={appointmentDetail?.user?.email}
                      
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={appointmentDetail?.user?.phoneNumber}
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Country Code
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={
                        appointmentDetail?.user?.patientInfo?.basicInformation
                          ?.contactInfo?.zipCode
                      }
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={city}
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={appointmentDetail?.user?.country}
                    />
                  </div>
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Languages
                  </label>
                  <div className=" w-[700px] relative mt-1 rounded-[3px] border border-[#CED4DA]">
                    <input
                      readOnly
                      type="text"
                      onChange={() => {}}
                      className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                      placeholder={appointmentDetail?.user?.patientInfo?.basicInformation?.languages.join(
                        ", "
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}

              <div className="mt-10 mb-3">
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Appointment Details
                </label>

                <div className="flex items-center  gap-3 flex-wrap ">
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={capitalizeEachWord(
                          appointmentDetail?.category
                        )}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Appointment Type
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.appointMentType}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Appointment Nature
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.appointMentNature}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal  outline-none transition-colors 
                            ${
                              dayjs().isAfter(dayjs(appointmentDetail?.date))
                                ? "placeholder:text-[#FF3333]"
                                : "placeholder:text-[#10B981]"
                            }
                            `}
                        placeholder={
                          appointmentDetail?.date
                            ? new Date(
                                appointmentDetail?.date
                              ).toLocaleDateString()
                            : ""
                        }
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Time Slot
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal  outline-none transition-colors 
                            ${
                              dayjs().isAfter(dayjs(appointmentDetail?.date))
                                ? "placeholder:text-[#FF3333]"
                                : "placeholder:text-[#10B981]"
                            }
                            `}
                        placeholder={appointmentDetail?.time}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Appointment Status
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal  outline-none transition-colors  ${
                          appointmentDetail?.status === "Concluded"
                            ? "placeholder:text-green-500"
                            : appointmentDetail?.status === "Declined"
                            ? "placeholder:text-red-500"
                            : appointmentDetail?.status === "Pending"
                            ? "placeholder:text-yellow-500"
                            : appointmentDetail?.status === "Accepted"
                            ? "placeholder:text-blue-500"
                            : "placeholder:text-[#35384D]"
                        }`}
                        placeholder={appointmentDetail?.status}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Booking
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal  outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={
                          appointmentDetail?.createdAt
                            ? new Date(
                                appointmentDetail?.createdAt
                              ).toLocaleDateString()
                            : ""
                        }
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Reason For Appointment
                    </label>
                    <div className=" w-[50vw] relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <textarea
                        readOnly
                        rows={3}
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.reason}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Appointment Link:
                    </label>
                   
                      {/* <a href={appointmentDetail?.meetingLink} target="_blank" rel="noopener noreferrer"> */}
                      <label className=" cursor-pointer block text-sm font-medium text-[#0075D9]"
                      onClick={() => {
                        setActionIndex(2);
                        onSmallModal();
                      }}
                      >
                      {appointmentDetail?.meetingLink}
                    </label>
                      
                      {/* </a> */}
                  </div>
                </div>
              </div>

              {/* Insurance Info */}
              <div className="mt-10 mb-3">
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Insurance Details
                </label>

                <div className="flex items-center  gap-3 flex-wrap ">
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Insurance Provider
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.insuranceProvider}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Policy Number
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.policyNumber}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Group Number
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                        readOnly
                        type="text"
                        onChange={() => {}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={appointmentDetail?.groupNumber}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Insurance Info */}

              <div className="mt-20 grid grid-cols-2 gap-2 w-[500px] h-[300px]">
      {appointmentDetail?.images.map((url, index) => (
        <div key={index} className="shrink relative w-full h-20 overflow-hidden rounded-lg"
        onClick={()=>{
          setImageIndex(index)
          handleOpenImage()
        }}
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
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
                      setActionIndex(1);
                      onSmallModal();
                    }}
                  >
                    Start Chat
                  </button>
                </div>

                {/* Call Button */}
                <div className="w-full lg:w-auto">
                  <button
                    className={` rounded-[10px] border-2 py-3 text-[16px] font-semibold shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#10B981] bg-white border border-[#10B981] `}
                    onClick={() => {
                      setActionIndex(2);
                      onSmallModal();
                    }}
                  >
                    Join Call
                  </button>
                </div>

                {/* Close Appointment Button */}
                <div className="w-full lg:w-auto">
                  <button
                    className={` rounded-[10px] border-2 py-3 text-[16px] font-semibold shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#3B82F6] bg-white border border-[#3B82F6] `}
                    onClick={() => {
                      setActionIndex(3);
                      onSmallModal();
                    }}
                  >
                    Close Appointment
                  </button>
                </div>

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


      { openImage && <OpenImageModal onClose={handleOpenImage} appointmentDetail={appointmentDetail} imageIndex={imageIndex} />}
    </div>
  );
};

export default AppointmentsDetailsModal;
