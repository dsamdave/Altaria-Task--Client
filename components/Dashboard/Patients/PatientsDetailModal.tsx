import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";
import { IUser } from "@/utilities/typings";
import { getCityFromCoordinates } from "@/utilities";

interface PatientsDetailsModalProps {
  onClose: () => void;
  onDelete: () => void;
  patientDetail: IUser | undefined;
}
const PatientsDetailsModal: React.FC<PatientsDetailsModalProps> = ({
  onClose,
  onDelete,
  patientDetail,
}) => {
  const router = useRouter();

  const [city, setCity] = useState("")







  console.log({patientDetail})
  useEffect(()=>{
    const getUserCity = async()=>{
      if(!patientDetail?.latitude && !patientDetail?.longitude){
        return
      }
      const citi = await getCityFromCoordinates(patientDetail?.latitude, patientDetail?.longitude);
      setCity(citi)
    }
  
    getUserCity()
  
  }, [patientDetail])


  return (
    <div className="relative z-50 " > 
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">

        {/* <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8"> */}

        <div className=" bg-white shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full sm:w-[630px] lg:w-[980px] rounded-[14px] h-[600px] sm:h-[650px] lg:max-h-[700px] overflow-y-scroll my-8">
 

          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-10 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center justify-between">
                <h1 className="text-lg lg:text-xl text-black font-bold">
                  Patient Details
                </h1>

                <CloseFillIcon
                  size={24}
                  className="text-navbar-mobile-toggle-color cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* FORM FIELDS */}
              <form className="mt-5">
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
                        placeholder={patientDetail?.firstName}
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
                        placeholder={patientDetail?.lastName}
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
                        placeholder={patientDetail?.patientID}
                        defaultValue=""
                      />
                    </div>
                  </div>


                </div>

                {/* Bio Data */}
               
                <h6 className="mt-10 mb-3 text-black">
                Bio Data
                </h6>

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
                        placeholder={patientDetail?.patientInfo?.basicInformation?.gender}
                        defaultValue=""
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
                        placeholder={patientDetail?.patientInfo?.basicInformation?.dateOfBirth}
                        defaultValue=""
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
                        placeholder={patientDetail?.email}
                        defaultValue=""
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
                        placeholder={patientDetail?.phoneNumber}
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
                        placeholder={patientDetail?.patientInfo?.basicInformation?.contactInfo?.zipCode}
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
                        placeholder={patientDetail?.country}
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
                        onChange={()=>{}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={patientDetail?.patientInfo?.basicInformation?.languages.join(", ")}
                      />
                    </div>
                  </div>


                 
                 
                
                  
                 
                </div>
                

               

               

                {/* Emergency Contact */}
                <div className="mt-10 mb-3">
                  <label className="block text-sm font-medium text-gray-700 mt-2">
                    Emergency Contact
                  </label>

                  <div className="flex items-center  gap-3 flex-wrap ">
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                    name
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                      readOnly
                        type="text"
                        onChange={()=>{}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={patientDetail?.patientInfo?.basicInformation?.emergencyContact?.name}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                    Relationship
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                      readOnly
                        type="text"
                        onChange={()=>{}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={patientDetail?.patientInfo?.basicInformation?.emergencyContact?.relationship}
                      />
                    </div>
                  </div>


                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                    Country Code
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                      readOnly
                        type="text"
                        onChange={()=>{}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={patientDetail?.patientInfo?.basicInformation?.emergencyContact?.zipCode}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                    </label>
                    <div className=" relative mt-1 rounded-[3px] border border-[#CED4DA]">
                      <input
                      readOnly
                        type="text"
                        onChange={()=>{}}
                        className={`w-[220px] block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors placeholder:text-[#333333]`}
                        placeholder={patientDetail?.patientInfo?.basicInformation?.emergencyContact?.contactEmergencyPhoneNumber}
                      />
                    </div>
                  </div>


                  </div>
                </div>
                {/* Emergency Contact ends */}

                {/* Action Button */}
                <div className="flex items-center justify-end gap-3 mt-16 pr-8">
                  {/* <CustomButton
                    className={` p-[10px] rounded text-center text-lg font-bold shadow-xl w-full text-white border-0 border-transparent bg-[#F60707]`}
                    btnText={"Delete Patient Record"}
                    greenBorder={false}
                    whiteBorder={false}
                    onclick={onDelete}
                  /> */}
                  <CustomButton
                    className={`shrink p-[10px] rounded text-center text-lg font-bold shadow-xl w-full sm:w-[190px] text-[#F60707] bg-white border border-[#F60707]`}
                    btnText={"Close"}
                    greenBorder={false}
                    whiteBorder={false}
                    onclick={onClose}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsDetailsModal;
