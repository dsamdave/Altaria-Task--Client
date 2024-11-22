import Image from "next/image";
import React from "react";
import { AppointmentResponse } from "./Consultations";
import { useApiQuery } from "@/lib/useApi";

const PastDetails = () => {


  const { data, error, isLoading } = useApiQuery<AppointmentResponse>(
    ["next-appointments"],
    `/appointments/next`
  );
  const {
    data: dataa,
    error: errorr,
    isLoading: isLoadingg,
  } = useApiQuery<AppointmentResponse>(
    ["past-appointments"],
    `/appointments/past`
  );

  console.log({data, dataa})



  return (
    <div>
      <div className="flex items-start justify-center  gap-8 flex-wrap">
        {/* RIGHT */}
        <div className="w-full sm:w-[343px]">
          <div className="flex items-center gap-4 mt-8">
            <Image
              src={"/nx.svg"}
              width={64}
              height={64}
              alt="Doc img"
              className="rounded-md"
            />
            <div>
              <h2 className="text-base text-[#1E1F20] font-bold">
                Dr.Ethel Omoge
              </h2>
              <p className="text-xs text-[#1E1F20] font-normal">
                Dental Hygientist
              </p>
              <p className="text-[#9393AA] text-sm flex items-center gap-1">
                {" "}
                <Image
                  src={"/star-r.png"}
                  width={14}
                  height={14}
                  alt="doctors img"
                />{" "}
                <span className="text-[#1E1F20]">UPTH</span>
              </p>
            </div>
          </div>

          {/* Visit Time */}
          <div className="mt-8">
            <div className="flex items-center gap-4  border-b border-gray-300 pb-3 mb-3">
              <Image src={"/nx2.svg"} width={32} height={32} alt="icon" />
              <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                Request Time
              </p>
            </div>

            <p className="text-sm text-[#1E1F20] font-normal">
            Message sent at 01:24 PM Jan 2, 2020
            </p>
            <p className="text-sm text-[#1E1F20] font-normal mt-2">
            Message Consult: NGN4,500 / visit
            </p>
          </div>

          {/* Consult Details */}
          <div className="mt-8">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-3 mb-3">
              <Image src={"/c2.png"} width={32} height={32} alt="Images" />
              <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                Consult Details
              </p>
            </div>

            <p className="text-base text-[#1E1F20] font-bold">
            My Question
            </p>
            <p className="text-base text-[#1E1F20] font-normal  my-4">
            For Eunice, 4 years old
            </p>
            <p className="text-sm text-[#1E1F20] font-normal">
              Late falling of milk teeth on a child, resulting in two rows of
              milk and permanent teeth at the same time, what could help?
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image src={"/nx4.png"} width={100} height={72} alt="user img" />
              <div>
                <p className="text-sm text-[#1E1F20] font-normal">
                  My daughter teeth
                </p>
                <p className="text-xs text-[#9393AA] font-normal">
                  Uploaded Jan, 03 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT ENDS */}

        {/* LEFT */}
        <div className="w-full sm:w-[343px]">
          {/* Additional Information */}
          <div className="mt-8">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-3 mb-3">
              <Image src={"/c3.png"} width={32} height={32} alt="Images" />
              <p className="text-sm sm:text-base text-[#1E1F20] font-bold">
                Additional Information
              </p>
            </div>

            {/* Diagnosed condition */}
            <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Diagnosed Conditions
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p>

            {/* Medications */}
            <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Medications
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p>

            {/* Allergies*/}
            <h3 className="text-base text-[#1E1F20] font-bold mt-5">
              Allergies
            </h3>
            <p className="text-xs text-[#9393AA] font-normal">None</p>
          </div>
        </div>
        {/* LEFT ENDS */}
      </div>
    </div>
  );
};

export default PastDetails;
