import Messages from "@/components/Dashboard/Messages/Messages";
import NoMessage from "@/components/Dashboard/Messages/NoMessage";
import Auth from "@/components/Universal/Auth";
import React, { useEffect, useState } from "react";

const index = () => {
    const [showComponent, setShowComponent] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts or changes
  }, [showComponent]);
  return (
    <div className="p-5 bg-[#ECF0FF] h-full "
    >
      <div className="bg-white rounded-[15px] p-3">
      <h1 className="text-3xl text-[#414D55] font-bold">Message Chat</h1>

      {showComponent ? <NoMessage/> : <Messages />}

      <Auth />

      </div>
    </div>
  );
};

export default index;
