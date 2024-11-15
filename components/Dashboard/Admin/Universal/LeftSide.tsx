import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileLineIcon from "remixicon-react/ProfileLineIcon";
import ArchiveLineIcon from "remixicon-react/ArchiveLineIcon";
import DashboardLineIcon from "remixicon-react/DashboardLineIcon";
import Folder2LineIcon from "remixicon-react/Folder2LineIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import ArticleFillIcon from "remixicon-react/ArticleFillIcon";
import LogoutModal from "../LogoutModal";
import LogoutBoxFillIcon from "remixicon-react/LogoutBoxFillIcon";
import { useAppDispatch } from "@/redux/store";
import { clearCurrentUser } from "@/redux/slices/authSlice";

interface leftSideProp {
  toggleSidebar: () => void;
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

const LeftSide: React.FC<leftSideProp> = ({
  toggleSidebar,
  showSidebar,
  setShowSidebar,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch()


  useEffect(() => {
    // Close sidebar when a route is visited
    setShowSidebar(false);
  }, [router.pathname]); // Trigger effect when pathname changes

  const [logOut, setLogOut] = useState(false);

  const handleLogOutModal = () => {
    setLogOut(!logOut);
  };

  const handleLogOut = async ()=>{

    dispatch(
      clearCurrentUser()
    ); 

  }
  return (
    <div className="h-full">
      <div
        className={`${
          showSidebar
            ? "lg:w-[350px] w-full z-50 fixed z-10 left-0 top-0 overflow-y-auto transition-transform duration-300 transform"
            : "hidden lg:block lg:w-[250px] fixed z-10"
        } bg-[#1E2230] shadow-lg h-full px-6 pt-10 transition-transform duration-300 transform lg:translate-x-0`}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="flex items-center justify-between">
          <Image
            src={"/new_logo.svg"}
            width={136}
            height={136}
            alt="Logo"
            className="shrink cursor-pointer"
            onClick={()=> router.push("/")}
          />

          <Image
            src={"/close-img.svg"}
            width={50}
            height={50}
            alt="Toggle Sidebar"
            onClick={toggleSidebar}
            className="lg:hidden"
          />
        </div>
        {/* <h1 className='text-sm text-secondary-lighter font-semibold my-[18px]'>
          MAIN MENU
        </h1> */}

        <div className="mb-2 mt-8">
          {/* Dashboard */}
          <Link
            href={"/dashboard/hospitaldb/homedb"}
            className={`shrink mb-2 flex items-center gap-2 cursor-pointer px-4 py-2 ${
              router.pathname.includes("/dashboard/hospitaldb/homedb")
                ? " bg-white rounded-[5px]"
                : ""
            } `}
            // onClick={() => handleActivePage("dashboard")}
          >
            {router.pathname.includes("/dashboard/hospitaldb/homedb") ? (
               <Image
               src={"/dashboard1.png"}
               width={24}
               height={24}
               alt="d"
               className=""
             />
           ) : (
             <Image
               src={"/dashboard2.png"}
               width={24}
               height={24}
               alt="d"
               className=""
             />
            )}
            <h1
              className={`text-sm ${
                router.pathname.includes("/dashboard/hospitaldb/homedb")
                  ? "text-[#1E2230] font-medium"
                  : "font-normal text-white"
              }`}
            >
              Dashboard
            </h1>
          </Link>

          {/* Doctors */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/doctors"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/doctors")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
            >
              {router.pathname.includes("/dashboard/hospitaldb/doctors") ? (
                <Image
                  src={"/doctors1.png"}
                  width={24}
                  height={24}
                  alt="d"
                  className=""
                />
              ) : (
                <Image
                  src={"/doctors2.png"}
                  width={24}
                  height={24}
                  alt="d"
                  className=""
                />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/doctors")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Doctors
              </h1>
            </Link>
          </div>

          {/* Patients */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/patients"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/patients")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes("/dashboard/hospitaldb/patients") ? (
                 <Image
                 src={"/Patients1.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
             ) : (
               <Image
                 src={"/Patients2.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/patients")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Patients
              </h1>
            </Link>
          </div>

          {/* Appointments */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/appointments"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/appointments")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes("/dashboard/hospitaldb/appointments") ? (
                  <Image
                  src={"/ddocuments1.png"}
                  width={24}
                  height={24}
                  alt="d"
                  className=""
                />
              ) : (
                <Image
                  src={"/ddocument2.png"}
                  width={24}
                  height={24}
                  alt="d"
                  className=""
                />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/appointments")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Appointments
              </h1>
            </Link>
          </div>

          {/* Messages/Chat */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/messages"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/messages")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes("/dashboard/hospitaldb/messages") ? (
                 <Image
                 src={"/message1.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
             ) : (
               <Image
                 src={"/message2.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/messages")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Messages/ Chat
              </h1>
            </Link>
          </div>

          {/* Medications */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/medications"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/medications")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes("/dashboard/hospitaldb/medications") ? (
                 <Image
                 src={"/medications1.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
             ) : (
               <Image
                 src={"/medications2.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/medications")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Medications
              </h1>
            </Link>
          </div>

          {/* Documents */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/documents"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/documents")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes("/dashboard/hospitaldb/documents") ? (
                <Image
                src={"/documents1.png"}
                width={24}
                height={24}
                alt="d"
                className=""
              />
            ) : (
              <Image
                src={"/documents2.png"}
                width={24}
                height={24}
                alt="d"
                className=""
              />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/documents")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Documents
              </h1>
            </Link>
          </div>

          {/* Free Health Care */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/freeHealthCare"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/freeHealthCare")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
              //   onClick={() => router.route"/_dashboard/_userdashboard/application"}
            >
              {router.pathname.includes(
                "/dashboard/hospitaldb/freeHealthCare"
              ) ? (
                <Image
                src={"/ddocuments1.png"}
                width={24}
                height={24}
                alt="d"
                className=""
              />
            ) : (
              <Image
                src={"/ddocument2.png"}
                width={24}
                height={24}
                alt="d"
                className=""
              />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes(
                    "/dashboard/hospitaldb/freeHealthCare"
                  )
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Free health care
              </h1>
            </Link>
          </div>

          {/* WaitList Users */}
          <div className={`my-0 shrink mb-2`}>
            <Link
              href={"/dashboard/hospitaldb/waitlist"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/waitlist")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
            >
              {router.pathname.includes("/dashboard/hospitaldb/waitlist") ? (
                 <Image
                 src={"/Path1.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
             ) : (
               <Image
                 src={"/Path2.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/waitlist")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                WaitList Users
              </h1>
            </Link>
          </div>


                    {/* Settings */}

          <div className={`my-0 shrink`}>
            <Link
              href={"/dashboard/hospitaldb/settings"}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 ${
                router.pathname.includes("/dashboard/hospitaldb/settings")
                  ? "bg-white rounded-[5px]"
                  : ""
              }`}
            >
              {router.pathname.includes("/dashboard/hospitaldb/settings") ? (
                 <Image
                 src={"/Setting1.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
             ) : (
               <Image
                 src={"/Setting2.png"}
                 width={24}
                 height={24}
                 alt="d"
                 className=""
               />
              )}
              <h1
                className={`text-sm ${
                  router.pathname.includes("/dashboard/hospitaldb/settings")
                    ? "text-[#1E2230] font-medium"
                    : "font-normal text-white"
                }`}
              >
                Settings
              </h1>
            </Link>
          </div>

          {/* Logout */}
          <div className={`shrink`} style={{marginTop: "100px"}}>
            <button
              className={`w-[208px]  rounded-lg flex items-center  px-4 gap-5  text-[16px] ${
                logOut
                  ? "bg-white rounded-[5px] text-[#1E2230]"
                  : "text-red-600"
              }`}
              onClick={handleLogOutModal}
            >
              <LogoutBoxFillIcon
                size={24}
                className={` ${logOut ? "text-[#1E2230]" : "text-red-600"} `}
              />
            
              Logout
            </button>
          </div>
        </div>
      </div>
      {logOut && <LogoutModal onClose={handleLogOutModal} handleLogOut={handleLogOut} />}
    </div>
  );
};

export default LeftSide;
