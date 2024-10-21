import React, { useEffect, useState } from "react";
import Image from "next/image";
import Auth from "@/components/Universal/Auth";

const NoWaitList = () => {
    return (
      <div className="p-5 bg-[#ECF0FF] h-full"
      style={{height: "100vh"}}
      >
        <div className="bg-white rounded-[15px] p-3 px-5">
          <h1 className="text-xl text-[#1B1B29] font-semibold pt-2">WaitList Users</h1>

  
          <div
            className="flex flex-col items-center h-[40vh]"  
            style={{marginTop: "100px"}}
          >
            <Image
                 src={"/Path1.png"}
                 width={35}
              height={35}
              alt="No message icon"
            />
            <h1 className="text-xl text-center text-[#0F1222] font-bold mt-3">
              No WaitList Data Available.
            </h1>
          </div>
        </div>

        <Auth />

      </div>
    );
  };
  

export default NoWaitList;
