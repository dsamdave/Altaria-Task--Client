import Spinner from "@/components/Universal/Spinner";
import { useApiQuery } from "@/lib/useApi";
import { getRelativeTime } from "@/utilities";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Notification = () => {
  const notificationData = [
 
    {
      notifications:
        "You have appointment with Dr. Kunle Amadi at 08:00 PM today. Please prepare health record...",
        time: '2h'
    },
    {
      notifications:
        "Completed your profile to be better health consults. Complete profile >",
        time: 'just now'
    },
    {
      notifications:
        "Add credit card to start consults with doctor. Add Credit Card >",
        time: '3h'
    },
    {
      notifications: "Your appointment with Dr. John to be canceled.",
      time: '4 min'
    },
    {
      notifications:
        "Video call request of you with Dr. John to be canceled.",
        time: '2h'
    },
    {
      notifications:
        "You received the answer from Dr. Osu Adim",
        time: '1h'
    },
  ];

  const { data, error, isLoading } = useApiQuery<INotificationResponse>(
    ["notifications"],
    `/get-notification`,  
  );


  // console.log({data})


  return (
    <div className="h-full">
    {/* Scrollable Notifications Section */}
    <div className="max-h-[800px] overflow-y-auto py-5">
      {data?.notifications &&
        data.notifications.map((data, index) => (
          <div
            key={index}
            className="shrink cursor-pointer flex items-center justify-between pt-2.5 shadow-sm p-2"
          >
            <div className="flex items-center gap-3">
              {data.type === "appointment" ? (
                <Image
                  src={"/noti-icon.png"}
                  width={40}
                  height={40}
                  alt="Notification icon"
                />
              ) : data.type === "alert" ? (
                <Image
                  src={"/profile.png"}
                  width={40}
                  height={40}
                  alt="Notification icon"
                />
              ) : data.type === "message" ? (
                <Image
                  src={"/msg.png"}
                  width={40}
                  height={40}
                  alt="Notification icon"
                />
              ) : (
                <Image
                  src={"/profile.png"}
                  width={40}
                  height={40}
                  alt="Notification icon"
                />
              )}
              <div className="w-full lg:w-[276px]">
                <p className="text-base text-[#1E1F20] font-light">
                  {data.message}
                </p>
                <p className="text-xs text-[#9393AA] font-normal">
                  {getRelativeTime(data.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
     
      
      {isLoading && <Spinner />}
    </div>
  </div>
  );
};

export default Notification;

export interface INotificationResponse {
  message: string;
  notifications: INotification[];
}

export interface INotification {
  title: string;
  message: string;
  type: 'appointment' | 'prescription' | 'alert' | 'message';
  recipientId: string;  
  recipientRole: 'patient' | 'doctor';
  isRead: boolean;
  data?: Record<string, any>; 
  createdAt: string;  
  updatedAt?: string;  
  id: string;  
}
