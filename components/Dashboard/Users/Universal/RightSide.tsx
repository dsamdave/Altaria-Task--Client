import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import { useRouter } from "next/router";
import Notification from "../Home/Notification";
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon'
import { useAppSelector } from "@/redux/store";
import { getGreeting } from "@/utilities";

interface rightSideProp {
  children: React.ReactNode;
  toggleSidebar: () => void;
  showSidebar: boolean;
}

const RightSide: React.FC<rightSideProp> = ({
  children,
  toggleSidebar,
  showSidebar,
}) => {
  const [notification, setNotification] = useState(false);
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);


  const handleNotification = () => {
    // router.push("/dashboard/users/home");
    setNotification(!notification);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full">
      {/* RIGHT SIDEBAR DASHBOARD */}
      <div className="bg-white w-full h-full flex items-stretch justify-between">
        {/* LEFT SIDE */}
        <div
          className={`bg-[#EFF0F2] p-4 flex-1 w-full ${
            notification ? "hidden lg:block" : "block"
          }`}
        >
          {/* Top section */}
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap w-full">
            {/*   Profile name and image */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 ">
                {
                  isClient && currentUser?.avatar ? (

                    <Image
                      src={currentUser?.avatar || "/avatar.png"}
                      width={32}
                      height={32}
                      alt="Profile Image"
                      className=" rounded-md w-10 cursor-pointer shrink"
                    />
                  ) : (
                    <Image
                      src={ "/avatar.png"}
                      width={32}
                      height={32}
                      alt="Profile Image"
                      className=" rounded-md w-10 cursor-pointer shrink"
                    />

                  )
                }

                <div>
                  {
                    isClient && currentUser ? (

                  <h1 className="text-gray-700 font-bold">
                    {/* {currentUser?.firstName} */}
                    {getGreeting()}, {currentUser?.firstName}

                    </h1>
                    ) : (
                  <h1 className="text-gray-700 font-bold">Hi, 
                    User
                    </h1>

                    )
                  }
                  <p className="text-[16px] text-gray-600 font-normal hidden lg:block">
                    How are you today?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:hidden">
                {/* Hamburger Menu */}
                <MenuLineIcon
                  size={24}
                  onClick={toggleSidebar}
                  className="cursor-pointer shrink text-black"
                />
                <Image
                  src={"/m-noti.png"}
                  width={23}
                  height={23}
                  alt="Notification icon"
                  className="cursor-pointer shrink"
                  onClick={handleNotification}
                />
              </div>
            </div>
            {/* End of profile name and image */}

            <div className="flex items-center gap-2 bg-white rounded-[30px] w-full sm:w-[300px] px-4 py-1.5 mt-3 lg:mt-0">
              <SearchLineIcon size={24} className="text-[#747678]" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="text-base font-normal text-[#5C5C5C] outline-none flex-1 bg-transparent"
              />
            </div>
            {/* Top Section ends here */}
          </div>
          <div className="">
            {children}
            {/* Notification */}
          </div>
        </div>
        {/* LEFT SIDE ENDS HERE */}

        {/* RIGHT SIDE */}
        <div
          className={`w-full lg:w-[350px] bg-white p-4 ${
            notification ? "block" : "hidden lg:block"
          } `}
        >
          <ArrowLeftLineIcon size={43} className="lg:hidden cursor-pointer shrink" onClick={handleNotification}  />
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-black font-bold text-center">Notifications</h1>

            <Image
              src={"/m-noti.png"}
              width={23}
              height={23}
              alt="Notification icon"
              // onClick={handleNotification}
              className="hidden lg:block cursor-pointer shrink"
            />
            <Image
              src={"/m-noti.png"}
              width={23}
              height={23}
              alt="Notification icon"
              onClick={handleNotification}
              className="lg:hidden cursor-pointer shrink"
            />
          </div>
          <Notification />
        </div>
        {/* RIGHT SIDE ENDS HERE */}
      </div>
    </div>
  );
};

export default RightSide;
