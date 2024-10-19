import Image from "next/image";
import React, { useState } from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon"

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

  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <div className="w-full h-full">
      {/* RIGHT SIDEBAR DASHBOARD */}
      {/* Fixed Top Section */}
      <div className="fixed top-0 left-[250px] bg-white w-[calc(100%-250px)] h-20 shadow-md flex items-center justify-between px-3 lg:px-16 z-20">
        {/* Adjust the left margin (left-[250px]) to account for the left sidebar width */}
        <div className="hidden lg:flex items-center gap-2 bg-[#EFF0F2] rounded-[30px] sm:w-[317px] px-4 py-2">
          
          <SearchLineIcon size={24} className="text-[#747678]" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="text-base font-normal text-[#5C5C5C] outline-none flex-1 bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden cursor-pointer">
            <Image
              src={"/hamburger.svg"}
              width={24}
              height={24}
              alt="Toggle Sidebar"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={"/search-img.svg"}
              width={16}
              height={16}
              alt="Toggle Sidebar"
              className="lg:hidden"
            />
            <button onClick={handleNotification} className="shrink">
              <Image
                src={"/m-noti.png"}
                width={23}
                height={23}
                alt="Notification icon"
              />
            </button>

            {/* Profile name and image */}
            <div className="flex items-center gap-2 flex-row-reverse lg:flex-row lg:pl-6">
              <button>
              
                <Image
                  src={"/avatar.png"}
                  width={32}
                  height={32}
                  alt="Profile Image"
                  className="rounded-full w-10 shrink"
                />
              </button>
              <p className="text-[16px] font-normal shrink cursor-pointer"
              style={{color: "#1B1B29", fontWeight: 600}}
              >
                Antonio Murray
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      {/* <div className="mt-20 overflow-auto h-[calc(100vh-5rem)]"> */}
      <div className="mt-20 overflow-auto ">
        {children}
      </div>
    </div>
  );
};

export default RightSide;



