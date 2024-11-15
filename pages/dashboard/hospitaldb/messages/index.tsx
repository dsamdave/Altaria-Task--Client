import Messages from "@/components/Dashboard/Admin/Messages/Messages";
import NoMessage from "@/components/Dashboard/Admin/Messages/NoMessage";
import Auth from "@/components/Universal/Auth";
import Spinner from "@/components/Universal/Spinner";
import {  SocketBaseURL } from "@/lib/query";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

const index = () => {

  const { currentUser } = useAppSelector((state) => state.auth);

  // console.log({id: currentUser?.id})

    const [consultations, setConsultations] = useState<IConsultation[]>([]);
    const [socket, setSocket] = useState<any>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      if (!currentUser?.id) return; 
  
      const userID = currentUser?.id
  
      setLoading(true);
  
      const socketInstance = io(SocketBaseURL, {
        transports: ['websocket'],  
        reconnectionAttempts: 3,    
        timeout: 10000,             
      });
  
      setSocket(socketInstance);
  
      socketInstance.on("connect", () => {
        socketInstance.emit("joinRoom", userID);
      });
  
      socketInstance.emit("getChatsHistoryAdmin", { userID });
  
      // Handle chat history response
      socketInstance.on("conversationHistoryAdmin", (data) => {
        setLoading(false);
        setConsultations(data); 
      });
  
      // Handle errors
      socketInstance.on("conversationHistoryErrorAdmin", (error) => {
        console.error("Chat history error:", error.message);
        setLoading(false);
      });
  
      // Handle socket connection error
      socketInstance.on("connect_error", (error) => {
        console.error("Connection error:", error.message);
        setLoading(false);
      });
  
      return () => {
        socketInstance.off("conversationHistory");
        socketInstance.off("conversationHistoryError");
        socketInstance.disconnect();
      };
    }, [currentUser?.id]);


  return (
    <div className="p-5 bg-[#ECF0FF] bg-white"
    >
      <div className="bg-white rounded-[15px] p-3">
      <h1 className="text-3xl text-[#414D55] font-bold">Message Chat</h1>

      {consultations && consultations?.length < 1 ? <NoMessage/> : <Messages consultations={consultations} />}

      <Auth />

      </div>
      { loading && <Spinner />}
    </div>
  );
};

export default index;



export interface ConsultationResponse {
  consultations: IConsultation[];
}

export interface IConsultation {
  createdAt: string;
  doctor: Doctor;
  patient: Patient;
  id: string;
  lastMessage: string;
  lastMessageTime: string;
  participants: string[];
  patientID: string;
  patientInfo: PatientInfo;
  phoneNumber: string;
  role: string;
  state: string;
  updatedAt: string;
  closed: boolean

}

interface Doctor {
  avatar: string;
  country: string;
  firstName: string;
  id: string;
  lastName: string;
  latitude: number;
  longitude: number;
}

interface Patient {
  avatar: string;
  country: string;
  firstName: string;
  id: string;
  lastName: string;
  latitude: number;
  longitude: number;
  patientID: string;
  phoneNumber: string;
  basicInformation: BasicInformation;
  patientInfo: PatientInfo;
}

interface PatientInfo {
  allergies: any[];
  appointments: string[];
  clinicalVitals: any[];
  conditions: any[];
  immunization: any[];
  labResults: any[];
  medications: Medications;
  treatmentHistory: any[];
}

interface Medications {
  generalMedication: any[];
  advancedMedication: any[];
}

interface BasicInformation {
  contactInfo: ContactInfo;
  emergencyContact: EmergencyContact;
  dateOfBirth: string;
  gender: string;
  languages: string[];
}

interface ContactInfo {
  // Define fields based on the actual structure
}

interface EmergencyContact {
  // Define fields based on the actual structure
}
