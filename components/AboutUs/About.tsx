import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-20 pb-40 bg-white">
      <div className="bg-[#F5FAFF] px-4 sm:px-20 flex items-center justify-center xl:justify-between flex-wrap pt-4">
        
        {/* Card 1 */}
        <div className="w-full sm:w-[405px]">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] ">
            About Us
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-[80px] sm:w-[104px">
              <h1 className="text-[#1D2B4F] text-4xl sm:text-5xl font-bold">
                10
              </h1>
              <p className="text-[16px] mt-3 text-[#1D2B4F] font-semibold">
                Years of Experience
              </p>
            </div>
            <div className="w-[80px] sm:w-[104px">
              <h1 className="text-[#1D2B4F] text-4xl sm:text-5xl font-bold">
                5k
              </h1>
              <p className="text-[16px] mt-3 text-[#1D2B4F] font-semibold">
                Happy Clients
              </p>
            </div>
            <div className="w-[80px] sm:w-[104px">
              <h1 className="text-[#1D2B4F] text-4xl sm:text-5xl font-bold">
                50k
              </h1>
              <p className="text-[16px] mt-3 text-[#1D2B4F] font-semibold">
                User Review
              </p>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div>
          <Image src={"/a1.png"} width={504} height={10} alt="About image" className="mt-5 xl:-mt-40 " />
        </div>
      </div>
    </div>
  );
};

export default About;
