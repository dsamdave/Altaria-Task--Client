// components/AskFreeQuestion.js
import Image from "next/image";
import { useState } from "react";

interface AskFreeQuestionProp {
  onConfirmPayment: () => void;
}

const userType = [
  {
    imgSrc: "/u1.png",
    userName: "You",
  },
  {
    imgSrc: "/u1.png",
    userName: "Eunice",
  },
  {
    imgSrc: "/u2.png",
    userName: "Someone else",
  },
];

const callTypeData = [
  { img: "/l-chat.png", text: "Live Chat" },
  { img: "/v-call.png", text: "Voice Call" },
  { img: "/vi-call.png", text: "Video Call" },
];

const AskFreeQuestion: React.FC<AskFreeQuestionProp> = ({ onConfirmPayment }) => {
  const [selectedPerson, setSelectedPerson] = useState(0);
  const [diagnosedCondition, setDiagnosedCondition] = useState(false);
  const [medications, setMedications] = useState(false);
  const [allergies, setAllergies] = useState(false);

  const handleDiagnosedCondition = () => {
    setDiagnosedCondition(!diagnosedCondition);
  };

  const handleMedications = () => {
    setMedications(!medications);
  };

  const handleAllergy = () => {
    setAllergies(!allergies);
  };

 

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-6 bg-white rounded-lg shadow-lg space-y-6 mt-10">
      {/* Header */}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-4">
          <div>
            <label className=" text-gray-700 font-semibold flex items-center gap-4">
              <Image src={"/c1.png"} width={32} height={32} alt="Images" />
              Is this for You or Someone else?
            </label>
            <div className="flex items-center sm:items-start justify-center sm:justify-start space-x-4 mt-2">
              {userType.map((data, index) => (
                <div
                  key={index}
                  className={`w-[65px] sm:w-[72px]} `}
                  onClick={() => setSelectedPerson(index)}
                >
                  <div
                    className={`w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] border border-[#E0E0E0] flex items-center justify-center rounded-2xl ${
                      selectedPerson === index ? "bg-[#1DA1F2]" : ""
                    }`}
                  >
                    <Image
                      src={data.imgSrc}
                      width={20}
                      height={20}
                      alt="Images"
                    />
                  </div>

                  <p
                    className={`text-[10px] sm:text-xs text-center ${
                      selectedPerson === index
                        ? "font-bold text-[#1E1F20]"
                        : "text-[#9393AA]"
                    }`}
                  >
                    {data.userName}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {selectedPerson === 2 && (
            <div className="mt-2 space-y-2">
              <div className="">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className=" ">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="">
                <label htmlFor="">DOB</label>
                <input
                  type="date"
                  placeholder="Birthday"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className=" ">
                <label htmlFor="">Relationship</label>
                <select
                  name=""
                  id=""
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="">Brother</option>
                  <option value="">Sister</option>
                  <option value="">Father</option>
                  <option value="">Mother</option>
                  <option value="">Son</option>
                  <option value="">Daughter</option>
                </select>
              </div>
              {/* Buttons */}
              <div className="flex justify-between gap-3 mt-4">
                <button className="w-full sm:w-[155px] px-4 py-2 text-[#9393AA] border border-[#E0E0E0]  rounded-xl">
                  Cancel
                </button>
                <button className="w-full sm:w-[155px] px-4 py-2 text-white bg-blue-600 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          )}

          <div className="mt-4">
            <label className="font-semibold text-gray-700 flex items-center gap-4">
              <Image src={"/c2.png"} width={32} height={32} alt="Images" />
              What is your question?
            </label>
            <textarea
              className="w-full h-24 mt-2 p-3 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your question here..."
            ></textarea>
          </div>
        </div>

        {/* Right Side */}
        {/* Right Side */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700 flex items-center gap-4">
            <Image src={"/c3.png"} width={32} height={32} alt="Images" />
            Additional Information
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-[150px] sm:w-auto">
                Do you have any previous diagnosed conditions?
              </span>
              {/* Toggle button */}

              <div
                className={`w-[56px] h-8 ${
                  diagnosedCondition
                    ? "bg-[#00D65B] flex items-center justify-end"
                    : "bg-white flex items-center justify-start border border-gray-300"
                } rounded-full py-1 px-0.5 `}
                onClick={handleDiagnosedCondition}
              >
                <button
                  className={`w-7 h-7 bg-white shadow-lg  rounded-full `}
                />
              </div>

              {/* Toggle button ends */}
            </div>
            {diagnosedCondition && (
              <div>
                <div className="mt-2 flex items-center justify-between space-x-2 p-3 bg-[#F6F6F6]">
                  <p className="text-sm text-[#1E1F20] font-normal">
                    Flu vs. Cold
                  </p>
                  <div>
                    <p className="text-sm text-[#9393AA] font-normal">
                      Jan 5, 2020
                    </p>
                  </div>
                </div>
                {/* Add condition button */}
                <button className="flex items-center justify-center p-2 sm:p-3 w-full gap-2 border border-[#E0E0E0] rounded-xl mt-4">
                  <Image
                    src="/plus.png"
                    width={24}
                    height={24}
                    alt="attach icon"
                    className=""
                  />
                  <span className="text-base text-[#9393AA] font-bold">
                    Add Condition
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[150px] sm:w-auto">
              Do you take any medications?
            </span>
            {/* Toggle button */}

            <div
              className={`w-[56px] h-8 ${
                medications
                  ? "bg-[#00D65B] flex items-center justify-end"
                  : "bg-white flex items-center justify-start border border-gray-300"
              } rounded-full py-1 px-0.5 `}
              onClick={handleMedications}
            >
              <button className={`w-7 h-7 bg-white shadow-lg  rounded-full `} />
            </div>

            {/* Toggle button ends */}
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[150px] sm:w-auto">
              Do you have any allergies?
            </span>
            {/* Toggle button */}

            <div
              className={`w-[56px] h-8 ${
                allergies
                  ? "bg-[#00D65B] flex items-center justify-end"
                  : "bg-white flex items-center justify-start border border-gray-300"
              } rounded-full py-1 px-0.5 `}
              onClick={handleAllergy}
            >
              <button className={`w-7 h-7 bg-white shadow-lg rounded-full `} />
            </div>

            {/* Toggle button ends */}
          </div>

          <div className="mt-7">
            {/* <h4 className="font-semibold text-[#1E1F20]">
              Sync with Health Services
            </h4> */}
            <p className="text-[#1E1F20] text-sm mt-10">
              We will recommend you a best consultant method or you visit nearby
              EHMS facilities
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-8 mt-10">
              {callTypeData.map((data, index) => (
                <div key={index} className="w-[72px] ">
                  <Image src={data.img} width={72} height={72} alt="icon" />
                  <p className="text-xs text-[#1E1F20] font-normal text-center mt-1">
                    {data.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col items-center justify-center ">
        <p className="text-xs text-[#1E1F20] text-center mt-10 lg:mt-40">
          Your details will remain 100% private and secure
        </p>
        <button
          className="w-full sm:w-[327px] bg-[#0364FF] text-white p-2 sm:p-3 rounded-xl font-semibold flex items-center justify-center"
          onClick={onConfirmPayment}
        >
          Continue
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default AskFreeQuestion;
