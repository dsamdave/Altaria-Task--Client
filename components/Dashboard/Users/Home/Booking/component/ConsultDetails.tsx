// components/ConsultDetails.js
import Spinner from "@/components/Universal/Spinner";
import Toast from "@/components/Universal/Toast";
import { addAppointmentPayload } from "@/redux/slices/appointmentSlice";
import { useAppSelector } from "@/redux/store";
import { validateUserBooking } from "@/utilities/validations/bookingValidations";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import stripePromise from "@/utilities/stripeClient";
import PaymentForm from "@/components/Payment";

interface ConsultDetailsProp {
  onSuccess: () => void;
  onClose: () => void;
}

const userType = [
  {
    imgSrc: "/u1.png",
    userName: "You",
  },
  // {
  //   imgSrc: "/u1.png",
  //   userName: "Eunice",
  // },
  {
    imgSrc: "/u2.png",
    userName: "Someone else",
  },
];

const ConsultDetails: React.FC<ConsultDetailsProp> = ({
  onSuccess,
  onClose,
}) => {
  const { currentAppointmentPayload } = useAppSelector(
    (state) => state.appointment
  );

  const dispatch = useDispatch();

  const [selectedPerson, setSelectedPerson] = useState(0);
  // const [diagnosedCondition, setDiagnosedCondition] = useState(false);
  // const [medications, setMedications] = useState(false);
  // const [allergies, setAllergies] = useState(false);
  // const [attachmentOptionsOpen, setAttachmentOptionsOpen] = useState(false);
  // const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  // const [showUploadedDetails, setShowUploadedDetails] = useState(false);
  const [uploadedTime, setUploadedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [gender, setGender] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  // const [forYou, setForYou] = useState(false);
  // const [forSomeOneElse, setForSomeOneElse] = useState(false);

  const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
  const handleLastNameChange = (e: any) => setLastName(e.target.value);
  const handleBirthdayChange = (e: any) => setBirthday(e.target.value);
  const handleEmergencyPhoneChange = (e: any) =>
    setEmergencyPhone(e.target.value);
  const handleGenderChange = (e: any) => setGender(e.target.value);

  // const handleDiagnosedCondition = () => {
  //   setDiagnosedCondition(!diagnosedCondition);
  // };

  // const handleMedications = () => {
  //   setMedications(!medications);
  // };

  // const handleAllergy = () => {
  //   setAllergies(!allergies);
  // };

  // const handleAttachmentOptionClick = () => {
  //   setAttachmentOptionsOpen(!attachmentOptionsOpen);
  // };

  const handleAttachmentOptionClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.multiple = true;
    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        const files = Array.from(target.files).slice(0, 4);
        setAttachments(files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
      }
    };
    fileInput.click();
  };

  // const handleOptionSelect = () => {
  //   setAttachmentOptionsOpen(false);
  //   setShowAttachmentModal(true);
  // };

  // const handleAddAttachment = () => {
  //   setShowAttachmentModal(false);
  //   setShowUploadedDetails(true);
  //   setUploadedTime(new Date().toLocaleString());
  // };

  // const handleCancelAttachment = () => {
  //   setShowAttachmentModal(false);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      dOB: birthday,
      phone: emergencyPhone,
      gender,
      forYou: selectedPerson === 0 ? true : false,
      forSomeOne: selectedPerson === 1 ? true : false,
      images: [],
    };

    const result = validateUserBooking(formData);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    setLoading(true);

    const uploadedUrls: string[] = [];

    for (const file of attachments) {
      const formData = new FormData();
      formData.append("file", file);

      formData.append("upload_preset", "zi7fzibg");
      formData.append("cloud_name", "dvxsj1hf8");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dvxsj1hf8/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      uploadedUrls.push(data.secure_url);
    }

    // console.log("Uploaded URLs:", uploadedUrls);
    setAttachments([]);

    // console.log({ ...formData, images: uploadedUrls });

    dispatch(addAppointmentPayload({ ...formData, images: uploadedUrls }));

    setLoading(false);
    setPaymentModal(true);
  };

  // console.log({currentAppointmentPayload})

  return (
    <>
      {paymentModal ? (
        <Elements stripe={stripePromise}>
          <PaymentForm onClose={onClose} />
        </Elements>
      ) : (
        <div className="max-w-4xl mx-auto p-2 sm:p-6 bg-white rounded-lg  space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Step 2 of 3</h2>
            <h3 className="text-2xl font-bold">Consult Details</h3>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-4">
              <div>
                <label className="mb-5 text-gray-700 font-semibold flex items-center gap-4">
                  <Image src={"/c1.png"} width={32} height={32} alt="Images" />
                  Is this for You or Someone else?
                </label>
                <div className="flex items-center sm:items-start justify-between sm:justify-start space-x-4 mt-2">
                  {userType.map((data, index) => (
                    <div
                      key={index}
                      className={`w-[65px] sm:w-[72px]} `}
                      onClick={() => {
                        setSelectedPerson(index);
                      }}
                    >
                      <div
                        className={`w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] border border-[#E0E0E0] flex items-center justify-center rounded-2xl cursor-pointer shrink
                          ${selectedPerson === index ? "bg-[#1DA1F2]" : ""}
                        `}
                      >
                        {selectedPerson === index ? (
                          <Image
                            src="/f-icon2.png"
                            width={20}
                            height={20}
                            alt="Images"
                          />
                        ) : (
                          <Image
                            src={data.imgSrc}
                            width={20}
                            height={20}
                            alt="Images"
                          />
                        )}
                      </div>

                      <p
                        className={` text-[10px] sm:text-xs text-center ${
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

              {selectedPerson === 1 && (
                <form onSubmit={handleSubmit}>
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      Enter their details
                    </h4>
                    <div className="mt-2 space-y-2">
                      <div
                        className="flex space-x-2"
                        style={{ marginBottom: "25px" }}
                      >
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          className="text-gray-500 w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={handleLastNameChange}
                          className="text-gray-500 w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div
                        className="flex items-center space-x-2"
                        style={{ marginBottom: "25px" }}
                      >
                        <input
                          type="date"
                          placeholder="Birthday"
                          value={birthday}
                          onChange={handleBirthdayChange}
                          className="text-gray-500 w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div
                        className="flex items-center space-x-2"
                        style={{ marginBottom: "25px" }}
                      >
                        <input
                          type="tel"
                          placeholder="Emergency Phone"
                          value={emergencyPhone}
                          onChange={handleEmergencyPhoneChange}
                          className="text-gray-500 w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-gray-700">
                          Gender:
                        </span>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={handleGenderChange}
                            className="form-radio text-blue-500"
                            style={{ transform: "scale(1.5)", margin: "5px" }}
                          />
                          <span className="ml-2 text-gray-600">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={handleGenderChange}
                            className="form-radio text-blue-500"
                            style={{ transform: "scale(1.5)", margin: "5px" }}
                          />
                          <span className="ml-2 text-gray-600">Female</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              <div>
                {/* <label className="font-semibold text-gray-700 flex items-center gap-4">
                  <Image src={"/c2.png"} width={32} height={32} alt="Images" />
                  What is your question?
                </label>
                <textarea
                  className="w-full h-24 mt-2 p-3 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your question here..."
                ></textarea> */}

                {/* {showAttachmentModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-2 sm:p-4 lg:p-6 rounded-lg space-y-4 w-[280px] sm:w-96">
                      <h1>Help the doctors understand what they are looking at</h1>
                      <Image
                        src="/uplo.png"
                        width={220}
                        height={160}
                        alt="Uploaded Attachment"
                        className="w-full h-48 object-cover rounded"
                      />
    
                      <p>Optional Note</p>
                      <textarea
                        className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Add a description..."
                        rows={3}
                      ></textarea>
                      <div className="flex gap-2">
                        <button
                          onClick={handleCancelAttachment}
                          className="px-4 py-2 bg-gray-200  hover:bg-gray-300 w-[140px] sm:w-[155px] rounded-xl"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleAddAttachment}
                          className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 w-[140px] sm:w-[155px] rounded-xl"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}

                {/* Uploaded Attachment Details */}
                {/* {showUploadedDetails && (
                  <div className="flex items-center flex-wrap gap-3 bg-[#F6F6F6] p-2 mt-4">
                    <Image
                      src="/uplo.png"
                      width={100}
                      height={72}
                      alt="Uploaded Attachment"
                      className="w-full sm:w-[150px] sm:h-auto  rounded"
                    />
                    <div>
                      <p className="text-sm text-[#1E1F20] font-normal">
                        Redness on the back of the neck
                      </p>
                      <p className="text-xs text-[#9393AA] font-normal">
                        Uploaded on: {uploadedTime}
                      </p>
                    </div>
                  </div>
                )} */}

                {/* <div className="space-y-4 mt-5">
                  <button
                    onClick={handleAttachmentOptionClick}
                    className="flex items-center justify-center p-2 sm:p-3 w-full gap-2 border border-[#E0E0E0] rounded-xl"
                  >
                    <Image
                      src="/attach-i.png"
                      width={24}
                      height={24}
                      alt="attach icon"
                      className=""
                    />
                    <span className="text-base text-[#9393AA] font-bold">
                      Add Attachments
                    </span>
                  </button>
    
    
                  {attachmentOptionsOpen && (
                    <div className="relative">
                      <div className="absolute left-0 bg-white border rounded-lg shadow-lg p-2 space-y-2">
                        {[
                          "Take Photo",
                          "Take Video",
                          "From Ehis Library",
                          "From Photo",
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={handleOptionSelect}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div> */}
              </div>
            </div>

            {/* Right Side */}
            {/* Right Side */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 flex items-center gap-4">
                <Image src={"/c3.png"} width={32} height={32} alt="Images" />
                Additional Information
              </h4>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {previewImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`preview ${index}`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                ))}
              </div>

              <div className="shrink space-y-4 mt-5">
                <button
                  onClick={handleAttachmentOptionClick}
                  className="flex items-center justify-center p-2 sm:p-3 w-full gap-2 border border-[#E0E0E0] rounded-xl"
                >
                  <Image
                    src="/attach-i.png"
                    width={24}
                    height={24}
                    alt="attach icon"
                    className=""
                  />
                  <span className="text-base text-[#9393AA] font-bold">
                    Add Attachments
                  </span>
                </button>

                {/* Dropdown for Attachment Options */}
                {/* {attachmentOptionsOpen && (
                  <div className="relative">
                    <div className="absolute left-0 bg-white border rounded-lg shadow-lg p-2 space-y-2">
                      {[
                        "Take Photo",
                        "Take Video",
                        "From Ehis Library",
                        "From Photo",
                      ].map((option) => (
                        <button
                          key={option}
                          onClick={handleOptionSelect}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>

              {/* <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-[150px] sm:w-auto">
                    Do you have any previous diagnosed conditions?
                  </span>
                  
    
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
              </div> */}

              {/* <div className="flex items-center justify-between">
                <span className="w-[150px] sm:w-auto">
                  Do you take any medications?
                </span>
                
    
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
    
                
              </div> */}

              {/* <div className="flex items-center justify-between">
                <span className="w-[150px] sm:w-auto">
                  Do you have any allergies?
                </span>
               
    
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
              </div> */}

              {/* <div className="mt-7 pt-5 border-t border-[#F6F6F6]">
                <h4 className="font-semibold text-[#1E1F20]">
                  Sync with Health Services
                </h4>
                <p className="text-gray-500 text-sm mt-5">
                  By importing your health data from Smart Devices, Doctor can
                  better help you.
                </p>
                <button className="flex items-center justify-center p-2 sm:p-3 w-full gap-2 border border-[#E0E0E0] rounded-xl mt-4">
                  <Image
                    src="/health.png"
                    width={24}
                    height={24}
                    alt="attach icon"
                    className=""
                  />
                  <span className="text-base text-[#9393AA] font-bold">
                    Select Health Data
                  </span>
                </button>
              </div> */}

              {/* Footer */}
              <div className="flex flex-col items-center justify-center ">
                <p className="text-xs text-[#1E1F20] text-center mt-10 lg:mt-40">
                  Your details will remain 100% private and secure
                </p>
                <button
                  className="shrink bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Book Appointment
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>

          {loading && <Spinner />}
        </div>
      )}
    </>
  );
};

export default ConsultDetails;
