import { addAppointmentPayload } from "@/redux/slices/appointmentSlice";
import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface AppointmentTypeProps {
  onConsultDetails: () => void;
}
const AppointmentType: React.FC<AppointmentTypeProps> = ({
  onConsultDetails,
}) => {
  const { currentAppointmentPayload } = useAppSelector(
    (state) => state.appointment
  );
  const dispatch = useDispatch();

  const [appointmentType, setAppointmentType] = useState("Physical");
  const [communicationType, setCommunicationType] = useState("");
  const [note, setNote] = useState("");

  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [groupNumber, setGroupNumber] = useState("");

  const handleNoteChange = (e: any) => {
    const newNote = e.target.value;
    if (newNote.length >= 150) {
      toast.error("Note cannot exceed 150 words");
    } else {
      setNote(newNote);
    }
  };

  // console.log({currentAppointmentPayload})

  const handleInsuranceProviderChange = (e: any) => {
    setInsuranceProvider(e.target.value);
  };

  const handlePolicyNumberChange = (e: any) => {
    setPolicyNumber(e.target.value);
  };

  const handleGroupNumberChange = (e: any) => {
    setGroupNumber(e.target.value);
  };

  const handleSubmit = () => {
    // console.log({
    //   appointMentType: "Remote",
    //     appointMentNature: communicationType,
    //     reason: note,
    //     insuranceProvider,
    //     policyNumber,
    //     groupNumber,
    // });

    if (!communicationType) {
      return toast.error("Please select appointment nature");
    }
    if (!note) {
      return toast.error("Please add reason for appointment");
    }

    dispatch(
      addAppointmentPayload({
        appointMentType: "Remote",
        appointMentNature: communicationType,
        reason: note,
        insuranceProvider,
        policyNumber,
        groupNumber,
        // images: imageUrls,
      })
    );

    onConsultDetails();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-6">
      {/* Appointment Type */}
      <div>
        <h3 className="text-xl font-semibold">Appointment Type</h3>
        <div className="flex space-x-4 mt-2">
          {["Physical", "Remote"].map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 text-black"
            >
              <input
                type="radio"
                name="appointmentType"
                value={"Remote"}
                checked={"Remote" === type}
                // checked={appointmentType === type}
                // onChange={() => setAppointmentType(type)}
                className="form-radio text-blue-500"
                style={{ transform: "scale(1.5)", margin: "5px" }}
              />
              <span className="text-sm text-black">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Nature of Communication */}
      <div>
        <h4 className="text-lg font-medium">Nature</h4>
        <div className="flex space-x-4 mt-2">
          {["Chat", "Voice call", "Video Call"].map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 text-black"
            >
              <input
                type="radio"
                name="communicationType"
                value={type}
                checked={communicationType === type}
                onChange={() => setCommunicationType(type)}
                className="form-radio text-blue-500"
                style={{ transform: "scale(1.5)", margin: "5px" }} // Increase the scale factor as needed
              />
              <span className="text-xs sm:text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Optional Note */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Reason for Appointment
        </label>
        <textarea
          value={note}
          onChange={handleNoteChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
          rows={3}
          maxLength={150}
        />
        <span className="text-sm text-gray-500">{note.length}/150</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Insurance Provider
        </label>
        <input
          placeholder="Insurance Provider"
          type="text"
          value={insuranceProvider}
          onChange={handleInsuranceProviderChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
        />

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Policy Number
          </label>
          <input
            placeholder="Policy Number"
            type="text"
            value={policyNumber}
            onChange={handlePolicyNumberChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Group Number
          </label>
          <input
            placeholder="Group Number"
            type="text"
            value={groupNumber}
            onChange={handleGroupNumberChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
            // style={{ '::placeholder': { fontSize: '12px' } }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        {/* <button className="px-4 py-2 text-[#9393AA] border border-[#E0E0E0]  rounded-xl">
          Cancel
        </button> */}
        <button
          className="shrink w-full bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center"
          onClick={handleSubmit}
        >
          Continue
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default AppointmentType;
