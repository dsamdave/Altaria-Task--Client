import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import BasicInfo from "./components/BasicInfo";
import MyRecords from "./components/MyRecords";
import HealthMatrics from "./components/HealthMatrics";
import ConditionSymptoms from "./components/ConditionSymptoms";
import TreatmentHistory from "./components/TreatmentHistory";
import Medication from "./components/Medication";
import LabResults from "./components/LabResults";

interface RecordModalProps {
  onClose: () => void;
}

const RecordModal:React.FC<RecordModalProps> = ({onClose}) => {
  const router = useRouter();

  const [myRecords, setMyRecords] = useState(true);
  const [basicInfo, setBasicInfo] = useState(false);
  const [healthMatrics, setHealthMatrics] = useState(false);
  const [conditionSymptoms, setConditionSymptoms] = useState(false);
  const [treatmentHistory, setTreatmentHistory] = useState(false);
  const [medications, setMediications] = useState(false);
  const [labResults, setLabResults] = useState(false);

  const handleMyRecords = () => {
    setMyRecords(!myRecords);
  };

  //   BASIC INFO
  const handleBasicInfo = () => {
    if (basicInfo) {
      // If BasicInfo is open, closing it should display MyRecords
      setBasicInfo(false);
      setMyRecords(true);
    } else {
      // Otherwise, open BasicInfo and hide MyRecords
      setBasicInfo(true);
      setMyRecords(false);
    }
  };

  //   HEALTH MATRICS
  const handleHealthMatrics = () => {
    if (healthMatrics) {
      setHealthMatrics(false);
      setMyRecords(true);
    } else {
      setHealthMatrics(true);
      setMyRecords(false);
    }
  };

  //   CONDITIONS AND SYMPTOMS
  const handleConditionSymptoms = () => {
    if (conditionSymptoms) {
      setConditionSymptoms(false);
      setMyRecords(true);
    } else {
      setConditionSymptoms(true);
      setMyRecords(false);
    }
  };

  //   TREATMENT HISTORY
  const handleTreatmentHistory = () => {
    if (treatmentHistory) {
      setTreatmentHistory(false);
      setMyRecords(true);
    } else {
      setTreatmentHistory(true);
      setMyRecords(false);
    }
  };

  //   MEDICATIONS
  const handleMedications = () => {
    if (medications) {
      setMediications(false);
      setMyRecords(true);
    } else {
      setMediications(true);
      setMyRecords(false);
    }
  };

  //   LAB RESULTS
  const handleLabResults = () => {
    if (labResults) {
      setLabResults(false);
      setMyRecords(true);
    } else {
      setLabResults(true);
      setMyRecords(false);
    }
  };

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgba(29,36,45,0.8)]  "></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent px-2 sm:px-10">
        <div className=" bg-white  shadow-[0_5px_100px_-5px_rgba(0,0,0,0.25)] w-full  sm:w-[630px] lg:w-[980px]  rounded-[14px] h-[450px] sm:h-[500px] lg:max-h-[520px] overflow-y-scroll  my-8 hide-scrollbar">
          <div className="px-4 md:px-0">
            <div className="w-full sm:w-[550px] lg:w-full py-5 h-auto px-3 lg:pl-12 ">
              <div className="flex items-center gap-5 justify-between">
                <h1 className="text-lg lg:text-2xl text-black font-bold">
                  My Records
                </h1>

                <CloseFillIcon
                  size={50}
                  className="text-red-600 cursor-pointer"
                    onClick={onClose}
                />
              </div>
              {/* MODAL CONTENT */}
              <div className="">
                {myRecords && (
                  <MyRecords
                    basicInfo={handleBasicInfo}
                    healthMatrics={handleHealthMatrics}
                    condition={handleConditionSymptoms}
                    treatmentHistory={handleTreatmentHistory}
                    medications={handleMedications}
                    labResults={handleLabResults}
                  />
                )}
                {basicInfo && <BasicInfo onClose={handleBasicInfo} />}
                {healthMatrics && (
                  <HealthMatrics onClose={handleHealthMatrics} />
                )}
                {conditionSymptoms && (
                  <ConditionSymptoms onClose={handleConditionSymptoms} />
                )}
                {treatmentHistory && (
                  <TreatmentHistory onClose={handleTreatmentHistory} />
                )}
                {medications && <Medication onClose={handleMedications} />}
                {labResults && <LabResults onClose={handleLabResults} />}
              </div>
              {/* END OF MODAL CONTENT */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordModal;
