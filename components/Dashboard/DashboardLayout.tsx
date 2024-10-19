// @ts-nocheck
import React, { useState } from "react";
import LeftSide from "./Universal/LeftSide";
import RightSide from "./Universal/RightSide";

interface DashboardLayoutProp {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProp> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className=" w-full flex items-stretch  bg-white"
    style={{height: "100vh"}}
    >
      <LeftSide 
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      
      <div
        className="flex-1"
        style={{
          marginLeft: showSidebar ? "350px" : "250px", // Adjust based on sidebar visibility
        }}
      >
        <RightSide
          children={children}
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
