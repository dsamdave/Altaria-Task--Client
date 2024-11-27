import { resetAppointmentPayload } from "@/redux/slices/appointmentSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


interface CoontinueProps{
    onSelectTime: ()=> void;
}

const Continue:React.FC<CoontinueProps> = ({onSelectTime}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAppointmentPayload());
  }, []);


  return (
    <div className="mt-8">
      <div className="w-full sm:w-[327px] h-[400px] rounded-2xl bg-[#F5F5F5] p-3 flex flex-col items-center ">
        <h1 className="text-sm sm:text-base text-[#1E1F20] font-bold mt-5">
          Want to book an appointment?
        </h1>
        <p className="text-xs text-[#1E1F20] font-normal text-center mt-16">
        Click "Continue" to proceed with booking an appointment with ExpatDoc Online.
        </p>

        <button className="shrink bg-[#2662F0] rounded-xl w-full sm:w-[279px] mt-20 text-base text-center font-bold text-[#F5F5F5] py-3" onClick={onSelectTime}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Continue;
