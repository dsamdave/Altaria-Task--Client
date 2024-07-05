import Image from "next/image";
import React from "react";

const BestPlatform = () => {
  return (
    <div>
      <div className="bg-[#F5FAFF] px-4 lg:px-20 pt-10 h-[300px] lg:h-[320px]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] sm:w-[500px]">
          Best medical platform since 2024
        </h1>
      </div>
      {/* Second section */}
      <div className="flex items-center justify-center bg-white">
       
          <Image
            src={"/vid-img.png"}
            width={1036}
            height={72}
            alt="BP images"
            className="-mt-40 lg:-mt-60 "
          />
       
      </div>
    </div>
  );
};

export default BestPlatform;
