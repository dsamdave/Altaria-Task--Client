import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import CustomButton from "@/components/Universal/CustomButton";

interface AppointmentDetailsModalProps {
  onClose: () => void;
}
const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  onClose,
}) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name1: "",
    name2: "",
    name3: "",
    bioData1: "",
    bioData2: "",
    bioData3: "",
    bioData4: "",
    bioData5: "",
    bioData6: "",
    bioData7: "",
    bioData8: "",
    illData1:"",
    illData2:"",
    illData3:"",
    addressData1: "",
    addressData2: "",
    addressData3: "",
    addressData4: "",
    addressData5: "",
    mediData1: "",
    mediData2: "",
    mediData3: "",
    mediData4: "",
    mediData5: "",
    mediData6: "",
    emergData1: "",
    emergData2: "",
    emergData3: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  const allFieldFilled = Object.values(formValues).every(
    (value) => value !== ""
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    if (allFieldFilled) {
      console.log("Form submitted:", formValues);
      // Navigate to the dashboard
      router.push("/");
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-10 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
               <div className="flex items-center gap-5">
               <h1 className="text-lg lg:text-xl text-black font-bold">
                  Appointment Details
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#0075D9] mt-2">
                  Personal
                </p>
               </div>

                <CloseFillIcon
                  size={24}
                  className="text-navbar-mobile-toggle-color cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {/* FORM FIELDS */}
              <form className="mt-5" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-700">
                  Names
                </label>
                <div className="flex items-center  gap-3 flex-wrap ">
                  <CustomInput
                    label=""
                    placeholder="James"
                    type="text"
                    value={formValues.name1}
                    onChange={(value) => handleInputChange("name1", value)}
                    className="w-[279px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Joseph"
                    type="text"
                    value={formValues.name2}
                    onChange={(value) => handleInputChange("name2", value)}
                    className="w-[279px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.name3}
                    onChange={(value) => handleInputChange("name3", value)}
                    className="w-[279px]"
                  />
                </div>

                {/* Bio Data */}
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Bio Data
                </label>
                <div className="flex items-center  gap-3 flex-wrap ">
                  <CustomInput
                    label=""
                    placeholder="James"
                    type="text"
                    value={formValues.bioData1}
                    onChange={(value) => handleInputChange("bioData1", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Joseph"
                    type="text"
                    value={formValues.bioData2}
                    onChange={(value) => handleInputChange("bioData2", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.bioData3}
                    onChange={(value) => handleInputChange("bioData3", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.bioData4}
                    onChange={(value) => handleInputChange("bioData4", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="James"
                    type="text"
                    value={formValues.bioData5}
                    onChange={(value) => handleInputChange("bioData5", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Joseph"
                    type="text"
                    value={formValues.bioData6}
                    onChange={(value) => handleInputChange("bioData6", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.bioData7}
                    onChange={(value) => handleInputChange("bioData7", value)}
                    className="w-[220px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.bioData8}
                    onChange={(value) => handleInputChange("bioData8", value)}
                    className="w-[220px]"
                  />
                </div>
                {/* Biodata ends */}

                {/* Illness section */}

                <label className="block text-sm font-medium text-gray-700 mt-3">
                  Illiness type
                </label>
                <div className="flex items-center  gap-3 flex-wrap ">
                  <CustomInput
                    label=""
                    placeholder="James"
                    type="text"
                    value={formValues.illData1}
                    onChange={(value) => handleInputChange("illData1", value)}
                    className="w-[279px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Joseph"
                    type="text"
                    value={formValues.illData2}
                    onChange={(value) => handleInputChange("illData2", value)}
                    className="w-[279px]"
                  />
                  <CustomInput
                    label=""
                    placeholder="Great"
                    type="text"
                    value={formValues.illData3}
                    onChange={(value) => handleInputChange("illData3", value)}
                    className="w-[279px]"
                  />
                </div>

                {/* Illness section ends */}

                {/* Address section */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mt-2">
                    Address
                  </label>
                  <div className="w-[700px]">
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.addressData1}
                      onChange={(value) => handleInputChange("addressData1", value)}
                      className="w-[862px]"
                    />
                  </div>
                  <div className="flex items-center  gap-3 flex-wrap ">
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.addressData2}
                      onChange={(value) => handleInputChange("addressData2", value)}
                      className=""
                    />
                    <CustomInput
                      label=""
                      placeholder="Joseph"
                      type="text"
                      value={formValues.addressData3}
                      onChange={(value) => handleInputChange("addressData3", value)}
                      className=""
                    />
                    <CustomInput
                      label=""
                      placeholder="Great"
                      type="text"
                      value={formValues.addressData4}
                      onChange={(value) => handleInputChange("addressData4", value)}
                      className=""
                    />
                    <CustomInput
                      label=""
                      placeholder="Great"
                      type="text"
                      value={formValues.addressData5}
                      onChange={(value) => handleInputChange("addressData5", value)}
                      className=""
                    />
                  </div>
                </div>
                {/* Address section ends */}

                {/* Medical Data */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mt-2">
                    Medical Data
                  </label>

                  <div className="flex items-center  gap-3 flex-wrap ">
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.mediData1}
                      onChange={(value) => handleInputChange("mediData1", value)}
                      className="w-[279px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="Joseph"
                      type="text"
                      value={formValues.mediData2}
                      onChange={(value) => handleInputChange("mediData2", value)}
                      className="w-[279px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="Great"
                      type="text"
                      value={formValues.mediData3}
                      onChange={(value) => handleInputChange("mediData3", value)}
                      className="w-[279px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="Great"
                      type="text"
                      value={formValues.mediData4}
                      onChange={(value) => handleInputChange("mediData4", value)}
                      className="w-[426px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.mediData5}
                      onChange={(value) => handleInputChange("mediData5", value)}
                      className="w-[426px]"
                    />
                  </div>
                  <div className="w-[700px]">
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.mediData6}
                      onChange={(value) => handleInputChange("mediData6", value)}
                      className="w-[868px]"
                    />
                  </div>
                </div>
                {/* Medical data ends here */}

                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mt-2">
                    Emergency Contact
                  </label>

                  <div className="flex items-center  gap-3 flex-wrap ">
                    <CustomInput
                      label=""
                      placeholder="James"
                      type="text"
                      value={formValues.emergData1}
                      onChange={(value) => handleInputChange("emergData1", value)}
                      className="w-[380px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="Joseph"
                      type="text"
                      value={formValues.emergData2}
                      onChange={(value) => handleInputChange("emergData2", value)}
                      className="w-[230px]"
                    />
                    <CustomInput
                      label=""
                      placeholder="Great"
                      type="text"
                      value={formValues.emergData3}
                      onChange={(value) => handleInputChange("emergData3", value)}
                      className="w-[230px]"
                    />
                  </div>
                </div>
                {/* Emergency Contact ends */}

                {/* Action Button */}
                <div className="flex items-center justify-end gap-3 mt-16 pr-8">
                  <CustomButton
                    className={` p-[10px] rounded text-center text-lg font-bold shadow-xl w-full text-white border-0 border-transparent bg-black`}
                    btnText={"Accept Appointment"}
                    greenBorder={false}
                    whiteBorder={false}
                  />
                  <CustomButton
                    className={` p-[10px] rounded text-center text-lg font-bold shadow-xl w-full text-black bg-white border border-black`}
                    btnText={"Decline Appointment"}
                    greenBorder={false}
                    whiteBorder={false}
                    onclick={onClose}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsModal;
