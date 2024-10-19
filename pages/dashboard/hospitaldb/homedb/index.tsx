import DashboardAppointmentRequest from "@/components/Dashboard/DashboardHome/DashboardAppointmentRequest";
import AppointmentRequest from "@/components/Dashboard/DashboardHome/DashboardAppointmentRequest";
import DashboardRecentPatients from "@/components/Dashboard/DashboardHome/DashboardRecentPatients";
import RecentPatients from "@/components/Dashboard/DashboardHome/RecentPatients/RecentPatients";
import Statistics from "@/components/Dashboard/DashboardHome/Statistics";
import Auth from "@/components/Universal/Auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(0);

  const handleToggle = (index: number) => {
    setToggle(index);
  };
  return (
    <div className="p-5 bg-[#ECF0FF] h-full">
      <div>
        <Statistics />
        <div className="flex items-center justify-between gap-5"
        >
          <div className="bg-white mt-10 rounded-xl flex-1">
            <div className="flex items-center justify-between px-5 py-3 ">
              <h1 className="text-base text-black font-semibold">
                Appointment request
              </h1>
              <button
                className="shrink text-base text-black font-bold"
                onClick={() =>
                  router.push("/dashboard/hospitaldb/homedb/appointmentRequest")
                }
              >
                See all
              </button>
            </div>
            <DashboardAppointmentRequest />
          </div>
          <div className="bg-white mt-10 rounded-xl flex-1">
            <div className="flex items-center justify-between px-5 py-3 ">
              <h1 className="text-base text-black font-semibold">
                Recent Patients
              </h1>
              <button
                className=" shrink text-base text-black font-bold"
                onClick={() =>
                  router.push("/dashboard/hospitaldb/homedb/recentPatients")
                }
              >
                See all
              </button>
            </div>
            <DashboardRecentPatients />
          </div>
        </div>
      </div>

      <Auth />

      {/* Appointment request */}
      <div>
        {toggle === 1 && <AppointmentRequest />}
        {toggle === 2 && <RecentPatients />}
      </div>
    </div>
  );
};

export default index;
