import CustomInput from "@/components/Universal/CustomInput";
import { useApiMutation } from "@/lib/useApi";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useState } from "react";
import { IResponse } from "./MyRecords";
import { toast } from "react-toastify";
import { addCurrentUser } from "@/redux/slices/authSlice";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";


export const relationships = [
  "Husband",
  "Wife",
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Friend",
  "Other",
];

interface BasicInfoProps {
  onClose: () => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ onClose }) => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    birthday: currentUser?.patientInfo?.basicInformation?.dateOfBirth || "",
    gender: currentUser?.patientInfo?.basicInformation?.gender || "",
    language: currentUser?.patientInfo?.basicInformation?.languages || "",

    email: currentUser?.patientInfo?.basicInformation?.contactInfo?.email || "",
    zip: currentUser?.patientInfo?.basicInformation?.contactInfo?.zipCode || "",
    phoneNumber:
      currentUser?.patientInfo?.basicInformation?.contactInfo?.phoneNumber ||
      "",
    address:
      currentUser?.patientInfo?.basicInformation?.contactInfo?.address || "",

    contactName:
      currentUser?.patientInfo?.basicInformation?.emergencyContact?.name || "",
    ezip:
      currentUser?.patientInfo?.basicInformation?.emergencyContact?.zipCode ||
      "",
    EphoneNumber:
      currentUser?.patientInfo?.basicInformation?.emergencyContact
        ?.contactEmergencyPhoneNumber || "",
    relationship:
      currentUser?.patientInfo?.basicInformation?.emergencyContact
        ?.relationship || "",
  });


  const updateBasicInfo = useApiMutation<IUpdateResponse, IRecordPayload>(`/basic-information/${currentUser?.id}`);


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    

    const payload = {
      firstName: formData.firstName, lastName: formData.lastName,
      dateOfBirth: formData.birthday,
      gender: formData.gender,
      languages: formData.language,
      contactInfo: {
        email: formData.email,
        zipCode: formData.zip,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      },
      emergencyContact: {
        name: formData.contactName,
        zipCode: formData.ezip,
        contactEmergencyPhoneNumber: formData.EphoneNumber,
        relationship: formData.relationship,
      }
    }

    // console.log({ payload });

    // return

    try {
      updateBasicInfo.mutate(
        payload,
        {
          onSuccess: (data: IUpdateResponse) => {
            toast.success("Profile updated successfully!");
            console.log({data})

            
            if (currentUser) {
              dispatch(
                addCurrentUser({
                  ...data?.patient,
                  accessToken: currentUser.accessToken ?? "", 
                })
              );
            }

            onClose()
           
  
            
          },
          onError: (error: any) => {
            toast.error(() => (
              <Toast
                title="Updating avatar failed:"
                body={error?.response?.data?.message || "Unknown error"}
              />
            ));
          },
        }
      );
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <Image
        src={"/mra.svg"}
        width={40}
        height={40}
        alt="icon"
        onClick={onClose}
        className="sm:ml-28 mb-6"
      />
      <div className="flex items-start justify-center gap-8 flex-wrap">
        {/* Left side */}
        <div className="w-full sm:w-[327px]">
          <h1 className="text-2xl text-[#1E1F20] font-bold">
            Basic Informations
          </h1>
          <p className="text-xs text-[#1E1F20] font-normal">
            Last updated: 01:29 PM Jan 04, 2020
          </p>

          {/* Bsic Info */}
          <div>
            <div className="flex items-center  gap-4 my-7 pl-6">
              <Image src={"/bi1.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Share Basic Information
              </p>
            </div>

            <Image
              src={currentUser?.avatar || "/mr1.png"}
              width={112}
              height={112}
              alt="icon"
              className="rounded-lg mx-auto"
            />

            {/* INPUT AREA */}

            <div className="mt-10">
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your first name"
                    name="firstName"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your last name"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                Date of Birth (DD/MM/YYYY)
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="text"
                    value={formData.birthday}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder={""}
                    name="birthday"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Biological Sex
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-1 outline-none rounded-[3px] border border-[#CED4DA] px-3 py-2.5 text-black"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Female">Others</option>
                </select>
              </div>

              {/* Language */}

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="text"
                    value={formData.language}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder={"Enter languages you speak"}
                    name="language"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-[327px]">
          <div>
            <div className="flex items-center  gap-4 ">
              <Image src={"/bi2.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Contact Information
              </p>
            </div>

            {/* INPUT AREA */}

            <div className="mt-5">
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your Email"
                    name="email"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Emergency Phone
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="tel"
                    value={formData.zip}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="+123"
                    name="zip"
                  />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your phoneNumber"
                    name="phoneNumber"
                  />
                </div>
              </div>

             

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="email"
                    value={formData.address}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your address"
                    name="address"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="mt-10">
            <div className="flex items-center  gap-4 ">
              <Image src={"/bi3.svg"} width={32} height={32} alt="icon" />
              <p className="text-base text-[#1E1F20] font-semibold">
                Emergency Contact
              </p>
            </div>

            {/* INPUT AREA */}

            <div className="mt-5">
             

<div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                Contact Name
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter your contact name"
                    name="contactName"
                  />
                </div>
              </div>


             

<div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Emergency Phone
                </label>
                <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                  <input
                    type="tel"
                    value={formData.ezip}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="+123"
                    name="ezip"
                  />
                  <input
                    type="tel"
                    value={formData.EphoneNumber}
                    onChange={handleChange}
                    className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors w-full`}
                    placeholder="Enter their phoneNumber"
                    name="EphoneNumber"
                  />
                </div>
              </div>


              {/* RELATIONSHIP */}

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <select
                  id=""
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full  mt-1 outline-none  rounded-[3px] border border-[#CED4DA] px-3 py-2.5 text-black"
                >
                  <option value="">Select</option>
                  {
                    relationships.map((each, i) => (

                      <option value={each} key={i}>{each}</option>
                    ))
                  }
                </select>
                <button
                  className="shrink bg-[#2662F0] rounded-xl w-full  mt-10 text-base text-center font-bold text-[#F5F5F5] py-3"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {updateBasicInfo.isPending && <Spinner />}
      </div>
    </div>
  );
};

export default BasicInfo;

export interface IRecordFormData {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  language: string;
  email: string;
  zip: string;
  phoneNumber: string;
  address: string;
  contactName: string;
  ezip: string;
  EphoneNumber: string;
  relationship: string;
}

export interface IRecordPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  languages: string | string[];
  contactInfo: {
    email: string;
    zipCode: string;
    phoneNumber: string;
    address: string;
  };
  emergencyContact: {
    name: string;
    zipCode: string;
    contactEmergencyPhoneNumber: string;
    relationship: string;
  };
}

export interface IUser {
  phoneNumber: string;
  email: string;
  patientID: string;
  role: string;
  latitude: number | null;
  longitude: number | null;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  avatar: string;
  id: string;
  verified: boolean;

  password: string;
  createdAt: Date;
  updatedAt: Date;

  patientInfo: {
    appointments: any;

    basicInformation: {
      dateOfBirth: string;
      gender: string;
      languages: string[];
      contactInfo: {
        email: string;
        zipCode: string;
        phoneNumber: string;
        address: string;
      };
      emergencyContact: {
        name: string;
        zipCode: string;
        contactEmergencyPhoneNumber: string;
        relationship: string;
      };
    };

    healthMetrics: {
      basic: {
        height: string;
        weight: string;
        bodyMass: string;
        bloodGroup: string;
      };

      advancedIfo: {
        bloodPressure: string;
        totalCholesterol: string;
        LDL: string;
        HDL: string;
        triglycerides: string;
        cholesterolHDLRatio: string;
        glucose: string;
      };
    };

    conditions: {
      name: string;
      dateAdded: string;
      diagnozedBy: string;
      description: string;
    }[];

    treatmentHistory: {
      name: string;
      dateAdded: string;
      diagnozedBy: string;
      description: string;
    }[];

    medications: {
      generalMedication: {
        name: string;
        dosage: string;
      }[];
      advancedMedication: {
        name: string;
        dosage: string;
      }[];
    };

    labResults: {
      name: string;
      nameofLab: string;
      dateAdded: string;
      diagnozedBy: string;
      image: [string];
      description: string;
    }[];

    immunization: {
      name: string;
      diagnozedBy: string;
      description: string;
    }[];

    clinicalVitals: {
      name: string;
      diagnozedBy: string;
      description: string;
    }[];

    allergies: {
      name: string;
      diagnozedBy: string;
      description: string;
    }[];
  };
}
export interface IUpdateResponse {
  message: string;
  patient: IUser;
  

}

