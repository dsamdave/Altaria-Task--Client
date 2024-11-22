import Image from "next/image";
import React, { useState } from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";


interface SpecialityProps{
    onAskQuestion: ()=>void;
}

const SelectSpecialty:React.FC<SpecialityProps> = ({onAskQuestion}) => {
  const specialtyData = [
    { img: "/sp1.svg", title: "Allergy & Immunology" },
    { img: "/sp2.svg", title: "Anesthesiology" },
    { img: "/sp3.svg", title: "Cardiology" },
    { img: "/sp4.svg", title: "Deficiency" },
    { img: "/sp5.svg", title: "Dermatology" },
    { img: "/sp6.svg", title: "Disability" },
    { img: "/sp7.svg", title: "Emergency" },
    { img: "/sp8.svg", title: "Endocrinology" },
  ];

  const [continueModal, setContinueModal] = useState(false);

  const handelContinueModal = () => {
    setContinueModal(!continueModal);
  };
  return (
    <div className="mt-8">
      <div className="w-full sm:w-[327px]">
        <h3 className="text-sm text-[#1E1F20] font-bold">Step 1 of 3</h3>
        <h1 className="text-2xl text-[#1E1F20] font-bold mt-3">
          Select Speciality
        </h1>

        <div className="flex items-center gap-3 rounded-lg bg-gray-300 p-2 mt-5">
          <SearchLineIcon size={24} color="gray" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search speciality..."
            className="text-sm text-white font-semibold outline-none bg-transparent flex-1"
          />
        </div>

        <div className="mt-10">
          {specialtyData.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-3"
              onClick={handelContinueModal}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={data.img}
                  width={40}
                  height={40}
                  alt="specialty icon"
                />
                <p className="text-base text-[#1E1F20] font-normal">
                  {data.title}
                </p>
              </div>
              <Image
                src={"/sp-next.svg"}
                width={16}
                height={16}
                alt="specialty icon"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal Section */}

      {continueModal && (
        <div className="relative z-50">
          <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
            <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[327px]  rounded-xl h-[301px] px-4 flex flex-col justify-center">
              <h1 className="text-base text-[#1E1F20] font-bold text-center">
                Allergy & Immunology
              </h1>
              <Image
                src={"/sp-modal-img.svg"}
                width={80}
                height={80}
                alt="specialty icon"
                className="mx-auto mt-8"
              />
              <p className="text-sm text-[#1E1F20] font-normal mt-4 text-center">
                There are 12 doctors at BMH available now. Do you want to
                continue?
              </p>
              <div className="flex justify-between gap-3 mt-4">
                <button className="w-full sm:w-[155px] px-4 py-2 text-[#9393AA] border border-[#E0E0E0]  rounded-xl" onClick={handelContinueModal}>
                  Cancel
                </button>
                <button className="w-full sm:w-[155px] px-4 py-2 text-white bg-blue-600 rounded-xl" onClick={onAskQuestion}>
                 Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal Section ends */}
    </div>
  );
};

export default SelectSpecialty;
