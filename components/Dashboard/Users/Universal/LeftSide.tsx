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
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { useAppDispatch } from "@/redux/store";
import { clearCurrentUser } from "@/redux/slices/authSlice";
import UserAuth from "@/components/Universal/UserAuth";

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
    <div className="h-auto">
      <div
        className={`${
          showSidebar
            ? "lg:w-[350px] w-full z-50 fixed left-0 top-0 overflow-y-auto transition-transform duration-300 transform"
            : "hidden lg:block lg:w-[250px]"
        } bg-white shadow-lg h-full px-6 pt-10 transition-transform duration-300 transform lg:translate-x-0`}
      >
        <div className="flex items-center justify-between">
          <Image
            src={"/m-logo2.png"}
            width={136}
            height={136}
            alt="Logo"
            className="shrink"
            onClick={()=> router.push("/")}
          />

          <CloseLineIcon
            size={24}
            onClick={toggleSidebar}
            className="lg:hidden text-[#1E2230]"
          />
          {/* <Image
            src={"/close-img.svg"}
            width={50}
            height={50}
            alt="Close sidebar"
           
          /> */}
        </div>
        {/* <h1 className='text-sm text-secondary-lighter font-semibold my-[18px]'>
          MAIN MENU
        </h1> */}

        <div className="mb-4 mt-8">
          {/* Dashboard */}
          <Link
            href={"/dashboard/users/home"}
            className={`shrink flex items-center gap-2 cursor-pointer px-4 py-3 ${
              router.pathname.includes("/dashboard/users/home")
                ? " bg-[#1E2230] rounded-[5px]"
                : ""
            } `}
            // onClick={() => handleActivePage("dashboard")}
          >
            {router.pathname.includes("/dashboard/users/home") ? (
              <DashboardLineIcon size={24} className="text-white" />
            ) : (
              <DashboardLineIcon size={24} className="text-[#1E2230]" />
            )}
            <h1
              className={`text-sm ${
                router.pathname.includes("/dashboard/users/home")
                  ? "text-white font-medium"
                  : "font-normal text-[#1E2230]"
              }`}
            >
              Home
            </h1>
          </Link>

          {/* <Link
            href={"/dashboard/users/medical"}
            className={`flex items-center gap-2 cursor-pointer px-4 py-3 ${
              router.pathname.includes("/dashboard/users/medical")
                ? " bg-[#1E2230] rounded-[5px]"
                : ""
            } `}
          >
            {router.pathname.includes("/dashboard/users/medical") ? (
              <DashboardLineIcon size={24} className="text-white" />
            ) : (
              <DashboardLineIcon size={24} className="text-[#1E2230]" />
            )}
            <h1
              className={`text-sm ${
                router.pathname.includes("/dashboard/users/medical")
                  ? "text-white font-medium"
                  : "font-normal text-[#1E2230]"
              }`}
            >
              Medical
            </h1>
          </Link> */}

         


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

      <UserAuth />
    </div>
  );
};

export default LeftSide;
