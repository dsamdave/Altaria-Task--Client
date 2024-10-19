import React, { useEffect, useState } from "react";
import Image from "next/image";
import Auth from "@/components/Universal/Auth";

const Index = () => {
    return (
      <div className="p-5 bg-[#ECF0FF] h-full"
      style={{height: "100vh"}}
      >
        <div className="bg-white rounded-[15px] p-3 px-10">
          <h1 className="text-3xl text-[#414D55] font-bold">Documents</h1>
  
          <div
            className="flex flex-col items-center h-[55vh]"  
            style={{marginTop: "180px"}}
          >
            <Image
              src={"/documents1.png"}
              width={44}
              height={44}
              alt="No message icon"
            />
            <h1 className="text-xl text-center text-[#0F1222] font-bold mt-3">
              Coming Soon Feature
            </h1>
          </div>
        </div>
        <Auth />

      </div>
    );
  };
  

export default Index;
