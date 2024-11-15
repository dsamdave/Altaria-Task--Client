// @ts-nocheck
import React, { useState } from "react";
import LeftSide from "./Universal/LeftSide";
import RightSide from "./Universal/RightSide";

interface UsersLayoutProp {
  children: React.ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProp> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className=" h-full w-full flex items-stretch  bg-white">
      <LeftSide 
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      
      <RightSide
        children={children}
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
      />
    </div>
  );
};

export default UsersLayout;
